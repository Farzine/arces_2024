"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { CiImageOn } from "react-icons/ci";

export default function Photos() {
  return (
    <main className="h-auto">
      <Navbar />

      <div className="gallery h-screen flex mx-auto">
        {/* left side bar */}
        <div className="leftbar w-1/5 h-screen bg-neutral-100  bg-white">
          <div className="tags">
            <h1 className="text-center my-12   font-semibold font-inter  text-md ">
              TAGS
            </h1>
          </div>
        </div>

        {/* righbar */}
        <div className="rightbar w-4/5 h-screen  bg-white">
          {/* hEADING */}
          <div className="heading flex justify-center items-center">
            <CiImageOn className="w-10 h-10 " />
            <h1 className="text-center font-semibold font-inter  text-2xl my-5 ">
              GALLERY
            </h1>
          </div>

          {/* years button */}
          <div className="years flex \">
            <div className="  w-20 h-10 border-grey border-2 m-2 rounded-full font-semibold font-inter  text-md text-center p-2 cursor-pointer hover:bg-indigo-100">
              2025
            </div>
            <div className=" w-20 h-10 border-grey border-2 m-2 rounded-full font-semibold font-inter  text-md text-center p-2 cursor-pointer hover:bg-indigo-100">
              2024
            </div>
            <div className=" w-20 h-10 border-grey border-2 m-2 rounded-full font-semibold font-inter  text-md text-center p-2 cursor-pointer hover:bg-indigo-100">
              2023
            </div>
          </div>

          <hr />
        </div>
      </div>
      <Footer />
    </main>
  );
}
