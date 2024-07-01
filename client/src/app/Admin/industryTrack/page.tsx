"use client"

import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

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
        const response = await fetch('http://localhost:5000/industry-tracks', {
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
      const response = await fetch(`http://localhost:5000/industry-tracks/${id}`, {
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
      <h1 className="text-2xl font-bold mb-4">Research Tracks</h1>
      {message && <p className="text-red-500">{message}</p>}
      {researchTracks.map((track) => (
        <div key={track._id} className="mb-4 p-4 border rounded shadow">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold">{track.title}</h2>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => handleDelete(track._id)}
            >
              Delete
            </button>
          </div>
          <ul className="list-disc list-inside">
            {track.topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default IndustryTracksPage;
