"use client"
import React, { useState, useEffect, useRef } from 'react';
import Sidebar from '@/components/Sidebar';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const UploadImagePage: React.FC = () => {
    const [images, setImages] = useState([]);
    const [file, setFile] = useState<File | null>(null);
    const [description, setDescription] = useState('');
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const router = useRouter();

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const token = Cookies.get('token');
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/images`, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            if (response.ok) {
                const data = await response.json();
                setImages(data);
            } else {
                console.error('Error fetching images:', response.statusText);
                if (response.status === 403) {
                    alert('Unauthorized: Please log in again.');
                    router.push('/admin');
                }
            }
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!file) {
            console.error('No file selected');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);
        formData.append('description', description);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/images/upload`, {
                method: 'POST',
                credentials: 'include',
                body: formData,
                headers: {
                    'Authorization': `Bearer ${Cookies.get('token')}`,
                }
            });

            if (response.ok) {
                fetchImages();
                setFile(null);
                setDescription('');
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
                alert('Image uploaded successfully');
            } else {
                const errorText = await response.text();
                console.error('Error uploading image:', errorText);
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            const token = Cookies.get('token');
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/images/${id}`, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });

            if (response.ok) {
                fetchImages();
            } else {
                console.error('Error deleting image:', response.statusText);
                if (response.status === 403) {
                    alert('Unauthorized: Please log in again.');
                    router.push('/admin');
                }
            }
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };

    const truncateText = (text: string, maxLength: number) => {
        if (text.length <= maxLength) {
          return text;
        }
        return text.slice(0, maxLength) + '...';
      };

    return (
        <div className="flex">
            <Sidebar />
            <div className="ml-64 flex-1 p-8 overflow-y-auto">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mb-8 w-1/3">
                    <input 
                        type="file" 
                        ref={fileInputRef}
                        onChange={handleFileChange} 
                        className="border-2 border-white p-1"
                    />
                    <input 
                        type="text" 
                        value={description}
                        onChange={handleDescriptionChange}
                        placeholder="Enter Picture Description"
                        className="border p-2"
                    />
                    <button 
                        type="submit" 
                        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-40"
                    >
                        Upload Image
                    </button>
                </form>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((image: any) => (
                        <div key={image._id} className="flex justify-between items-center border p-4 rounded shadow-md">
                            <div style={{ flex: 1 }}>
                                <p className="mb-2 text-gray-700" style={{ maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {truncateText(image.description, 30)}
                                </p>
                                <button
                                    onClick={() => handleDelete(image._id)}
                                    className="mt-2 px-2 py-1 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition-colors duration-200"
                                    style={{ fontSize: '0.75rem' }}
                                >
                                    Delete
                                </button>
                            </div>
                            <img src={image.path} alt={image.description} className="w-32 h-24 object-cover rounded ml-4" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UploadImagePage;
