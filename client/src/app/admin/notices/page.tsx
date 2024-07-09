"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Import icons as needed
import Sidebar from '@/components/Sidebar';
import { ro } from 'date-fns/locale';



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
  const router = useRouter();

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/notices`, {
      method: 'GET',
      credentials: 'include',
    });
    const data = await response.json();
    setNotices(data);
  };

  const handleAddNotice = async () => {
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
      alert('Notice added successfully');
    }
  };

  const handleDeleteNotice = async (id: string) => {
    const token = Cookies.get('token');
    if(!token) router.push('/admin');
    await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/notices/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
      credentials: 'include',
    });
    fetchNotices();
  };

  const handleEditNotice = (notice: Notice) => {
    setEditId(notice._id);
    setTitle(notice.title);
    setDescription(notice.description);
  };

  const handleSaveEdit = async () => {
    if (!editId) return;

    const token = Cookies.get('token');
    await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/notices/edit/${editId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      credentials: 'include',
      body: JSON.stringify({ title, description }),
    });
    setEditId(null);
    setTitle('');
    setDescription('');
    fetchNotices();
  };

  return (
    <div className="flex">
     <Sidebar />
      <div className="p-8 flex flex-col w-full">
        <h1 className="text-3xl font-bold mb-4">Notices</h1>

        <div className="flex flex-col space-y-2">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border rounded"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border rounded"
          ></textarea>
          <button
            onClick={editId ? handleSaveEdit : handleAddNotice}
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-40"
          >
            {editId ? 'Save' : 'Submit Notice'}
          </button>
        </div>

        <div className="mt-8">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Notice ID</th>
                <th className="py-2 px-4 border">Title</th>
                <th className="py-2 px-4 border">Description</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {notices.map((notice) => (
                <tr key={notice._id}>
                  <td className="py-2 px-4 border">{notice._id}</td>
                  <td className="py-2 px-4 border">{notice.title}</td>
                  <td className="py-2 px-4 border">{notice.description}</td>
                  <td className="py-2 px-4 border space-x-2">
                    <button
                      onClick={() => handleEditNotice(notice)}
                      className=" text-black py-1 px-3 rounded hover:bg-green-600 border-2 border-green-600" 
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteNotice(notice._id)}
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

export default Notices;
