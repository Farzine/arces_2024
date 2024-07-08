"use client";

import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const baseUrl = process.env.NEXT_PUBLIC_APP_BACKEND_URL;

interface Image {
  _id: string;
  path: string;
}

const ImageList: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const token = Cookies.get('token');
      const response = await fetch(`${baseUrl}/images`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Error fetching images');
      }

      const data = await response.json();
      setImages(data);
    } catch (error) {
      setMessage('Error fetching images');
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const token = Cookies.get('token');
      const response = await fetch(`${baseUrl}/images/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Error deleting image');
      }

      setMessage('Image deleted successfully');
      fetchImages();
    } catch (error) {
      setMessage('Error deleting image');
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold my-4">Image List</h2>
      {message && <p className="text-red-500">{message}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <div key={image._id} className="bg-white p-4 rounded-lg shadow-lg">
            <img src={image.path} alt="Uploaded" className="w-full h-48 object-cover mb-4 rounded"/>
            <button
              onClick={() => handleDelete(image._id)}
              className="w-full p-2 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
