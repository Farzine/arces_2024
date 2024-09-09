import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [state, setState] = useState({
    activeLink: "",
    dropdownOpen: "",
    menuOpen: false,
  });

  const router = useRouter();

  // Handle clicking a link, closing the dropdown and menu
  const handleLinkClick = (link:string) => {
    if (state.dropdownOpen === link) {
      setState((prevState) => ({
        ...prevState,
        dropdownOpen: "",
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        dropdownOpen: link,
        activeLink: link,
      }));
    }
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setState((prevState) => ({
      ...prevState,
      menuOpen: !prevState.menuOpen,
    }));
  };

  // Handle navigation and close the menu
  const handleNavigation = (path:string) => {
    router.push(path);
    setState((prevState) => ({
      ...prevState,
      menuOpen: false,
    }));
  };

  const home = process.env.NEXT_PUBLIC_APP_FRONTEND_URL;
  const tracks = `${home}/tracks`;
  const submissionUrl = `${home}/authors/submission`;
  const callForPaperUrl = `${home}/authors/callForPaper`;
  const conferenceTracks = `${home}/tracks`;
  const importantDates = `${home}/authors/importantDates`;
  const registrationFees = `${home}/registration/registrationFees`;
  const attendee = `${home}/attendee`;
  const schedule = `${home}/schedule`;
  const gallery = `${home}/gallery`;
  const aboutIcerie = `${home}/about/icerie`;
  const committee = `${home}/about/committee`;
  const sponsors = `${home}/about/sponsors`;
  const accommodation = `${home}/about/accommodation`;
  const venue = `${home}/about/venue`;
  const contactUs = `${home}/contact`;

  const navLinks = [
    { name: "Home", href: home },
    { name: "Tracks", href: tracks },
    {
      name: "For Authors",
      href: "#For-Authors",
      dropdown: [
        { name: "Submission", href: submissionUrl },
        { name: "Call For Paper", href: callForPaperUrl },
        { name: "Conference Tracks", href: conferenceTracks },
        { name: "Important Dates", href: importantDates },
      ],
    },
    {
      name: "Registration",
      href: "#registration",
      dropdown: [
        { name: "Registration Fees", href: registrationFees },
        { name: "Attending", href: attendee },
      ],
    },
    { name: "Schedule", href: schedule },
    { name: "Gallery", href: gallery },
    {
      name: "Previous Conferences",
      href: "#Previous-Conferences",
      dropdown: [
        { name: "ICERIE 2023", href: "#Previous-Conferences" },
        { name: "ICERIE 2022", href: "#Previous-Conferences" },
        { name: "ICERIE 2021", href: "#Previous-Conferences" },
        { name: "ICERIE 2020", href: "#Previous-Conferences" },
      ],
    },
    {
      name: "About",
      href: "#about",
      dropdown: [
        { name: "About ICERIE", href: aboutIcerie },
        { name: "Committee", href: committee },
        { name: "Sponsors", href: sponsors },
        { name: "Accommodation", href: accommodation },
        { name: "Venue", href: venue },
      ],
    },
    { name: "Contact Us", href: contactUs },
  ];

  return (
    <header className="bg-white shadow-lg p-3 z-50 relative">
      <nav className="flex justify-between items-center w-full h-14 mx-auto">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Image
            className="ml-5 md:ml-10 w-16 cursor-pointer"
            src="/icerieLogo.jpg"
            alt="Logo"
            width={1000}
            height={1000}
            priority
          />
          <div className="md:hidden ml-2">
            <button
              onClick={toggleMenu}
              aria-expanded={state.menuOpen}
              aria-label="Toggle menu"
            >
              {state.menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        <div
          className={`nav-links md:static absolute bg-white md:min-h-fit min-h-[30vh] left-0 top-0 md:w-auto w-full flex items-center px-5 z-50 transition-all duration-500 ${
            state.menuOpen ? "top-14 opacity-100" : "top-[-490px] opacity-0"
          } md:opacity-100`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-8 gap-4 text-black md:text-2xl text-lg font-semibold mt-5 w-full">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="relative"
              >
                <a
                  className={`relative inline-block group ${
                    state.activeLink === link.name
                      ? "text-black"
                      : "text-gray-700"
                  }`}
                  href={link.dropdown ? "#" : link.href}
                  onClick={() =>
                    link.dropdown
                      ? handleLinkClick(link.name)
                      : handleNavigation(link.href ?? "")
                  }
                  aria-expanded={state.dropdownOpen === link.name}
                >
                  {link.name}
                  {link.dropdown && <FaAngleDown className="inline ml-1" />}
                  <span
                    className={`${
                      state.activeLink === link.name
                        ? "absolute w-full h-1 bg-customPurple top-5 md:mt-3 my-1 left-0"
                        : "absolute w-full h-1 bg-customPurple top-5 md:mt-3 my-1 left-0 transition ease-in-out duration-300 transform origin-left scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </a>
                {state.dropdownOpen === link.name && link.dropdown && (
                  <ul className="absolute bg-white shadow-lg rounded w-48 z-50 pt-5">
                    {link.dropdown.map((sublink, subIndex) => (
                      <li
                        key={subIndex}
                        className="hover:bg-gray-200 mx-2 mr-2 mb-2"
                      >
                        <a
                          href={sublink.href}
                          className="block px-4 py-2 text-base font-normal"
                        >
                          {sublink.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <button
            className="bg-red-500 text-white px-5 py-2 text-lg font-semibold rounded-full hover:bg-indigo-500 flex justify-between items-center mx-5"
            onClick={() => handleNavigation("/registration")}
            aria-label="Register"
          >
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
