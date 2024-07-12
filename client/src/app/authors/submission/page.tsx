"use client"

import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Image from 'next/image';
import React from 'react';

const Submission: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold text-center my-12">
            <Image
              src="/submit.png"
              alt="Submit Icon"
              height={48}
              width={48}
              className="inline-block w-12 h-12 mr-4"
            />
            Submission
          </h1>

          <div className="mb-16">
            <div className="bg-gray-100 p-4 rounded-md shadow-md mx-20">
            <h2 className="text-2xl font-semibold text-red-500 mb-4 underline pb-4 pl-10 pt-4 pr-10">
              Extended Abstract and Full Paper Submission
            </h2>
              <p className="mb-2 pl-10 pr-10">
                <a href="https://easychair.org/conferences/?conf=icerie2025" className="text-blue-600 hover:underline">
                  Click here
                </a> to submit your extended abstract and full Paper (after abstract got accepted).
              </p>
              <p className="mb-2 pl-10 pr-10">
                You must have an <a href="https://easychair.org/" className="text-blue-600 hover:underline">EasyChair</a> account to submit both abstract and full paper online. If you don’t have an account, please <a href="https://easychair.org/account/signup.cgi" className="text-blue-600 hover:underline">click here</a> to create one before submitting the abstract and full paper.
              </p>
              <p className="mb-2 pl-10 pb-4 pr-10">
                If you face any problem in online submission, please contact to conference secretary (or <a href="mailto:icerie2025@sust.edu" className="text-blue-600 hover:underline">icerie2025@sust.edu</a>)
              </p>
            </div>
          </div>

          <div className="mb-16">
            <div className="bg-gray-100 p-4 rounded-md shadow-md mx-20">
            <h2 className="text-2xl font-semibold text-red-500 mb-4 underline pb-4 pl-10 pt-4 pr-10">
              Style Guideline
            </h2>
              <p className="mb-2 pl-10 pr-10">
                The length of the full paper should be minimum 4 pages and maximum 6 pages. Instruction Template for ICERIE-2023 Full paper in <a href="/path/to/docx" className="text-blue-600 hover:underline">.docx</a> format. For abstract submission, please use this <a href="/path/to/template" className="text-blue-600 hover:underline">abstract template</a>.
              </p>
              <p className="mb-2 pl-10 pb-4 pr-10">
                Download the conference brochure of <a href="/path/to/brochure" className="text-blue-600 hover:underline">ICERIE2025</a>.
              </p>
            </div>
          </div>
          <div className='pt-40'>

          </div>
        </div>
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Submission;
