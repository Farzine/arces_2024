import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { FaBell, FaImage, FaEnvelope } from 'react-icons/fa';

const Sidebar: React.FC = () => {
    const router = useRouter();
    const [active, setActive] = useState('');

    const handleLogout = async () => {
        try {
            const token = Cookies.get('token');
            const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/admin/logout`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                credentials: 'include',
            });

            if (response.ok) {
                router.push('/admin');
            } else {
                console.error('Logout failed');
            }
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const handleNavigation = (path: string) => {
        setActive(path);
        router.push(path);
    };

    return (
        <div className="h-screen bg-gray-200 w-64 py-8 px-4 flex flex-col items-center">
            <div className="text-2xl font-bold mb-8">Hello, Admin</div>
            <div className="flex flex-col space-y-6 w-full">
                <div
                    onClick={() => handleNavigation('/admin/notices')}
                    className={`flex items-center space-x-3 cursor-pointer hover:text-green-600 p-5 rounded ${active === '/admin/notices' ? 'bg-white' : ''}`}
                >
                    <FaBell className="h-6 w-6" />
                    <span>Notice</span>
                </div>
                <div
                    onClick={() => handleNavigation('/admin/uploadImage')}
                    className={`flex items-center space-x-3 cursor-pointer hover:text-green-600 p-5 rounded ${active === '/admin/uploadImage' ? 'bg-white' : ''}`}
                >
                    <FaImage className="h-6 w-6" />
                    <span>Image</span>
                </div>
                <div
                    onClick={() => handleNavigation('/admin/updateEmailPassword')}
                    className={`flex items-center space-x-3 cursor-pointer hover:text-green-600 p-5 rounded ${active === '/admin/updateEmailPassword' ? 'bg-white' : ''}`}
                >
                    <FaEnvelope className="h-6 w-6" />
                    <span>Email</span>
                </div>
            </div>
            <button
                onClick={handleLogout}
                className="mt-20 py-2 px-4 border border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white"
            >
                Log Out
            </button>
        </div>
    );
};

export default Sidebar;
