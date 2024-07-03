import Image from "next/image"; // If using Next.js for image optimization
import { SetStateAction, useState } from "react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link: SetStateAction<string>) => {
    setActiveLink(link);
  };

  return (
    <header className="bg-white shadow-2xl">
      <nav className="flex justify-between items-center w-[100%] h-14 mx-auto ">
        <div>
          <Image
            className="w-16 cursor-pointer"
            src="/logo1.png"
            alt="Logo"
            width={64}
            height={64}
            
          />
        </div>
        <div className="nav-links md:static absolute bg-white md:min-h-fit min-h-[30vh] left-0 top-0 md:w-auto w-full flex items-center px-5 ">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[1.4vw] gap-2 text-black text-sm mt-4 ">
            <li>
              <a
                className={`relative inline-block group ${
                  activeLink === "Home" ? "text-=black " : "text-black"
                }`}
                href="#home"
                onClick={() => handleLinkClick("Home")}
              >
                Home
                <span
                  className={`${
                    activeLink === "Home"
                      ? "absolute w-full h-1 bg-customPurple top-4 my-1 left-0 "
                      : "absolute w-full h-1 bg-customPurple top-4 my-1 left-0 transition ease-in-out duration-300 transform origin-left scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </a>
            </li>
            <li>
              <a
                className={`relative inline-block group ${
                  activeLink === "Track" ? "text-=black " : "text-black"
                }`}
                href="#home"
                onClick={() => handleLinkClick("Track")}
              >
                Tracks
                <span
                  className={`${
                    activeLink === "Track"
                      ? "absolute w-full h-1 bg-customPurple top-4 my-1 left-0 "
                      : "absolute w-full h-1 bg-customPurple top-4 my-1 left-0 transition ease-in-out duration-300 transform origin-left scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </a>
            </li>
            <li>
              <a
                className={`relative inline-block group ${
                  activeLink === "For-Authors" ? "text-=black " : "text-black"
                }`}
                href="#For-Authors"
                onClick={() => handleLinkClick("For-Authors")}
              >
                For Authors
                <span
                  className={`${
                    activeLink === "For-Authors"
                      ? "absolute w-full h-1 bg-customPurple top-4 my-1 left-0 "
                      : "absolute w-full h-1 bg-customPurple top-4 my-1 left-0 transition ease-in-out duration-300 transform origin-left scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </a>
            </li>
            <li>
              <a
                className={`relative inline-block group ${
                  activeLink === "Committee" ? "text-=black " : "text-black"
                }`}
                href="#Committees"
                onClick={() => handleLinkClick("Committee")}
              >
                Committee
                <span
                  className={`${
                    activeLink === "Committee"
                      ? "absolute w-full h-1 bg-customPurple top-4 my-1 left-0 "
                      : "absolute w-full h-1 bg-customPurple top-4 my-1 left-0 transition ease-in-out duration-300 transform origin-left scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </a>
            </li>

            <li>
              <a
                className={`relative inline-block group ${
                  activeLink === "Attending" ? "text-=black " : "text-black"
                }`}
                href="#Attending"
                onClick={() => handleLinkClick("Attending")}
              >
                Attending
                <span
                  className={`${
                    activeLink === "Attending"
                      ? "absolute w-full h-1 bg-customPurple top-4 my-1 left-0 "
                      : "absolute w-full h-1 bg-customPurple top-4 my-1 left-0 transition ease-in-out duration-300 transform origin-left scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </a>
            </li>
            <li>
              <a
                className={`relative inline-block group ${
                  activeLink === "Gallery" ? "text-=black " : "text-black"
                }`}
                href="#Gallery"
                onClick={() => handleLinkClick("Gallery")}
              >
                Gallery
                <span
                  className={`${
                    activeLink === "Gallery"
                      ? "absolute w-full h-1 bg-customPurple top-4 my-1 left-0 "
                      : "absolute w-full h-1 bg-customPurple top-4 my-1 left-0 transition ease-in-out duration-300 transform origin-left scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </a>
            </li>
            <li>
              <a
                className={`relative inline-block group ${
                  activeLink === "Contact" ? "text-=black " : "text-black"
                }`}
                href="#Contact"
                onClick={() => handleLinkClick("Contact")}
              >
                Contact
                <span
                  className={`${
                    activeLink === "Contact"
                      ? "absolute w-full h-1 bg-customPurple top-4 my-1 left-0 "
                      : "absolute w-full h-1 bg-customPurple top-4 my-1 left-0 transition ease-in-out duration-300 transform origin-left scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </a>
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
