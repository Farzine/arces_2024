"use client"
import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';
import React from 'react';
import Image from 'next/image';
import Carousel from '@/js';

const ContactUs: React.FC = () => {
  return (
    <div className='min-h-screen'>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="min-h-screen  px-4 py-8 flex justify-center items-center gap-2 md:px-56">
        <div className='flex items-center justify-center  md:mb-24 mb-16'>
          <div className='mb-5'>
            <Image
              src="/support.png"
              alt="support icon"
              width={45}
              height={45}
              className=" mr-5 w-16 h-16 md:w-20 md:h-20"
            />
          </div>
          <div>
          <h1 className="text-4xl md:text-5xl mt-3 font-bold mb-4 text-center">CONTACT US</h1>
          </div>
        </div>
        <div className="flex flex-col gap-10 md:flex-row justify-between items-start md:items-center mb-8 md:mx-40 mx-10">
          <div className="relative text-left mb-8 md:mb-0 pl-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-blue-500">
            <h2 className="text-4xl font-bold text-red-600 mb-4">Conference Secretary</h2>
            <p className='font-semibold text-xxl mb-2'>Dr Md Tamej Uddin</p>
            <p className='text-gray-600'>Department of Chemical Engineering and Polymer Science</p>
            <p>Shahjalal University of Science and Technology</p>
            <p>Sylhet, Bangladesh</p>
          </div>
          <div className="text-right mt-10 md:mt-0">
            <p className="flex items-center mb-4">
            <Image
              src="/gmail.png"
              alt="gmail icon"
              width={25}
              height={25}
              className=" mr-2"
            />
              <a href="mailto:icerie2025@sust.edu" className="text-blue-500 hover:underline text-xl">icerie2025@sust.edu</a>
            </p>
            <p className="flex items-center mb-4">
            <Image
              src="/whatsapp.png"
              alt="whatsapp icon"
              width={25}
              height={25}
              className=" mr-2"
            />
              <span className='text-xl'>+8801700000000</span>
            </p>
            <p className="flex items-center mb-4">
            <Image
              src="/facebook.png"
              alt="facebook icon"
              width={25}
              height={25}
              className=" mr-2"
            />
              <a href="https://www.facebook.com" className="text-blue-500 text-xl">Facebook</a>
            </p>
            <p className="flex items-center">
            <Image
              src="/call.png"
              alt="phone icon"
              width={25}
              height={25}
              className=" mr-2"
            />
              <span className='text-xl'>+8801800000000</span>
            </p>
          </div>
        </div>
      </div>
          {/* Carousel Section */}
          <div className="container mx-auto px-4 py-8 hidden">
        <Carousel />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
