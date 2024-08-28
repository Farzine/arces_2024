"use client"

import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';
import React, { useState, useEffect, Suspense } from 'react';
import { Calendar } from 'lucide-react';

interface ImportantDate {
  description: string;
  date: string;
}

const ImportantDates: React.FC = () => {
  const [dates, setDates] = useState<ImportantDate[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const fetchDates = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/important-dates`);
        if (!response.ok) {
          throw new Error('Failed to fetch important dates');
        }
        const data = await response.json();
        setDates(data);
      } catch (error) {
        console.error('Error fetching important dates:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDates();
  }, []);

  return (
    <div className='min-h-screen'>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="container mx-auto px-4 py-8 bg-white min-h-screen mt-20">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center mb-14 mt-8">
            <Calendar className="w-8 h-8 mr-2" />
            <h1 className="text-4xl font-bold">IMPORTANT DATES</h1>
          </div>
          <div className="bg-white rounded-lg overflow-hidden items-center border-none mb-16">
            <div className="grid grid-cols-2 border-b border-gray-200">
              <div className="p-4 font-bold text-xl shadow-sm flex items-center justify-center border-2">Description</div>
              <div className="p-4 font-bold text-xl shadow-sm flex items-center justify-center border-2">Date</div>
            </div>
            {dates.map((item, index) => (
              <div key={index} className="relative pt-2">
                <div className="grid grid-cols-2 gap-4 my-2">
                  <div className="p-4 bg-white shadow-md border-2 font-semibold pl-8">{item.description}</div>
                  <div className="p-4 bg-white shadow-md border-2 font-semibold justify-center items-center flex">
                    <span className="text-red-500">{item.date}</span>
                  </div>
                </div>
                {index !== dates.length - 1 && (
                  <div className="absolute left-1/2 top-full w-px h-8 bg-gray-200"></div>
                )}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-300 rounded-full border-4 border-white"></div>
              </div>
            ))}
            {isLoading && <div>Loading...</div>}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ImportantDates;