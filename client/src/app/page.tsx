"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import OrganizedBy from "@/components/OrganizedBy";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ImportantDates from "@/components/FrontendImportantDateComponent";
import MessageCard from "@/components/MessageComponent";
import LatestUpdates from "@/components/LatestUpdates";
import Carousel from "@/js/index";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section bg-cover bg-center relative mt-48 mb-48">
        {/* Overlay for darkened effect */}
        <div className="overlay opacity-70 absolute inset-0"></div>
        {/* Hero content */}
        <div className="container mx-auto flex flex-col justify-center items-center h-full text-center relative z-10 px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center mb-6 space-y-6 lg:space-y-0 lg:space-x-6">
            {/* Logo in Hero Section */}
            <img
              src="./icerieLogo.jpg"
              alt="ICERIE Logo"
              className="w-32 h-32 lg:w-40 lg:h-40"
            />
            <h1 className="text-3xl lg:text-5xl font-bold text-black leading-tight">
              8th International Conference on <br />
              Engineering Research, Innovation and Education <br /> (ICERIE 2025)
            </h1>
          </div>

          {/* Date and Location */}
          <div className="text-black text-lg lg:text-xl mt-4 lg:mt-2">
            <p className="text-red-600 font-medium">09th January 2025</p>
            <p className="font-normal">
              University Ave, Sylhet 3114 <br />
              Shahjalal University of Science and Technology
            </p>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <div className="container my-16 mx-auto px-4 py-8">
        <LatestUpdates />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Important Dates Section */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 md:mx-0 mx-24">
            <ImportantDates />
          </div>
          {/* Message Section */}
          <div className="w-full lg:w-1/2 md:mx-0 mx-[-40px] ">
            <MessageCard />
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="container mx-auto px-4 py-8">
        <Carousel />
      </div>

      {/* Sponsors Section */}
      <div className="container mt-10 mb-10 mx-auto px-4 py-8">
        <Sponsors />
      </div>

      {/* Organized By Section */}
      <section className="organized-by py-12 bg-white">
        <div className="container mx-auto px-4">
          <OrganizedBy />
        </div>
      </section>

      {/* Footer Section */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
}
