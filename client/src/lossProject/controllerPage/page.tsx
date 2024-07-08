"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import NoticeCard from '@/lossProject/NoticeAddCard';
import ImportantDateCard from '@/lossProject/ImportantDateAddCard';
import ResearchTrack from '@/lossProject/ResearchTrackAddCard';
import IndustryTrack from '@/lossProject/IndustryTrackAddCard';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import ImageUpload from '@/lossProject/ImageUpload';

const AdminPage: React.FC = () => {
  const routes = useRouter();

  const handleChange = () => {
    routes.push('/Admin/changeEmailPass');
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-400">ADMIN PAGE</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 w-full justify-center items-center">
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
        <div className="bg-white p-4">
          <ImageUpload/>
        </div>
        <div className="p-4 border-gray-400 right-52">        
      <button
        onClick={handleChange}
        className="bg-purple-700 text-white py-2 px-4 rounded-full hover:bg-purple-800 items-center justify-center">
        CHANGE EMAIL AND PASSWORD
      </button>
      </div>
      </div>
      <div>
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default AdminPage;
