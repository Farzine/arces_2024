import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import moment from 'moment';
const baseUrl = process.env.APP_BACKEND_URL;

interface ImportantDate {
  _id: string;
  date: string;
  description: string;
}

const ImportantDates: React.FC = () => {
  const [importantDates, setImportantDates] = useState<ImportantDate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchImportantDates();
  }, []);

  const fetchImportantDates = async () => {
    try {
      const response = await fetch(`${baseUrl}/important-dates`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setImportantDates(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching important dates:', error);
      setError('Failed to fetch important dates');
      setLoading(false);
    }
  };

  const deleteImportantDate = async (id: string) => {
    const token = Cookies.get('token');
    console.log(token);
    try {
      const response = await fetch(`${baseUrl}/important-dates/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      if (response.ok) {
        setImportantDates(importantDates.filter((date) => date._id !== id));
      } else {
        alert('Failed to delete important date');
      }
    } catch (error) {
      console.error('Error deleting important date:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="p-6 bg-gray-500 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Important Dates</h1>
      <div className="space-y-4">
        {importantDates.map((date) => (
          <div key={date._id} className="bg-white p-4 rounded shadow-md flex justify-between items-center">
            <div>
              <p className="text-xl font-semibold text-black">{moment(date.date).format('DD MMMM, YYYY')}</p>
              <p className="text-gray-600">{date.description}</p>
            </div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={() => deleteImportantDate(date._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantDates;
