"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import OrganizedBy from "@/components/OrganizedBy";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Image from "next/image";

export default function Authors() {
  return (
    <main className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <div className="bg-white min-h-screen mt-20">
        <div className="container mx-auto py-10 px-4 md:px-8">

          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-10 mb-10 mt-4">
            <div>
              <Image
                src="/paper.png"
                alt="Call for Paper"
                className="w-16 h-16"
                width={100}
                height={100}
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-center">Call For Paper</h1>
            </div>
          </div>

          <div className="bg-gray-100 shadow-md rounded-lg p-6 mb-14">
            <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4">Important Deadlines:</h2>
            <ul className="list-disc list-inside text-lg">
              <li>Conference Date: <strong>January 09-11, 2025</strong></li>
              <li>Extended Abstract Submission: <strong>July 30, 2024</strong></li>
              <li>Notification of Acceptance of Abstract: <strong>August 16, 2024</strong></li>
              <li>Full Paper Submission: <strong>September 30, 2024</strong></li>
              <li>Notification of Full Paper: <strong>November 30, 2024</strong></li>
              <li>Camera-ready Paper Submission: <strong>November 30, 2024</strong></li>
            </ul>
          </div>

          <div className="bg-gray-100 shadow-md rounded-lg p-6">
            <h2 className="text-xl md:text-2xl font-bold text-red-600 mb-4">Extended Abstract Submission:</h2>
            <p className="mb-4">The extended abstract (not over 600 words) must include research objectives, methodology, results and conclusion of the study. The submitting file should contain the following:</p>
            <ul className="list-disc list-inside font-bold text-lg mb-4">
              <li>Full title of the paper</li>
              <li>Name(s) of the author(s), affiliation with email address</li>
              <li>Extended abstract</li>
              <li>Five to seven keywords</li>
            </ul>
            <p>Upon provisional acceptance of the extended abstract, the full paper will undergo a review before final acceptance. Detailed guidelines for preparing the full-length and camera-ready paper will be available on the conference website: <a href="https://icerie.sust.edu" className="text-blue-500">icerie.sust.edu</a>.</p>
            <p>Download the conference brochure of <a href="/doc/ICERIE2025_Abstract_Template.docx" className="text-blue-500"> ICERIE2025</a>.</p>
          </div>
        </div>
      </div>

      <div>
        <OrganizedBy />
      </div>
      <ScrollToTopButton />
      <Footer />
    </main>
  );
}
