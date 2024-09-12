"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Sidebar from '@/components/Sidebar';

interface Message {
  _id: string;
  messages: string;
  show: boolean | undefined;
}

const Messages: React.FC = () => {
  const [message, setMessage] = useState<Message[]>([]);
  const [messages, setMessages] = useState('');
  const [editId, setEditId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [RevShow, setRevShow] = useState<boolean>(false);
  const router = useRouter();
  const token = Cookies.get('token');
  if (!token) router.push('/admin');


  // for Show on/off
  const handleShow = async (id: string, show: boolean | undefined) => {


    setRevShow(!show);

    try {
      const token = Cookies.get("token");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/messages/show/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
          body: JSON.stringify({ "show": RevShow }),
        }
      );
      if (response.ok) {
        fetchMessages();

      } else {
        throw new Error("Failed to save message");
      }
    } catch (error) {
      console.error("Error saving message:", error);
      setError("Failed to save message. Please try again.");
    }


  };

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setError(null);
      setSuccess(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [success, error]);

  const fetchMessages = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/messages`, {
        method: 'GET',
        credentials: 'include',
      });
      if (response.ok) {
        const data = await response.json();
        setMessage(data);
      } else {
        throw new Error('Failed to fetch messages');
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
      setError('Failed to fetch messages. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleMessages = async () => {
    setLoading(true);
    try {
      const token = Cookies.get('token');
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/messages/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify({ messages }),
      });
      if (response.ok) {
        fetchMessages();
        setMessages('');
        setSuccess(true);
      } else {
        throw new Error('Failed to add messages');
      }
    } catch (error) {
      console.error('Error adding messages:', error);
      setError('Failed to add messages. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteMessages = async (id: string) => {
    setLoading(true);
    try {
      const token = Cookies.get('token');
      if (!token) router.push('/admin');
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/messages/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
      });
      if (response.ok) {
        fetchMessages();
        setSuccess(true);
      } else {
        throw new Error('Failed to delete messages');
      }
    } catch (error) {
      console.error('Error deleting messages:', error);
      setError('Failed to delete messages. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleEditMessages = (notice: Message) => {
    setEditId(notice._id);
    setMessages(notice.messages);
  };

  const handleSaveEdit = async () => {
    if (!editId) return;

    try {
      const token = Cookies.get('token');
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/messages/edit/${editId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify({ messages }),
      });
      if (response.ok) {
        fetchMessages();
        setEditId(null);
        setMessages('');
        setSuccess(true);
      } else {
        throw new Error('Failed to save messages');
      }
    } catch (error) {
      console.error('Error saving messages:', error);
      setError('Failed to save messages. Please try again.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen md:flex-row bg-gray-100">
      <Sidebar />
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
      <div className={`flex-1 p-4 md:p-8 overflow-y-auto bg-gray-100 h-screen ${loading ? 'filter blur-sm' : ''}`}>
        <h1 className="text-3xl font-bold mb-4">Chair Message</h1>

        {/* Success message display */}
        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline"> Message operation successful.</span>
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
          <textarea
            placeholder="Description"
            value={messages}
            onChange={(e) => setMessages(e.target.value)}
            className="p-2 border rounded w-full md:w-1/2 h-56"
          ></textarea>
          <button
            onClick={editId ? handleSaveEdit : handleMessages}
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-full md:w-40"
          >
            {editId ? 'Save' : 'Submit'}
          </button>
        </div>

        <div className="mt-8 bg-gray-100">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Message</th>
                <th className="py-2 px-4 border">Actions</th>
                <th className="py-2 px-4 border">Show/Hide</th>
              </tr>
            </thead>
            <tbody>
              {message.map((notice) => (
                <tr key={notice._id}>
                  <td className="py-2 px-4 border">{notice.messages}</td>
                  <td className="py-2 px-4 border space-x-2">
                    <button
                      onClick={() => handleEditMessages(notice)}
                      className="text-black py-1 px-3 m-2 rounded hover:bg-green-600 border-2 border-green-600 w-full md:w-auto"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteMessages(notice._id)}
                      className="text-black py-1 px-3 rounded hover:bg-red-600 border-2 border-red-600 w-full md:w-auto"
                    >
                      Delete
                    </button>
                  </td>

                  {/* Show/Hide status button*/}
                  <td className=" border space-x-2 ">
                    <label className="flex items-center justify-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={notice.show}
                        onChange={()=>handleShow(notice._id,notice.show)} // Trigger state update on change
                      />
                      <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isLoading && <div>Loading...</div>}
        </div>
      </div>
    </div>
  );
};

export default Messages;
