"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Sidebar from '@/components/Sidebar';

interface Notice {
  _id: string;
  title: string;
  description: string;
}

const Notices: React.FC = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editId, setEditId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    fetchNotices();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(null);
      setSuccess(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [success, error]);

  const fetchNotices = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/notices`, {
        method: 'GET',
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        setNotices(data);
      } else {
        throw new Error('Failed to fetch notices');
      }
    } catch (error) {
      console.error('Error fetching notices:', error);
      setError('Failed to fetch notices. Please try again.');
    }
  };

  const handleAddNotice = async () => {
    try {
      const token = Cookies.get('token');
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/notices/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify({ title, description }),
      });
      if (response.ok) {
        fetchNotices();
        setTitle('');
        setDescription('');
        setSuccess(true);
      } else {
        throw new Error('Failed to add notice');
      }
    } catch (error) {
      console.error('Error adding notice:', error);
      setError('Failed to add notice. Please try again.');
    }
  };

  const handleDeleteNotice = async (id: string) => {
    try {
      const token = Cookies.get('token');
      if (!token) router.push('/admin');
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/notices/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
      });
      if (response.ok) {
        fetchNotices();
        setSuccess(true);
      } else {
        throw new Error('Failed to delete notice');
      }
    } catch (error) {
      console.error('Error deleting notice:', error);
      setError('Failed to delete notice. Please try again.');
    }
  };

  const handleEditNotice = (notice: Notice) => {
    setEditId(notice._id);
    setTitle(notice.title);
    setDescription(notice.description);
  };

  const handleSaveEdit = async () => {
    if (!editId) return;

    try {
      const token = Cookies.get('token');
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/notices/edit/${editId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify({ title, description }),
      });
      if (response.ok) {
        fetchNotices();
        setEditId(null);
        setTitle('');
        setDescription('');
        setSuccess(true);
      } else {
        throw new Error('Failed to save notice');
      }
    } catch (error) {
      console.error('Error saving notice:', error);
      setError('Failed to save notice. Please try again.');
    }
  };

  const dismissMessages = () => {
    setError(null);
    setSuccess(false);
  };

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <Sidebar />
      <div className="flex-1 p-4 md:p-8 overflow-y-auto bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Notices</h1>

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline"> Notice operation successful.</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setSuccess(false)}>
              <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <title>Close</title>
                <path fillRule="evenodd" d="M14.354 5.354a1 1 0 011.414 1.414L11.414 10l4.354 4.354a1 1 0 11-1.414 1.414L10 11.414l-4.354 4.354a1 1 0 11-1.414-1.414L8.586 10 4.232 5.646a1 1 0 111.414-1.414L10 8.586l4.354-4.354z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {error}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setError(null)}>
              <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <title>Close</title>
                <path fillRule="evenodd" d="M14.354 5.354a1 1 0 011.414 1.414L11.414 10l4.354 4.354a1 1 0 11-1.414 1.414L10 11.414l-4.354 4.354a1 1 0 11-1.414-1.414L8.586 10 4.232 5.646a1 1 0 111.414-1.414L10 8.586l4.354-4.354z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        )}

        <div className="flex flex-col space-y-2 bg-gray-100">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border rounded w-full md:w-1/3"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border rounded w-full md:w-1/3"
          ></textarea>
          <button
            onClick={editId ? handleSaveEdit : handleAddNotice}
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-full md:w-40"
          >
            {editId ? 'Save' : 'Submit Notice'}
          </button>
        </div>

        <div className="mt-8 bg-gray-100">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Title</th>
                <th className="py-2 px-4 border">Description</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {notices.map((notice) => (
                <tr key={notice._id}>
                  <td className="py-2 px-4 border">{notice.title}</td>
                  <td className="py-2 px-4 border">{notice.description}</td>
                  <td className="py-2 px-4 border space-x-2">
                    <button
                      onClick={() => handleEditNotice(notice)}
                      className="text-black py-1 px-3 rounded hover:bg-green-600 border-2 border-green-600 w-full md:w-auto"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteNotice(notice._id)}
                      className="text-black py-1 px-3 rounded hover:bg-red-600 border-2 border-red-600 w-full md:w-auto"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Notices;
