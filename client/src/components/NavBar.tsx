import React, { useState } from 'react';
import Image from 'next/image'; // If using Next.js for image optimization



    interface NavBarProps {
        // Define any props here if needed
    }

    interface LinkClickHandler {
        (link: string): void;
    }

    const Navbar: React.FC<NavBarProps> = () => {
        const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
        const [isTrackOpen, setIsTrackOpen] = useState<boolean>(false);
        const [isAttendingOpen, setIsAttendingOpen] = useState<boolean>(false);
        const [activeLink, setActiveLink] = useState<string>('');
        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
        };
        const toggleTrack = () => {
            setIsTrackOpen(!isTrackOpen);
            setIsAttendingOpen(false); // Close the Attending dropdown
            setActiveLink('Track');
        };
        const toggleAttending = () => {
            setIsAttendingOpen(!isAttendingOpen);
            setIsTrackOpen(false); // Close the Track dropdown
            setActiveLink('Attending');
        };

        const handleLinkClick: LinkClickHandler = (link) => {
            setActiveLink(link);
            setIsTrackOpen(false);
            setIsAttendingOpen(false);
        };

        return (
            <header className="bg-white">
                <nav className="flex justify-between items-center w-[92%] mx-auto">
                    <div>
                        <Image className="w-16 cursor-pointer" src="https://res.cloudinary.com/djmgdgx86/image/upload/v1719935885/iakiez3xo3g0v2nxymhj.jpg" alt="Logo" width={64} height={64} />
                    </div>
                    <div className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-${isMenuOpen ? '9%' : '-100%'} md:w-auto w-full flex items-center px-5`}>
                        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                            <li>
                                <a 
                                    className={`hover:text-gray-500 ${activeLink === 'Home' ? 'underline' : ''}`} 
                                    href="#home" 
                                    onClick={() => handleLinkClick('Home')}
                                >
                                    Home
                                </a>
                            </li>
                            <li className="relative">
                                <a 
                                    className={`hover:text-gray-500 cursor-pointer ${activeLink === 'Track' ? 'underline' : ''}`} 
                                    onClick={toggleTrack}
                                >
                                    Track
                                </a>
                                {isTrackOpen && (
                                    <ul className="absolute bg-white shadow-md mt-2">
                                        <li><a href="#research-track" className="block px-4 py-2 hover:bg-gray-100">Research Track</a></li>
                                        <li><a href="#industry-track" className="block px-4 py-2 hover:bg-gray-100">Industry Track</a></li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <a 
                                    className={`hover:text-gray-500 ${activeLink === 'For-Authors' ? 'underline' : ''}`} 
                                    href="#for-authors" 
                                    onClick={() => handleLinkClick('For-Authors')}
                                >
                                    For-Authors
                                </a>
                            </li>
                            <li>
                                <a 
                                    className={`hover:text-gray-500 ${activeLink === 'Committees' ? 'underline' : ''}`} 
                                    href="#committees" 
                                    onClick={() => handleLinkClick('Committees')}
                                >
                                    Committees
                                </a>
                            </li>
                            <li>
                                <a 
                                    className={`hover:text-gray-500 ${activeLink === 'Important Dates' ? 'underline' : ''}`} 
                                    href="#important-dates" 
                                    onClick={() => handleLinkClick('Important Dates')}
                                >
                                    Important Dates
                                </a>
                            </li>
                            <li className="relative">
                                <a 
                                    className={`hover:text-gray-500 cursor-pointer ${activeLink === 'Attending' ? 'underline' : ''}`} 
                                    onClick={toggleAttending}
                                >
                                    Attending
                                </a>
                                {isAttendingOpen && (
                                    <ul className="absolute bg-white shadow-md mt-2">
                                        <li><a href="#venue" className="block px-4 py-2 hover:bg-gray-100">Venue: SUST</a></li>
                                        <li><a href="#location" className="block px-4 py-2 hover:bg-gray-100">Location: SUST</a></li>
                                        <li><a href="#accommodation" className="block px-4 py-2 hover:bg-gray-100">Accommodation</a></li>
                                        <li><a href="#travel-information" className="block px-4 py-2 hover:bg-gray-100">Travel Information</a></li>
                                        <li><a href="#code-of-conduct" className="block px-4 py-2 hover:bg-gray-100">Code of Conduct</a></li>
                                        <li><a href="#equity-diversity-inclusion" className="block px-4 py-2 hover:bg-gray-100">Equity, Diversity, and Inclusion</a></li>
                                    </ul>
                                )}
                            </li>
                            <li>
                                <a 
                                    className={`hover:text-gray-500 ${activeLink === 'Gallery' ? 'underline' : ''}`} 
                                    href="#gallery" 
                                    onClick={() => handleLinkClick('Gallery')}
                                >
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a 
                                    className={`hover:text-gray-500 ${activeLink === 'Contact' ? 'underline' : ''}`} 
                                    href="#contact" 
                                    onClick={() => handleLinkClick('Contact')}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-6">
                        <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Register +</button>
                    </div>
                </nav>
            </header>
        );
    };
    export default Navbar;