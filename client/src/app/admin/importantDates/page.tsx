"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format, parse } from 'date-fns';
import Sidebar from '@/components/Sidebar';

interface Dates {
  _id: string;
  date: string;
  description: string;
}

const ImportantDates: React.FC = () => {
  const [importantDates, setImportantDates] = useState<Dates[]>([]);
  const [dates, setDates] = useState<Date | null>(null);
  const [description, setDescription] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetchImportantDates();
  }, []);

  const fetchImportantDates = async () => {
    try {
        
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/important-dates`, {
        method: 'GET',
        credentials: 'include',
       
      });
      if (response.ok) {
        const data = await response.json();
        setImportantDates(data);
      } else {
        throw new Error('Failed to fetch important dates');
      }
    } catch (error) {
      console.error('Error fetching important dates:', error);
    }
  };

  const handleAddImportantDates = async () => {
    try {
      const token = Cookies.get('token');
      const formattedDate = dates ? format(dates, 'dd MMMM yyyy') : '';
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/important-dates/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify({
          date: formattedDate,
          description
        }),
      });
      if (response.ok) {
        fetchImportantDates();
        setDates(null);
        setDescription('');
        alert('Important date added successfully');
      } else {
        throw new Error('Failed to add important date');
      }
    } catch (error) {
      console.error('Error adding important date:', error);
    }
  };

  const handleDeleteImportantDates = async (id: string) => {
    try {
      const token = Cookies.get('token');
      if (!token) router.push('/admin');
      const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/important-dates/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
      });
      if (response.ok) {
        fetchImportantDates();
      } else {
        throw new Error('Failed to delete important date');
      }
    } catch (error) {
      console.error('Error deleting important date:', error);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 p-8 overflow-y-auto bg-[#d7dbdb]">
        <h1 className="text-3xl font-bold mb-4">Important Dates</h1>

        <div className="flex flex-col space-y-2">
          <DatePicker
            selected={dates}
            onChange={(date: Date | null) => setDates(date)}
            dateFormat="dd MMMM, yyyy"
            placeholderText="Select a date"
            className="p-2 border rounded"
            popperPlacement="bottom-start" // Ensures the calendar appears properly aligned
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border rounded w-1/3"
          ></textarea>
          <button
            onClick={handleAddImportantDates}
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-40"
          >
            Submit Date
          </button>
        </div>

        <div className="mt-8">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Date ID</th>
                <th className="py-2 px-4 border">Date</th>
                <th className="py-2 px-4 border">Description</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {importantDates.map((date) => (
                <tr key={date._id}>
                  <td className="py-2 px-4 border">{date._id}</td>
                  <td className="py-2 px-4 border">{moment(date.date).format('DD MMMM, YYYY')}</td>
                  <td className="py-2 px-4 border">{date.description}</td>
                  <td className="py-2 px-4 border space-x-2">
                    <button
                      onClick={() => handleDeleteImportantDates(date._id)}
                      className="text-black py-1 px-3 rounded hover:bg-red-600 border-2 border-red-600"
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

export default ImportantDates;
