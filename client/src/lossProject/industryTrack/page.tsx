"use client"

import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
const baseUrl = process.env.NEXT_PUBLIC_APP_BACKEND_URL;

type IndustryTrack = {
  _id: string;
  title: string;
  topics: string[];
};

const IndustryTracksPage: React.FC = () => {
  const [researchTracks, setResearchTracks] = useState<IndustryTrack[]>([]);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const fetchResearchTracks = async () => {
      try {
        const token = Cookies.get('token');
        const response = await fetch(`${baseUrl}/industry-tracks`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
  
        if (!response.ok) {
          throw new Error('Error fetching research tracks');
        }
  
        const data = await response.json();
        setResearchTracks(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchResearchTracks();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const token = Cookies.get('token');
      const response = await fetch(`${baseUrl}/industry-tracks/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Error deleting research track');
      }
  
      setMessage('Research track deleted successfully');
      setResearchTracks(researchTracks.filter((track) => track._id !== id));
    } catch (error) {
      setMessage('Error deleting research track');
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className='mb-4 bg-gray-400 p-2 rounded-md flex items-center justify-center'> 
      <h1 className="text-2xl font-bold mb-4">Industry Tracks</h1>
      </div>
      {message && <p className="text-red-500">{message}</p>}
      {researchTracks.map((track) => (
        <div key={track._id} className="mb-4 p-4 border rounded shadow bg-gray-50">
          <div className="flex mb-2 bg-gray-400 rounded-md p-3 items-center justify-between">
            <h2 className="text-xl font-semibold">{track.title}</h2>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => handleDelete(track._id)}
            >
              Delete
            </button>
          </div>
          <div className="list-disc list-inside">
            {track.topics.map((topic, index) => (
              <div className='bg-white rounded-md' key={index}>
              <div className='bg-gray-300 rounded items-center p-1 mb-1'>
                {topic}
              </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndustryTracksPage;
