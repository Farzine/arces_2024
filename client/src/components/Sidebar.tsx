import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import { FaBell, FaImage, FaEnvelope, FaCalendarCheck } from 'react-icons/fa';



const Sidebar: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();

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
                alert('Logged out successfully');
            } else {
                console.error('Logout failed');
            }
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    const getActiveClass = (path: string) => {
        return pathname === path ? 'bg-[#EAEFEF] text-black pt-2 pb-2' : '';
    };

    return (
        <div className="fixed h-full bg-[#a8c1c1] w-64 py-8 px-4 flex flex-col items-center"> 
            <div className="text-2xl font-bold mb-8">Hello, Admin</div>
            <div className="flex flex-col space-y-6 w-full">
                <div
                    onClick={() => handleNavigation('/admin/notices')}
                    className={`flex items-center space-x-3 cursor-pointer hover:text-green-600 p-5 rounded ${getActiveClass('/admin/notices')}`}
                >
                    <FaBell className="h-6 w-6" />
                    <span>Notice</span>
                </div>
                <div
                    onClick={() => handleNavigation('/admin/uploadImage')}
                    className={`flex items-center space-x-3 cursor-pointer hover:text-green-600 p-5 rounded ${getActiveClass('/admin/uploadImage')}`}
                >
                    <FaImage className="h-6 w-6" />
                    <span>Image</span>
                </div>
                <div
                    onClick={() => handleNavigation('/admin/importantDates')}
                    className={`flex items-center space-x-3 cursor-pointer hover:text-green-600 p-5 rounded ${getActiveClass('/admin/importantDates')}`}
                >
                    <FaCalendarCheck className="h-6 w-6" />
                    <span>Important Dates</span>
                </div>
                <div
                    onClick={() => handleNavigation('/admin/updateEmailPassword')}
                    className={`flex items-center space-x-3 cursor-pointer hover:text-green-600 p-5 rounded ${getActiveClass('/admin/updateEmailPassword')}`}
                >
                    <FaEnvelope className="h-6 w-6" />
                    <span>Email</span>
                </div>

            </div>
            <button
                onClick={handleLogout}
                className="mt-20 py-2 px-4 border border-green-600 text-black rounded hover:bg-green-600 hover:text-white"
            >
                Log Out
            </button>
        </div>
    );
};

export default Sidebar;
