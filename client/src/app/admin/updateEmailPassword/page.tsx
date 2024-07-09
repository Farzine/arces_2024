"use client"
import Sidebar from '@/components/Sidebar';
import React, { useState } from 'react';
import Cookies from 'js-cookie';


const EmailPage = () => {
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const token = Cookies.get('token');

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();

    await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/admin/update-email-password`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,

      },
      body: JSON.stringify({ newEmail, newPassword }),
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Email and password updated successfully') {
          alert('Updated successfully');
        } else {
          alert('Update failed');
        }
      });
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow p-10">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-1/2">
          <input
            type="email"
            placeholder="New Email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="border border-gray-300 p-2 rounded"
          />
          <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-20">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EmailPage;
