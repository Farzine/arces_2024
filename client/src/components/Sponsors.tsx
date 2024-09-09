import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Rhombhus from '/public/Polygon.png';
import SupportIcon from '/public/Support.svg'; // Importing the SVG file

interface Sponsor {
  _id: string;
  path: string;
  public_id: string;
  sponsorName: string;
  sponsorType: string;
  __v: number;
}

const Sponsors: React.FC = () => {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]); // State to store sponsor data
  const carouselRef = useRef<HTMLDivElement>(null);

  // Fetch sponsors from API
  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/sponsors`);
        setSponsors(response.data); // Assuming response.data is the array of sponsors
      } catch (error) {
        console.error('Error fetching sponsors:', error);
      }
    };
    fetchSponsors();
  }, []);

  useEffect(() => {
    // Auto-scroll functionality
    const scroll = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1;
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    };

    const intervalId = setInterval(scroll, 20); // Adjust this for speed
    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, [sponsors]);

  return (
    <div className="w-full text-center flex flex-col px-4">
      {/* Sponsor Title with SVG Icon */}
      <div className="flex justify-center items-center mb-8 md:mb-5">
        <h1 className="text-2xl md:text-4xl font-semibold text-black-500">Sponsors</h1>
        <Image src={SupportIcon} alt="Support Icon" width={30} height={30} className="ml-2 md:ml-4" />
      </div>
      
      <div className="relative flex flex-col justify-center h-60 md:h-80 py-10 overflow-hidden">
        {/* Rhombus Background Images */}
        <Image
          src={Rhombhus}
          alt="Rhombus"
          className="absolute left-1 z-0"
          width={250} // Smaller width for mobile
          height={200}
          sizes="(max-width: 768px) 150px, 250px" // Responsive image sizes
        />
        <Image
          src={Rhombhus}
          alt="Rhombus"
          className="absolute right-0 z-0"
          width={250} // Smaller width for mobile
          height={200}                     
          sizes="(max-width: 768px) 250px, 150px" // Responsive image sizes
        />

        {/* Logo Carousel */}
        <div
          className="flex gap-10 md:gap-20 overflow-x-scroll no-scrollbar justify-center items-center w-4/6 md:w-5/6 mx-auto h-[100px] md:h-[140px] z-10"
          ref={carouselRef}
        >             
          {sponsors.length > 0 ? (
            // Double the sponsor list to create a seamless loop effect
            [...sponsors, ...sponsors].map((sponsor, index) => (
              <div key={index} className="flex-shrink-0">
                <Image
                  src={sponsor.path}
                  alt={sponsor.sponsorName}
                  className="h-auto w-auto"
                  width={70} // Smaller width for mobile
                  height={100}
                  sizes="(max-width: 768px) 70px, 90px" // Responsive image sizes
                />
              </div>
            ))
          ) : (
            <div role="status">
            <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
