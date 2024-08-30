"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import React, { useState, useEffect, Suspense } from "react";
import { Calendar } from "lucide-react";

interface ImportantDate {
  description: string;
  date: string;
}

const ImportantDates: React.FC = () => {
  const [dates, setDates] = useState<ImportantDate[]>([]);

  useEffect(() => {
    const fetchDates = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/important-dates`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch important dates");
        }
        const data = await response.json();
        setDates(data);
      } catch (error) {
        console.error("Error fetching important dates:", error);
      }
    };

    fetchDates();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="container mx-auto px-4 py-12 bg-white min-h-screen mt-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-16 mt-8">
            <Calendar className="w-10 h-10 mr-4 text-gray-700" />
            <h1 className="text-5xl font-bold text-center text-gray-800">
              IMPORTANT DATES
            </h1>
          </div>
          <Suspense fallback={<p className="text-center text-2xl">Loading dates...</p>}>
            <div className="bg-gray-50 rounded-lg overflow-hidden border-none mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-300">
                <div className="p-6 font-bold text-2xl shadow-md flex items-center justify-center bg-gray-100 border-2">
                  Description
                </div>
                <div className="p-6 font-bold text-2xl shadow-md flex items-center justify-center bg-gray-100 border-2">
                  Date
                </div>
              </div>
              {dates.map((item, index) => (
                <div key={index} className="relative py-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                    <div className="p-6 bg-white shadow-lg border-2 text-xl font-semibold text-center md:text-left">
                      {item.description}
                    </div>
                    <div className="p-6 bg-white shadow-lg border-2 text-xl font-semibold flex justify-center items-center">
                      <span className="text-red-600">{item.date}</span>
                    </div>
                  </div>
                  {index !== dates.length - 1 && (
                    <div className="absolute left-1/2 top-full w-px h-10 bg-gray-300"></div>
                  )}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gray-400 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </Suspense>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ImportantDates;