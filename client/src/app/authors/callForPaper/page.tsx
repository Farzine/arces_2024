"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import OrganizedBy from "@/components/OrganizedBy";

export default function Authors() {
  return (
    <main className="h-screen">
      <Navbar />

      <div className="bg-white min-h-screen">
        <div className="container mx-auto py-10">

          <div className="flex items-center justify-center space-x-10 mb-10 ">
            <div>
            <img
              src="/paper.png"
              alt="Call for Paper"
              className="w-16 h-16   "
            />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-center">Call For Paper</h1>
            </div>
          </div>

          <div className="bg-gray-50 shadow-md rounded-lg p-6 mb-10">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Important Deadlines:</h2>
            <ul className="list-disc list-inside text-lg">
              <li>Extended Abstract Submission: July 30, 2024</li>
              <li>Notification of Acceptance of Abstract: August 16, 2024</li>
              <li>Full Paper Submission: September 30, 2024</li>
              <li>Notification of Full Paper: November 30, 2024</li>
              <li>Camera-ready Paper Submission: November 30, 2024</li>
              <li>Online CFP link: ????????????</li>
            </ul>
          </div>

          <div className="bg-gray-50 shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Extended Abstract Submission:</h2>
            <p className="mb-4">The extended abstract (not over 600 words) must include research objectives, methodology, results and conclusion of the study. The submitting file should contain the following:</p>
            <ul className="list-disc list-inside font-bold text-lg mb-4">
              <li>Full title of the paper</li>
              <li>Name(s) of the author(s), affiliation with email address</li>
              <li>Extended abstract</li>
              <li>Five to seven keywords</li>
            </ul>
            <p>Upon provisional acceptance of the extended abstract, the full paper will undergo a review before final acceptance. Detailed guidelines for preparing the full-length and camera-ready paper will be available on the conference website: <a href="https://icerie.sust.edu" className="text-blue-500">icerie.sust.edu</a>.</p>
          </div>
        </div>
      </div>

      <div >
        <OrganizedBy />
      </div>
      <Footer />
    </main>
  );
}