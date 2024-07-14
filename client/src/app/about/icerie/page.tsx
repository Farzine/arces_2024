
  "use client"
import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Image from 'next/image';

import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div>

      <Navbar />
      <div className="bg-gray-100 p-16 min-h-screen">
        <div className=' items-center justify-center flex'>
          <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16.99V17M12 7V14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className='mt-3 pl-2'>
            <h1 className="text-4xl font-bold text-center mb-4">About</h1>
          </div>
        </div>
        <div className=' items-center justify-center flex'>
        <h2 className="text-2xl text-center mb-8">
          8th International Conference on Engineering Research, Innovation <br/>and Education (ICERIE 2025)
        </h2>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 mr-16 ml-16">
          <div className="flex justify-center mb-10 mt-10">
            <Image src="/sustLogo.png" alt="Logo 1" className="h-28 mx-4 pr-5 mt-2" width={130} height={170} />
            <Image src="/icerieLogo.jpg" alt="Logo 2" className="h-32 mx-4 mb-6"width={130} height={170}  />
          </div>
          <div className="text-justify text-lg mx-16 ">
            <p>
              School of Applied Sciences and Technology, Shahjalal University of Science and Technology (SUST), Sylhet,
              Bangladesh is glad to host the 8th International Conference on Engineering Research, Innovation, and Education
              (ICERIE), 2025. It is a preeminent platform for the dissemination of new research findings and advancements in
              the disciplines of theoretical, experimental, and applied Engineering and Technology. This conference will bring
              together leading academic scientists, researchers, students, professional and industry practitioners from around
              the world to exchange and share their experiences and research results on all aspects of Engineering and Technology.
            </p>
          </div>
          <div className="mt-14 text-start mx-16">
            <h3 className="text-xl font-semibold">Departments from School of Applied Science & Technology</h3>
            <ul className="list-disc list-inside mt-5 text-left inline-block pl-14 pb-10">
              <li>Architecture</li>
              <li>Chemical Engineering & Polymer Science</li>
              <li>Civil & Environmental Engineering</li>
              <li>Computer Science & Engineering</li>
              <li>Electrical & Electronic Engineering</li>
              <li>Food Engineering & Tea Technology</li>
              <li>Industrial & Production Engineering</li>
              <li>Mechanical Engineering</li>
              <li>Petroleum and Mining Engineering</li>
            </ul>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default AboutPage;
