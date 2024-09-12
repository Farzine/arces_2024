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
        <h1 className="text-4xl md:text-5xl font-semibold text-black-500">Sponsors</h1>
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

<div role="status" className="max-w-sm p-4 flex gap-10 rounded  animate-pulse md:p-6 dark:border-gray-700">
    
<svg width="50" height="50"  viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect width="128" height="128" fill="url(#pattern0_845_507)"/>
<defs>
<pattern id="pattern0_845_507" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_845_507" transform="scale(0.0078125)"/>
</pattern>
<image id="image0_845_507" width="128" height="128" xlinkHref="data:image/png;base64,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"/>
</defs>
</svg>
<svg width="50" height="50" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect width="128" height="128" fill="url(#pattern0_845_507)"/>
<defs>
<pattern id="pattern0_845_507" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_845_507" transform="scale(0.0078125)"/>
</pattern>
<image id="image0_845_507" width="128" height="128" xlinkHref="data:image/png;base64,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"/>
</defs>
</svg>
<svg width="50" height="50" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect width="128" height="128" fill="url(#pattern0_845_507)"/>
<defs>
<pattern id="pattern0_845_507" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_845_507" transform="scale(0.0078125)"/>
</pattern>
<image id="image0_845_507" width="128" height="128" xlinkHref="data:image/png;base64,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"/>
</defs>
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
