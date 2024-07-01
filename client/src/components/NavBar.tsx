import React, { useState } from 'react';
import Image from 'next/image'; // If using Next.js for image optimization

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isTrackOpen, setIsTrackOpen] = useState(false);
    const [isAttendingOpen, setIsAttendingOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleTrack = () => {
        setIsTrackOpen(!isTrackOpen);
    };

    const toggleAttending = () => {
        setIsAttendingOpen(!isAttendingOpen);
    };

    return (
        <header className="bg-white">
            <nav className="flex justify-between items-center w-[92%] mx-auto">
                <div>
                    <Image className="w-16 cursor-pointer" src="/image.png" alt="Logo" width={64} height={64} />
                </div>
                <div className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-${isMenuOpen ? '9%' : '-100%'} md:w-auto w-full flex items-center px-5`}>
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                        <li>
                            <a className="hover:text-gray-500" href="#">Products</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">Home</a>
                        </li>
                        <li className="relative">
                            <a className="hover:text-gray-500 cursor-pointer" onClick={toggleTrack}>Track</a>
                            {isTrackOpen && (
                                <ul className="absolute bg-white shadow-md mt-2">
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Research Track</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Industry Track</a></li>
                                </ul>
                            )}
                        </li>
                      
                        <li>
                            <a className="hover:text-gray-500" href="#">For-Authors</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">Committees</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">Important Dates</a>
                        </li>
                        <li className="relative">
                            <a className="hover:text-gray-500 cursor-pointer" onClick={toggleAttending}>Attending</a>
                            {isAttendingOpen && (
                                <ul className="absolute bg-white shadow-md mt-2">
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Venue: SUST</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Location: SUST</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Accommodation</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Travel Information</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Code of Conduct</a></li>
                                    <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Equity, Diversity, and Inclusion</a></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">Gallery</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                    <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Register</button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;