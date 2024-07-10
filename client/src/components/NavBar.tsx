import Image from "next/image"; // If using Next.js for image optimization
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa"; // Add icon library for dropdown arrows

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(""); // State to track which dropdown is open

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setDropdownOpen(""); // Close dropdowns when a link is clicked
  };

  const handleMouseEnter = (link: string) => {
    setDropdownOpen(link);
  };

  const handleMouseLeave = () => {
    setDropdownOpen("");
  };

  return (
    <header className="bg-white shadow-lg p-3">
      <nav className="flex justify-between items-center w-full h-14 mx-auto ">
        <div>
          <Image
            className="ml-10 w-16 cursor-pointer"
            src="/logoNavBar.png"
            alt="Logo"
            width={64}
            height={64}
          />
        </div>
        <div className="nav-links md:static absolute bg-white md:min-h-fit min-h-[30vh] left-0 top-0 md:w-auto w-full flex items-center px-5 ">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-6 gap-2 text-black text-sm mt-4 ">
            <li>
              <a
                className={`relative inline-block group ${activeLink === "Home" ? "text-black" : "text-gray-700"
                  }`}
                href="#home"
                onClick={() => handleLinkClick("Home")}
              >
                Home
                <span
                  className={`${activeLink === "Home"
                      ? "absolute w-full h-1 bg-customPurple top-4 my-1 left-0"
                      : "absolute w-full h-1 bg-customPurple top-4 my-1 left-0 transition ease-in-out duration-300 transform origin-left scale-x-0 group-hover:scale-x-100"
                    }`}
                ></span>
              </a>
            </li>
            <li>
              <a
                className={`relative inline-block group ${activeLink === "Tracks" ? "text-black" : "text-gray-700"
                  }`}
                href="#tracks"
                onClick={() => handleLinkClick("Tracks")}
              >
                Tracks
                <span
                  className={`${activeLink === "Tracks"
                      ? "absolute w-full h-1 bg-customPurple top-4 my-1 left-0"
                      : "absolute w-full h-1 bg-customPurple top-4 my-1 left-0 transition ease-in-out duration-300 transform origin-left scale-x-0 group-hover:scale-x-100"
                    }`}
                ></span>
              </a>
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("For-Authors")}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <a
                className={`relative inline-block group ${activeLink === "For-Authors" ? "text-black" : "text-gray-700"
                  }`}
                href="#For-Authors"
                onClick={() => handleLinkClick("For-Authors")}
              >
                For Authors
                <FaAngleDown className="inline ml-1" />
                <span
                  className={`${activeLink === "For-Authors"
                      ? "absolute w-full h-1 bg-customPurple top-4 my-1 left-0"
                      : "absolute w-full h-1 bg-customPurple top-4 my-1 left-0 transition ease-in-out duration-300 transform origin-left scale-x-0 group-hover:scale-x-100"
                    }`}
                ></span>
              </a>
              {dropdownOpen === "For-Authors" && (
                <ul className="absolute bg-white shadow-lg mt-1 rounded w-48">
                  <li className="hover:bg-gray-200">
                    <a href="#submission" className="block px-4 py-2">Submission</a>
                  </li>
                  <li className="hover:bg-gray-200">
                    <a href="#call-for-paper" className="block px-4 py-2">Call For Paper</a>
                  </li>
                  <li className="hover:bg-gray-200">
                    <a href="#tracks" className="block px-4 py-2">Tracks</a>
                  </li>
                  <li className="hover:bg-gray-200">
                    <a href="#important-dates" className="block px-4 py-2">Important Dates</a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                className={`relative inline-block group ${activeLink === "Registration" ? "text-black" : "text-gray-700"
                  }`}
                href="#registration"
                onClick={() => handleLinkClick("Registration")}
              >
                Registration
                <span
                  className={`${activeLink === "Registration"
                      ? "absolute w-full h-1 bg-customPurple top-4 my-1 left-0"
                      : "absolute w-full h-1 bg-customPurple top-4 my-1 left-0 transition ease-in-out duration-300 transform origin-left scale-x-0 group-hover:scale-x-100"
                    }`}
                ></span>
              </a>
            </li>
            <li>
              <a
                className={`relative inline-block group ${activeLink === "Schedule" ? "text-black" : "text-gray-700"
                  }`}
                href="#schedule"
                onClick={() => handleLinkClick("Schedule")}
              >
                Schedule
                <span
                  className={`${activeLink === "Schedule"
                      ? "absolute w-full h-1 bg-customPurple top-4 my-1 left-0"
                      : "absolute w-full h-1 bg-customPurple top-4 my-1 left-0 transition ease-in-out duration-300 transform origin-left scale-x-0 group-hover:scale-x-100"
                    }`}
                ></span>
              </a>
            </li>
            <li>
              <a
                className={`relative inline-block group ${activeLink === "Gallery" ? "text-black" : "text-gray-700"
                  }`}
                href="#gallery"
                onClick={() => handleLinkClick("Gallery")}
              >
                Gallery
                <span
                  className={`${activeLink === "Gallery"
                      ? "absolute w-full h-1 bg-customPurple top-4 my-1 left-0"
                      : "absolute w-full h-1 bg-customPurple top-4 my-1 left-0 transition ease-in-out duration-300 transform origin-left scale-x-0 group-hover:scale-x-100"
                    }`}
                ></span>
              </a>
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("Previous Conferences")}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <a
                className={`relative inline-block group ${activeLink === "Previous Conferences" ? "text-black" : "text-gray-700"
                  }`}
                href="#Previous Conferences"
                onClick={() => handleLinkClick("Previous Conferences")}
              >
                Previous Conferences
                <FaAngleDown className="inline ml-1" />
                <span
                  className={`${activeLink === "Previous Conferences"
                      ? "absolute w-full h-1 bg-customPurple top-4 my-1 left-0"
                      : "absolute w-full h-1 bg-customPurple top-4 my-1 left-0 transition ease-in-out duration-300 transform origin-left scale-x-0 group-hover:scale-x-100"
                    }`}
                ></span>
              </a>
              {dropdownOpen === "Previous Conferences" && (
                <ul className="absolute bg-white shadow-lg mt-1 rounded w-48">
                  <li className="hover:bg-gray-200">
                    <a href="#Previous Conferences" className="block px-4 py-2">ICERIE 20023</a>
                  </li>
                  <li className="hover:bg-gray-200">
                    <a href="#Previous Conferences" className="block px-4 py-2">ICERIE 20023</a>
                  </li>
                  <li className="hover:bg-gray-200">
                    <a href="#Previous Conferences" className="block px-4 py-2">ICERIE 20023</a>
                  </li>
                  <li className="hover:bg-gray-200">
                    <a href="#Previous Conferences" className="block px-4 py-2">ICERIE 20023</a>
                  </li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <a
                className={`relative inline-block group ${activeLink === "about" ? "text-black" : "text-gray-700"
                  }`}
                href="#about"
                onClick={() => handleLinkClick("about")}
              >
                About
                <FaAngleDown className="inline ml-1" />
                <span
                  className={`${activeLink === "about"
                      ? "absolute w-full h-1 bg-customPurple top-4 my-1 left-0"
                      : "absolute w-full h-1 bg-customPurple top-4 my-1 left-0 transition ease-in-out duration-300 transform origin-left scale-x-0 group-hover:scale-x-100"
                    }`}
                ></span>
              </a>
              {dropdownOpen === "about" && (
                <ul className="absolute bg-white shadow-lg mt-1 rounded w-48">
                  <li className="hover:bg-gray-200">
                    <a href="#about-icerie" className="block px-4 py-2">About ICERIE</a>
                  </li>
                  <li className="hover:bg-gray-200">
                    <a href="#committee" className="block px-4 py-2">Committee</a>
                  </li>
                  <li className="hover:bg-gray-200">
                    <a href="#sponsors" className="block px-4 py-2">Sponsors</a>
                  </li>
                  <li className="hover:bg-gray-200">
                    <a href="#contact-us" className="block px-4 py-2">Contact Us</a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-indigo-600 text-white px-5 py-2 text-sm rounded-full hover:bg-black flex justify-between items-center mx-5">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
            Register
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
