import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format, parse } from 'date-fns';
const baseUrl = process.env.NEXT_PUBLIC_APP_BACKEND_URL;

const ImportantDateCard: React.FC = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleAddDate = async () => {
    try {
      const token = Cookies.get('token');
      const formattedDate = date ? format(date, 'dd MMMM yyyy') : '';

      const response = await fetch(`${baseUrl}/important-dates/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ date: formattedDate, description }),
      });

      if (!response.ok) {
        throw new Error('Error adding date');
      }

      const data = await response.json();

      setMessage(data.message);
      setDate(null); 
      setDescription('');
    } catch (error) {
      setMessage('Error adding date');
      console.error(error);
    }
  };

  const handleSeeAll = () => {
    router.push('/Admin/importantsDates');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-blue-200 p-8 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-xl font-bold mb-4 flex items-center justify-center">
          IMPORTANT DATES
          <span className="ml-2 text-red-500">
            <svg version="1.1" viewBox="0 100 2048 1228" width="50" height="60" xmlns="http://www.w3.org/2000/svg">
              <path transform="translate(750)" d="m0 0h32l11 5 12 5 11 8 11 9 10 13 6 11 4 10 4 15 1 50 1 3 3 1h71l13-1 1-47 3-19 5-12 8-13 9-11 7-7 16-10 10-5 14-4 2-1h31l8 4 11 4 14 8 10 9 7 7 10 14 5 12 5 20 1 52h85l4-3 1-56 2-4 2-8 8-16 10-14 13-12 16-9 5-3 6-1 10-4h32l8 4 10 3 13 8 10 8 9 9 7 10 8 16 3 10 2 20v38l1 3 2 1 61 1 27 9 17 9 13 9 11 9 9 9 10 13 8 13 8 17 2 7 3 17v841l-4 16-5 13-9 16-11 14-9 10-12 11-10 7-23 12-15 6-13 3-16 2h-810l-20-3-25-10-18-10-15-13-10-9-11-13-11-18-4-8-6-17-4-18-1-2v-822l2-4 1-11 2-6 6-17 6-12 9-14 9-11 8-8 8-7 12-9 18-10 15-6 10-3 7-1 1-1 70-1v-41l1-13 5-17 8-16 9-13 7-8 15-10 14-7 8-2zm8 50-9 2-5 4v3l-5 2-3 4 1 1h9l4-3 16 4 2 4 3 5 4 11 3 4 6 1 1 4v9l-1 12 3 10 2 1 1-4h2l1 4 3 7 4-1 1-4 1-20v-24l-1-9-7-14-10-9-9-4z" fill="#FCFCFC" />
              <path transform="translate(750)" d="m0 0h32l11 5 12 5 11 8 11 9 10 13 6 11 4 10 4 15 1 50 1 3 3 1h71l13-1 1-47 3-19 5-12 8-13 9-11 7-7 16-10 10-5 14-4 2-1h31l8 4 11 4 14 8 10 9 7 7 10 14 5 12 5 20 1 52h85l4-3 1-56 2-4 2-8 8-16 10-14 13-12 16-9 5-3 6-1 10-4h32l8 4 10 3 13 8 10 8 9 9 7 10 8 16 3 10 2 20v38l1 3 2 1 61 1 27 9 17 9 13 9 11 9 9 9 10 13 8 13 8 17 2 7 3 17v841l-4 16-5 13-9 16-11 14-9 10-12 11-10 7-23 12-15 6-13 3-16 2h-810l-20-3-25-10-18-10-15-13-10-9-11-13-11-18-4-8-6-17-4-18-1-2v-822l2-4 1-11 2-6 6-17 6-12 9-14 9-11 8-8 8-7 12-9 18-10 15-6 10-3 7-1 1-1 70-1v-41l1-13 5-17 8-16 9-13 7-8 15-10 14-7 8-2zm8 50-9 2-5 4v3l-5 2-3 4 1 1h9l4-3 16 4 2 4 3 5 4 11 3 4 6 1 1 4v9l-1 12 3 10 2 1 1-4h2l1 4 3 7 4-1 1-4 1-20v-24l-1-9-7-14-10-9-9-4zm-184 284-1 1v720l2 14 5 13 7 10 8 8 14 8 10 3 8 1h797l12-3 16-8 10-10 8-13 4-13 1-8v-722l-1-1z" fill="#055384" />
              <path transform="translate(849,479)" d="m0 0h150v101l-1 33h-149l-1-1v-124z" fill="#045384" />
              <path transform="translate(849,658)" d="m0 0h150v101l-1 33h-150v-124z" fill="#045384" />
              <path transform="translate(863,836)" d="m0 0h135l1 1v100l-1 33h-150v-133z" fill="#045384" />
              <path transform="translate(1250,479)" d="m0 0h150l1 24-1 110h-149l-1-4z" fill="#045384" />
              <path transform="translate(648,479)" d="m0 0h150l-1 134h-149l-1-1v-121z" fill="#045384" />
              <path transform="translate(1049,479)" d="m0 0h150l1 23v27l-1 84h-149l-1-15z" fill="#045384" />
              <path transform="translate(1049,658)" d="m0 0h150l1 40-1 94h-149l-1-1z" fill="#045384" />
              <path transform="translate(648,658)" d="m0 0h149v134h-149l-1-1v-117z" fill="#045384" />
              <path transform="translate(662,836)" d="m0 0h131l5 1-1 133h-150v-133z" fill="#045384" />
              <path transform="translate(1250,658)" d="m0 0h150l1 32-1 102h-138l-12-1z" fill="#045384" />
              <path transform="translate(1251,836)" d="m0 0h130l19 1v133h-149l-1-9v-124z" fill="#045384" />
              <path transform="translate(1050,836)" d="m0 0h135l14 1v133h-149l-1-9v-124z" fill="#045384" />
              <path transform="translate(1023,49)" d="m0 0h11l10 3 8 5 5 5 6 8 4 10 1 8v156l-1 15-4 11-6 9-10 8-10 4h-16l-12-5-9-8-7-12-2-7-1-18v-145l1-15 4-11 4-6 4-5 10-7z" fill="#FCFCFC" />
              <path transform="translate(1288,49)" d="m0 0h11l10 3 9 6 8 9 4 8 2 7v176l-4 12-8 11-10 7-9 3h-15l-10-4-8-6-6-7-5-11-2-10v-167l3-12 4-8 9-10 12-6z" fill="#FCFCFC" />
              <path transform="translate(743,55)" d="m0 0 2 1-1 3-7 5v1h9l4-3 14 4 5 5 3 5 4 11 2 3 6 2 2 4v9l-1 12 3 10 2-3h2l4 9v2l3-1 1-4 1-20v-31h1l1 6v168l-2 10-4 9-6 8-9 7-10 4h-16l-12-5-8-7-6-10-3-8-1-4-1-103 1-73 4-11 6-8z" fill="#FCFCFC" />
              <path transform="translate(742,61)" d="m0 0h2l-1 3z" fill="#FCFCFC" />
            </svg>
          </span>
        </h2>
        <div className="text-left mb-4">
          <span className="inline-block">Input Date:</span>
          <DatePicker
            selected={date}
            onChange={(date: Date | null, event: React.SyntheticEvent<any> | undefined) => setDate(date)}
            dateFormat="dd MMMM yyyy"
            placeholderText="Example 30 June 2024"
            className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
          />
        </div>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded text-black"
        />
        <div className="flex justify-between">
          <button
            onClick={handleAddDate}
            className="w-1/2 p-2 bg-purple-500 text-white rounded mr-1"
          >
            Add
          </button>
          <button
            onClick={handleSeeAll}
            className="w-1/2 p-2 bg-blue-500 text-white rounded ml-1"
          >
            See all
          </button>
        </div>
        {message && <p className="mt-4 text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default ImportantDateCard;
