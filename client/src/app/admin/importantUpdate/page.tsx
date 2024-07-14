"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Sidebar from '@/components/Sidebar';

interface ImportantUpdate {
  _id: string;
  title: string;
}

const ImportantUpdates: React.FC = () => {
  const [importantUpdate, setImportantUpdate] = useState<ImportantUpdate[]>([]);
  const [title, setTitle] = useState('');
  const [editId, setEditId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null); 
  const [success, setSuccess] = useState<boolean>(false); 
  const router = useRouter();

  useEffect(() => {
    fetchImportantUpdate();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(null);
      setSuccess(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [success, error]);

  const fetchImportantUpdate = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/important-updates`, {
        method: 'GET',
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        setImportantUpdate(data);
      } else {
        throw new Error('Failed to fetch important updates');
      }
    } catch (error) {
      console.error('Error fetching important update:', error);
      setError('Failed to fetch impoortant updates. Please try again.');
    }
  };

  const handleAddImportantUpdate = async () => {
    try {
      const token = Cookies.get('token');
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/important-updates/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify({ title}),
      });
      if (response.ok) {
        fetchImportantUpdate();
        setTitle('');
        setSuccess(true); 
      } else {
        throw new Error('Failed to add important update');
      }
    } catch (error) {
      console.error('Error adding important update:', error);
      setError('Failed to add important update. Please try again.'); 
    }
  };

  const handleDeleteImportantUpdate = async (id: string) => {
    try {
      const token = Cookies.get('token');
      if (!token) router.push('/admin');
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/important-updates/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
      });
      if (response.ok) {
        fetchImportantUpdate();
        setSuccess(true);
      } else {
        throw new Error('Failed to delete important update');
      }
    } catch (error) {
      console.error('Error deleting important update:', error);
      setError('Failed to delete important update. Please try again.'); 
    }
  };

  const handleEditImportantUpdate = (notice: ImportantUpdate) => {
    setEditId(notice._id);
    setTitle(notice.title);
  };

  const handleSaveEdit = async () => {
    if (!editId) return;

    try {
      const token = Cookies.get('token');
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/important-updates/edit/${editId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify({ title }),
      });
      if (response.ok) {
        fetchImportantUpdate();
        setEditId(null);
        setTitle('');
        setSuccess(true); 
      } else {
        throw new Error('Failed to save important update');
      }
    } catch (error) {
      console.error('Error saving important update:', error);
      setError('Failed to save important update. Please try again.'); 
    }
  };

  
  const dismissMessages = () => {
    setError(null);
    setSuccess(false);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="ml-64 flex-1 p-8 overflow-y-auto bg-gray-100 h-screen">
        <h1 className="text-3xl font-bold mb-4">Important Update</h1>

        {/* Success message display */}
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline"> Important Update operation successful.</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setSuccess(false)}>
              <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <title>Close</title>
                <path fillRule="evenodd" d="M14.354 5.354a1 1 0 011.414 1.414L11.414 10l4.354 4.354a1 1 0 11-1.414 1.414L10 11.414l-4.354 4.354a1 1 0 11-1.414-1.414L8.586 10 4.232 5.646a1 1 0 111.414-1.414L10 8.586l4.354-4.354z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        )}

        {/* Error message display */}
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
            className="p-2 border rounded w-1/3"
          />
          <button
            onClick={editId ? handleSaveEdit : handleAddImportantUpdate}
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-40"
          >
            {editId ? 'Save' : 'Submit'}
          </button>
        </div>

        <div className="mt-8 bg-gray-100">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Notice ID</th>
                <th className="py-2 px-4 border">Title</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {importantUpdate.map((notice) => (
                <tr key={notice._id}>
                  <td className="py-2 px-4 border">{notice._id}</td>
                  <td className="py-2 px-4 border">{notice.title}</td>
                  <td className="py-2 px-4 border space-x-2">
                    <button
                      onClick={() => handleEditImportantUpdate(notice)}
                      className=" text-black py-1 px-3 rounded hover:bg-green-600 border-2 border-green-600" 
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteImportantUpdate(notice._id)}
                      className=" text-black py-1 px-3 rounded hover:bg-red-600 border-2 border-red-600"
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

export default ImportantUpdates;
