import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
const baseUrl = process.env.NEXT_PUBLIC_APP_BACKEND_URL;

interface Notice {
  _id: string;
  title: string;
  description: string;
}

const NoticeBoard: React.FC = () => {
  const [notices, setNotices] = useState<Notice[]>([]);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await fetch(`${baseUrl}/notices`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setNotices(data);
    } catch (error) {
      console.error('Error fetching notices:', error);
    }
  };

  const deleteNotice = async (id: string) => {
    const token = Cookies.get('token');
    try {
      const response = await fetch(`${baseUrl}/notices/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        
      });

      if (response.ok) {
        setNotices(notices.filter((notice) => notice._id !== id));
      } else {
        alert('Failed to delete notice');
      }
    } catch (error) {
      console.error('Error deleting notice:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-500 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">ALL NOTICES</h1>
      <div className="space-y-4">
        {notices.map((notice) => (
          <div key={notice._id} className="bg-white p-4 rounded shadow-md flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-black">{notice.title}</h2>
              <p className="text-gray-600">{notice.description}</p>
            </div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={() => deleteNotice(notice._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;
