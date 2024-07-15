"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { PiMapPinArea } from "react-icons/pi";

export default function Venue() {
  return (
    <main className="h-full w-full">
      <Navbar />
      <div className="w-full h-full bg-white mx-auto flex flex-col items-center p-4 md:p-10">
        {/* heading */}
        <div className="heading flex w-full justify-center mb-1">
          <PiMapPinArea className="w-10 h-10 md:w-12 md:h-12" />
          <h1 className="font-inter font-bold text-xl md:text-2xl mx-2">
            VENUE
          </h1>
        </div>
        <hr className="w-1/6" />

        {/* address */}
        <address className="font-extralight font-inter text-center my-2">
          Shahjalal University of Science and Technology
          <br />
          University Ave, Kumargaon,
          <br />
          Sylhet 3114, Bangladesh
        </address>

        {/* map */}
        <div className="google-map-sust w-full h-full drop-shadow-md flex justify-center items-center my-8">
          <div className="w-full max-w-full lg:w-[1000px] lg:h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.435552561316!2d91.82933827436678!3d24.91722804298561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750556002144eab%3A0xe277e14dbca9f2ab!2sShahjalal%20University%20of%20Science%20and%20Technology!5e0!3m2!1sen!2sbd!4v1721041724355!5m2!1sen!2sbd"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
