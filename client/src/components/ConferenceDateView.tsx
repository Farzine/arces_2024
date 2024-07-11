import React, { useEffect, useState } from 'react';

interface ConferenceDate {
  _id: string;
  date: string;
  description: string;
}

const ConferenceDateView: React.FC = () => {
  const [dates, setDates] = useState<ConferenceDate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDates = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/important-dates`);
        const data = await response.json();
        setDates(data);
      } catch (error) {
        setError('Failed to fetch important dates');
      } finally {
        setIsLoading(false);
      }
    };

    fetchDates();
  }, []);

  // Calculate the maximum description length to determine fixed card width
  const maxDescriptionLength = dates.reduce((max, date) => Math.max(max, date.description.length), 0);
  const cardWidth = `${maxDescriptionLength * 10 + 120}px`; // Adjust 10 and 120 according to your design

  return (
    <div className=" p-7 shadow-lg rounded-lg bg-white">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Conference Date</h1>
        <p className="text-2xl text-red-500">January 09-11, 2025</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 overflow-x-auto ">
        {dates.map((date) => (
          <div key={date._id} className="justify-center overflow-hidden border p-4 rounded-lg shadow-lg h-36" style={{ maxWidth: cardWidth }}>
            <div className="flex flex-col h-full">
              <p className="text-lg font-bold">{date.description}</p>
              <p className="text-sm text-red-500 mt-auto">{date.date}</p>
            </div>
          </div>
        ))}
      </div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default ConferenceDateView;
