"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import NoticeCard from '@/components/NoticeAddCard';
import ImportantDateCard from '@/components/ImportantDateAddCard';
import ResearchTrack from '@/components/ResearchTrackAddCard';
import IndustryTrack from '@/components/IndustryTrackAddCard';

const AdminPage: React.FC = () => {
  const routes = useRouter();

  const handleChange = () => {
    routes.push('/change-email-password');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-400">ADMIN PAGE</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 w-full">
        <div className="bg-white p-4">
          <NoticeCard />
        </div>
        <div className="bg-white p-4">
          <ImportantDateCard />
        </div>
        <div className="bg-white  p-4">
          <ResearchTrack />
        </div>
        <div className="bg-white p-4">
          <IndustryTrack />
        </div>
      </div>
      <button
        onClick={handleChange}
        className="bg-purple-700 text-white py-2 px-4 rounded-full hover:bg-purple-800"
      >
        CHANGE EMAIL AND PASSWORD
      </button>
    </div>
  );
};

export default AdminPage;
