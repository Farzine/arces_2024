import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [state, setState] = useState({
    activeLink: "",
    dropdownOpen: "",
    menuOpen: false,
  });

  const router = useRouter();
  const pathname = usePathname(); // Use usePathname from next/navigation

  useEffect(() => {
    // Update activeLink based on current pathname
    setState((prevState) => ({
      ...prevState,
      activeLink: pathname,
    }));
  }, [pathname]); // Add pathname to dependency array

  // Close menu if clicked outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Element;
      if (state.menuOpen && target && !target.closest(".nav-links")) {
        setState((prevState) => ({
          ...prevState,
          menuOpen: false,
        }));
      }
    };

    if (state.menuOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [state.menuOpen]);

  // Handle clicking a link
  const handleLinkClick = (link: string) => {
    setState((prevState) => ({
      ...prevState,
      dropdownOpen: prevState.dropdownOpen === link ? "" : link,
      // Active link management is handled by pathname
    }));
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setState((prevState) => ({
      ...prevState,
      menuOpen: !prevState.menuOpen,
    }));
  };

  // Handle navigation and close the menu
  const handleNavigation = (path: string) => {
    setState((prevState) => ({
      ...prevState,
      menuOpen: false,
    }));
    router.push(path);
  };

  const home = process.env.NEXT_PUBLIC_APP_FRONTEND_URL || '';
  const navLinks = [
    { name: "Home", href: home },
    { name: "Tracks", href: `${home}/tracks` },
    {
      name: "For Authors",
      href: "#For-Authors",
      dropdown: [
        { name: "Submission", href: `${home}/authors/submission` },
        { name: "Call For Paper", href: `${home}/authors/callForPaper` },
        { name: "Conference Tracks", href: `${home}/tracks` },
        { name: "Important Dates", href: `${home}/authors/importantDates` },
      ],
    },
    {
      name: "Registration",
      href: "#registration",
      dropdown: [
        { name: "Registration Fees", href: `${home}/registration/registrationFees` },
        { name: "Attending", href: `${home}/attendee` },
      ],
    },
    { name: "Schedule", href: `${home}/schedule` },
    { name: "Gallery", href: `${home}/gallery` },
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
        { name: "About ICERIE", href: `${home}/about/icerie` },
        { name: "Committee", href: `${home}/about/committee` },
        { name: "Sponsors", href: `${home}/about/sponsors` },
        { name: "Accommodation", href: `${home}/about/accommodation` },
        { name: "Venue", href: `${home}/about/venue` },
      ],
    },
    { name: "Contact Us", href: `${home}/contact` },
    {
      name: "Register",
      href: "/registration",
    },
  ];

  return (
    <header className="bg-white shadow-lg p-3 z-50 relative">
      <nav className="flex justify-between items-center w-full min-h-fit mx-auto">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href='/'>
            <div className="flex">
              <Image
                className="ml-5 md:ml-10 w-16 cursor-pointer"
                src="/icerieLogo.jpg"
                alt="Logo"
                width={1000}
                height={1000}
                priority
              />
              <span className="ml-5 text-nowrap mt-3 font-semibold text-red-500">
                ICERIE 2025
              </span>
            </div>
          </Link>
          <div className="md:hidden ml-2">
            <button onClick={toggleMenu} aria-expanded={state.menuOpen}>
              {state.menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {state.menuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-30 z-40"></div>
        )}

        <div
          className={`nav-links md:static  absolute bg-white md:min-h-fit min-h-[80vh] left-0 top-0 md:w-auto w-full flex items-center px-5 z-50 transition-all duration-500 ${
            state.menuOpen ? "top-14 opacity-100" : "top-[-490px] opacity-0"
          } md:opacity-100`}
        >
          <ul className="flex md:flex-row flex-col my-1  md:items-center md:gap-8 gap-4 text-black md:text-2xl text-2xl font-bold mt-5 w-full">
            {navLinks.map((link, index) => (
              <li key={index} className="relative">
                {link.name === "Register" ? (
                  <button
                    className={`bg-red-500 text-white my-2 px-8 py-3 text-2xl font-semibold rounded-full hover:bg-red-600 flex justify-between items-center mx-5 ${
                      state.activeLink === link.href ? "bg-red-600" : ""
                    }`}
                    onClick={() => handleNavigation(link.href ?? "")}
                  >
                    Register
                  </button>
                ) : (
                  <>
                    <Link
                      className={`relative inline-block group  ${
                        state.activeLink === link.href
                          ? "text-black"
                          : "text-gray-700"
                      }`}
                      href={link.dropdown ? "#" : (link.href as string)}
                      onClick={() =>
                        link.dropdown
                          ? handleLinkClick(link.href)
                          : handleNavigation(link.href as string)
                      }
                    >
                      {link.name}
                      {link.dropdown && <FaAngleDown className="inline ml-1" />}
                      <span
                        className={`${
                          state.activeLink === link.href
                            ? "absolute w-full h-1 bg-red-500 top-7 md:mt-3 my-1 left-0 scale-x-100"
                            : "absolute w-full h-1 bg-red-500 top-7 md:mt-3 my-1 left-0 transition ease-in-out duration-300 transform origin-center scale-x-0 group-hover:scale-x-100"
                        }`}
                      ></span>
                    </Link>
                    {state.dropdownOpen === link.href && link.dropdown && (
                      <ul className="absolute bg-white shadow-lg rounded w-48 z-50 pt-5">
                        {link.dropdown.map((sublink, subIndex) => (
                          <li
                            key={subIndex}
                            className="hover:bg-gray-200 mx-2 mr-2 mb-2"
                          >
                            <Link
                              href={sublink.href}
                              className="block px-4 py-2 text-xl font-semibold"
                              onClick={() => handleNavigation(sublink.href)}
                            >
                              {sublink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
