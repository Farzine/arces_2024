import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

const NoticeCard: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const router = useRouter();

  const handleAddNotice = async () => {
    try {
      const token = Cookies.get('token');
      const response = await fetch('http://localhost:5000/notices/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description }),
      });

      if (!response.ok) {
        throw new Error('Error adding notice');
      }

      const data = await response.json();
      setMessage(data.message);
      setTitle('');
      setDescription('');
    } catch (error) {
      setMessage('Error adding notice');
      console.error(error);
    }
  };


  const handleSeeAll = () => {
    router.push('/Admin/notice');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-blue-200 p-8 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-xl font-bold mb-4 flex items-center justify-center">
          NOTICE
          <span className="ml-2 text-red-500">
            <svg version="1.1" viewBox="0 300 1920 1794" width="50" height="50" xmlns="http://www.w3.org/2000/svg">
              <path transform="translate(1068,503)" d="m0 0h21l21 5 16 7 16 10 13 11 12 11 10 11 13 17 12 18 11 19 14 27 12 28 14 37 12 36 10 35 10 42 9 47 9 59 5 41 3 34 2 41v36l-2 36-4 32-6 30-7 24-8 19-8 15-11 14-10 11-13 10-16 8-16 5-13 2h-17l-604-36-6-1 10 19 10 16 13 18 9 11 12 14 9 9 7 8 7 7 8 7 7 7 8 7 14 12 17 14 18 14 19 14 14 10 23 16 34 22 19 12 28 17 24 14 28 16 29 16 28 15 29 15 23 12 9 6 4 6 2 6v15l-4 15-11 23-13 20-13 18-11 14-11 13-9 11-13 14-7 8-15 16-16 17-7 6-60-40-16-11-23-16-17-12-54-39-38-28-36-27-21-16-51-39-36-28-42-33-16-13-17-13-17-14-14-11-11-9-16-13-14-11-13-11-14-11-14-12-14-11-10-9-10-8-14-12-11-9-14-12-13-11-28-24-10-9-8-7-6-7-13-8-15-6-25-6-29-4-31-2h-70l-11-20-12-27-12-36-5-24-3-25v-27l3-24 5-22 7-21 11-24 5-7 42-19 36-16 40-18 36-16 40-18 36-16 40-18 36-16 40-18 24-11 29-14 79-38 79-38 54-26 52-25 54-26 52-25 79-38 54-26 50-24 21-12 27-13 20-7z" fill="#ED3237" />
              <path transform="translate(1082,510)" d="m0 0h16l15 4 16 8 12 8 15 13 11 11 7 8 13 16 13 18 13 21 13 24 4 8v2h2l9 21 15 40 11 34 10 37 9 39 8 42 9 59 5 41 3 34 2 41v36l-2 36-4 32-6 30-7 24-8 19-8 15-11 14-4 5-7 4-8 5-11 4-6 1h-15l-14-3-16-6-16-9-14-10-15-13-13-13-9-11-12-16-14-22-12-22-8-16-9-19-13-32-12-34-10-31-2-10 11 3 16 4 7 1h21l15-3 13-5 11-6 9-7 9-8 11-15 8-16 5-14 3-14 1-9v-15l-3-19-6-16-8-14-7-9-7-8-14-11-14-8-14-6-19-5-8-1h-24l-15 3-13 5-12 9-7 10v17l2 22v8h-1l-6-51-3-37-1-23v-47l2-31 4-31 5-26 7-25 9-24 10-20 12-18 9-10 15-10 16-6z" fill="#F88338" />
              <path transform="translate(1345,1231)" d="m0 0 5 2 130 75 24 14 78 45 24 14 104 60 24 14 78 45 24 14 78 45 5 3-1 4-16 25-18 27-10 16-10 15-7 10-4-2-11-9-13-11-11-9-14-12-11-9-13-11-11-9-14-12-11-9-13-11-11-9-14-12-11-9-13-11-11-9-14-12-11-9-13-11-11-9-14-12-11-9-26-22-11-9-13-11-11-9-14-12-11-9-13-11-11-9-14-12-11-9-26-22-11-9-13-11-11-9-14-12-11-9-13-11-11-9-7-6z" fill="#ED3237" />
              <path transform="translate(1481,1)" d="m0 0 4 2 14 11 15 13 11 9 13 11 22 18 10 8-1 4-13 17-13 16-13 17-13 16-13 17-13 16-13 17-13 16-10 13-12 15-13 17-13 16-13 17-13 16-10 13-12 15-13 17-13 16-13 17-13 16-10 13-12 15-13 17-13 16-13 17-13 16-13 17-5 6-1-2 23-46 10-19 83-166 10-19 84-168 10-19z" fill="#ED3237" />
              <path transform="translate(1759,725)" d="m0 0h2l2 12 10 85v4h-70l-300-4-46-1 3-2 144-34 132-31z" fill="#ED3237" />
              <path transform="translate(1400,1050)" d="m0 0 22 1 280 19 5 1-4 24-9 49-3 1-50-16-201-65-38-12z" fill="#ED3237" />
              <path transform="translate(1537,441)" d="m0 0 4 2 13 16 10 13 11 14 6 8-4 4-26 15-28 17-32 19-25 15-32 19-28 17-64 38-2 1 1-3 8-7z" fill="#ED3237" />
              <path transform="translate(1344,1230)" d="m0 0" fill="#ED3237" />
              <path transform="translate(1223,514)" d="m0 0" fill="#ED3237" />
            </svg>
          </span>
        </h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <div className="flex justify-between">
          <button
            onClick={handleAddNotice}
            className="w-1/2 p-2 bg-purple-500 text-white rounded mr-1"
          >
            Add
          </button>
          <button className="w-1/2 p-2 bg-blue-500 text-white rounded ml-1" onClick={handleSeeAll}> 
            See all
          </button>
        </div>
        {message && <p className="mt-4 text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default NoticeCard;