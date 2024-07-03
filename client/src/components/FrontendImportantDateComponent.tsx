import React, { useEffect, useState } from 'react';

const baseUrl = process.env.NEXT_PUBLIC_APP_BACKEND_URL;

interface ImportantDate {
  date: string;
  description: string;
}

const ImportantDates: React.FC = () => {
  const [dates, setDates] = useState<ImportantDate[]>([]);

  useEffect(() => {
    const fetchDates = async () => {
      try {
        const response = await fetch(`${baseUrl}/important-dates`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setDates(data);
      } catch (error) {
        console.error('Error fetching important dates:', error);
      }
    };

    fetchDates();
  }, []);

  return (
    <div className="max-w-80 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-customPurple text-white text-left py-4 px-6">
        <h2 className="text-xl font-bold text-black">IMPORTANT DATES</h2>
      </div>
      <div className="p-4">
        {dates.map((date, index) => (
          <div
            key={index}
            className={`flex p-2 rounded-md items-start pl-4 ${
              index % 2 !== 0 ? 'bg-white' : 'bg-gray-200'
            }`}
          >
            <div className="w-6 h-6 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5M12 12L12 6 6 6 6 6"
                />
                <circle cx="12" cy="12" r="9" />
              </svg>
            </div>
            <div className="ml-2">
              <div className="text-gray-900 font-bold">{date.date}</div>
              <div className="text-gray-500">{date.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantDates;
