"use client";
import Footer from "@/components/Footer";
import Imageholder from "@/components/Imageholder";
import Navbar from "@/components/NavBar";
import Carousel from "@/js";
import { useEffect, useState } from "react";
import { CiImageOn } from "react-icons/ci";

interface ImageItem {
  path: string;
  public_id: string;
  description: string;
  tag: string;
  year: number;
}

export default function Gallery() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [filteredImages, setFilteredImages] = useState<ImageItem[]>([]);
  const [images, setImages] = useState<ImageItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/images`,
          {
            method: "GET",
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched images:", data);
          setImages(data);
          setFilteredImages(data);
        } else {
          console.error("Error fetching images:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
      setLoading(false);
    };

    fetchImages();
  }, []);

  const filterImages = (tag: string | null, year: number | null) => {
    let filtered = images;
    if (tag) {
      filtered = filtered.filter((image) => image.tag === tag);
    }
    if (year) {
      filtered = filtered.filter((image) => image.year === year);
    }
    setFilteredImages(filtered);
  };

  const handleTagClick = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null); 
      filterImages(null, selectedYear); 
    } else {
      setSelectedTag(tag);
      filterImages(tag, selectedYear);
    }
  };

  const handleYearClick = (year: number) => {
    if (selectedYear === year) {
      setSelectedYear(null); 
      filterImages(selectedTag, null); 
    } else {
      setSelectedYear(year);
      filterImages(selectedTag, year);
    }
  };

  return (
    <main className="h-auto">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <div className="gallery h-screen flex flex-col md:flex-row mx-auto mt-20">
        {/* left side bar */}
        <div className="leftbar w-full md:w-1/5 h-auto md:h-screen bg-white hidden md:block">
          <div className="tags">
            <h1 className="text-center my-12 font-semibold text-4xl">
              TAGS
            </h1>
          </div>

          <ul className="text-semibold text-center px-10">
            <div
              className={`text-2xl    hover:bg-red-500 hover:text-white  flex justify-center items-center md:text-3xl rounded-full text-slate-950 font-roboto w-25 h-10 my-1 py-2 cursor-pointer ${
                selectedTag === "conference" ? "bg-red-500 text-white" : ""
              }`}
              onClick={() => handleTagClick("conference")}
            >
              <li className={selectedTag === "conference" ? " text-white" : ""}>
                Conferences
              </li>
            </div>
            <div
              className={`text-2xl   hover:bg-red-500 hover:text-white  flex justify-center items-center md:text-3xl mt-5 rounded-full text-slate-950 font-roboto w-25 h-10 my-1 py-2 cursor-pointer ${
                selectedTag === "meeting" ? "bg-red-500 text-white" : ""
              }`}
              onClick={() => handleTagClick("meeting")}
            >
              <li className={selectedTag === "meeting" ? " text-white" : ""}>
                Meetings
              </li>
            </div>
            <div
              className={`text-2xl   hover:bg-red-500 hover:text-white flex justify-center items-center md:text-3xl mt-5 rounded-full text-slate-950 font-roboto w-25 h-10  py-2 cursor-pointer ${
                selectedTag === "tour" ? "bg-red-500 text-white" : ""
              }`}
              onClick={() => handleTagClick("tour")}
            >
              <li className={selectedTag === "tour" ? " text-white" : ""}>
                Tour
              </li>
            </div>
            <div
              className={`text-2xl   hover:bg-red-500 hover:text-white flex justify-center items-center md:text-3xl mt-5 rounded-full text-slate-950 font-roboto w-25 h-10 my-1 py-2 cursor-pointer ${
                selectedTag === "program" ? "bg-red-500" : ""
              }`}
              onClick={() => handleTagClick("program")}
            >
              <li className={selectedTag === "program" ? " text-white" : ""}>
                Programs
              </li>
            </div>
          </ul>
        </div>

        {/* rightbar */}
        <div className="rightbar w-full md:w-4/5 h-auto bg-neutral-100 md:h-screen">
          {/* Heading */}
          <div className="heading flex justify-center items-center md:mt-20">
            <CiImageOn className="w-12 h-12 md:w-14 md:h-14 mt-5 mr-3" />
            <h1 className="text-center font-semibold font-inter text-4xl md:text-5xl my-5 pt-5">
              GALLERY
            </h1>
          </div>

          {/* years button */}
          <div className="years flex flex-wrap justify-center md:justify-start">
            <div
              className={`w-24 h-16 border-gray-200 border-2 m-2 rounded-full hover:text-white font-semibold font-inter text-md text-center p-2 cursor-pointer hover:bg-red-500 ${
                selectedYear === 2025 ? "bg-red-500 text-white" : ""
              }`}
              onClick={() => handleYearClick(2025)}
            >
              2025
            </div>
            <div
              className={`w-24 h-16 border-gray-200 border-2 m-2 rounded-full font-semibold font-inter text-md text-center p-2 cursor-pointer hover:bg-red-500 hover:text-white ${
                selectedYear === 2024 ? "bg-red-500 text-white" : ""
              }`}
              onClick={() => handleYearClick(2024)}
            >
              2024
            </div>
            <div
              className={`w-24 h-16 border-gray-200 border-2 m-2 rounded-full font-semibold font-inter text-md text-center hover:text-white p-2 cursor-pointer hover:bg-red-500 ${
                selectedYear === 2023 ? "bg-red-500 text-white" : ""
              }`}
              onClick={() => handleYearClick(2023)}
            >
              2023
            </div>
          </div>

          {/* Tags for smaller screens */}
          <div className="tags md:hidden">
            <h1 className="text-center my-12 font-semibold font-inter text-md">
              TAGS
            </h1>

            <ul className="text-center flex w-screen justify-center gap:4 md:gap-6   my-5">
              <li
                className={`cursor-pointer w-2/6 md:w-1/6 border-gray-200 border-2  rounded-full flex justify-center items-center ${
                  selectedTag === "conference" ? "bg-red-500 text-white" : ""
                }`}
                onClick={() => handleTagClick("conference")}
              >
                Conferences
              </li>
              <li
                className={`cursor-pointer w-2/6 md:w-1/6 border-gray-200 border-2  rounded-full flex justify-center items-center ${
                  selectedTag === "meeting" ? "bg-red-500" : ""
                }`}
                onClick={() => handleTagClick("meeting")}
              >
                Meetings
              </li>
              <li
                className={`cursor-pointer w-2/6 md:w-1/6 border-gray-200 border-2  rounded-full flex justify-center items-center ${
                  selectedTag === "tour" ? "bg-red-500" : ""
                }`}
                onClick={() => handleTagClick("tour")}
              >
                Tour
              </li>
              <li
                className={`cursor-pointer w-2/6 md:w-1/6 border-gray-200 border-2  rounded-full flex justify-center items-center ${
                  selectedTag === "program" ? "bg-red-500" : ""
                }`}
                onClick={() => handleTagClick("program")}
              >
                Programs
              </li>
            </ul>
          </div>
          <hr />

          {/* image gallery */}
          {loading ? (
            <div className="flex justify-center items-center h-4/5">
              <div role="status ">
                <svg
                  aria-hidden="true"
                  className="w-20 h-20  text-center text-gray-200 animate-spin dark:text-gray-600 fill-red-500"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="imagegallery w-full h-4/5 grid grid-cols-3 mx-auto sm:grid-cols-4  md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-7  md:gap-1 overflow-y-auto py-2 md:py-10 md:px-10">
              {filteredImages.map((item, index) => (
                <Imageholder
                  key={index}
                  src={item.path}
                  desc={item.description}
                  year={item.year}
                />
              ))}
            </div>
          )}
        </div>
      </div>
          {/* Carousel Section */}
          <div className="container mx-auto px-4 py-8 hidden">
        <Carousel />
      </div>
      <Footer />
    </main>
    // fixed
  );
}
