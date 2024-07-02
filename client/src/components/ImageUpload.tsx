import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
const baseUrl = process.env.NEXT_PUBLIC_APP_BACKEND_URL;

const ImageUpload: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!image) {
      setMessage('Please select an image');
      return;
    }

    try {
      const token = Cookies.get('token');
      const formData = new FormData();
      formData.append('image', image);

      const response = await fetch(`${baseUrl}/images/upload`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Error uploading image');
      }

      const data = await response.json();
      setMessage(data.message);
      setImage(null);
    } catch (error) {
      setMessage('Error uploading image');
      console.error(error);
    }
  };

  const handleSeeAll = () => {
    router.push('/Admin/gallery');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-blue-200 p-8 rounded-lg shadow-lg w-80 text-center">
        <h2 className="text-xl font-bold mb-4">Upload Image</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <div className="flex justify-between">
        <button
          onClick={handleUpload}
          className="w-1/2 p-2 bg-purple-500 text-white rounded mr-1"
        >
          Upload
        </button>
        <button className="w-1/2 p-2 bg-blue-500 text-white rounded ml-1" onClick={handleSeeAll}> 
            See all
          </button>
        </div>
        {message && <p className="mt-4 text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default ImageUpload;
