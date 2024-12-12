"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import OrganizedBy from "@/components/OrganizedBy";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Carousel from "@/js";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

// Define the types for the date data
interface ImportantDate {
  id: string;
  title: string;
  description: string;
  date: string;
  show: unknown;
}

export default function Authors() {
  const [dates, setDates] = useState<ImportantDate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch the important dates from the backend API
  useEffect(() => {
    const fetchImportantDates = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/important-dates`
        );
        if (response.ok) {
          const data = await response.json();
          setDates(data);
        } else {
          console.error("Failed to fetch important dates");
          setError("Error fetching important dates");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchImportantDates();
    
  }, []);

  return (
    <main className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <div className="bg-white min-h-screen mt-20">
        <div className="container mx-auto py-10 px-4 md:px-72 ">
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
              <h1 className="text-4xl md:text-5xl font-bold text-center">
                Call For Paper
              </h1>
            </div>
          </div>

          <div className="bg-gray-100 shadow-md rounded-lg p-4 mb-14 py-10">
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
              Important Deadlines:
            </h2>
            <ul className="list-disc list-outside text-xl md:text-2xl px-5">
              {dates
                .filter((dates) => dates.show)
                .map((date, index) => (
                  <li key={index}>
                    {date.description}:{" "}
                    <strong>
                      {" "}
                      {new Date(date.date).toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      })}
                      {isLoading && (
                        <div
                          role="status"
                          className="max-w-sm px-5 w-full h-full animate-pulse"
                        >
                          <div className="h-2 my-8 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[180px] mb-2.5"></div>
                          <div className="h-2 my-8 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                          <div className="h-2 my-8 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[140px] mb-2.5"></div>
                          <div className="h-2 my-8 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[200px] mb-2.5"></div>

                          <span className="sr-only">Loading...</span>
                        </div>
                      )}
                    </strong>
                  </li>
                ))}
            </ul>
          </div>

          <div className="bg-gray-100 shadow-md rounded-lg p-6">
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
              Extended Abstract Submission:
            </h2>
            <p className="mb-4 text-xl md:text-2xl">
              The extended abstract (not over 600 words) must include research
              objectives, methodology, results and conclusion of the study. The
              submitting file should contain the following:
            </p>
            <ul className="list-disc list-outside font-semibold text-xl md:text-2xl px-5 mb-4">
              <li>Full title of the paper</li>
              <li>Name(s) of the author(s), affiliation with email address</li>
              <li>Extended abstract</li>
              <li>Five to seven keywords</li>
            </ul>
            <p className="mb-4 text-xl md:text-2xl">
              Upon provisional acceptance of the extended abstract, the full
              paper will undergo a review before final acceptance. Detailed
              guidelines for preparing the full-length and camera-ready paper
              will be available on the conference website:{" "}
              <a href="https://icerie2025.sust.edu" className="text-blue-500">
                icerie2025.sust.edu
              </a>
              .
            </p>
            <p className="mb-4 text-xl md:text-2xl">
              Download the conference brochure of{" "}
              <a
                href="/doc/Flyer_ICERIE 2025_SUST.pdf"
                className="text-blue-500 underline font-semibold"
                download
              >
                ICERIE2025
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div>
        <OrganizedBy />
      </div>
      <ScrollToTopButton />
      {/* Carousel Section */}
      <div className="container mx-auto px-4 py-8 hidden">
        <Carousel />
      </div>
      <Footer />
    </main>
  );
}
