"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/NavBar';
import OrganizedBy from '@/components/OrganizedBy';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Carousel from '@/js';

interface Sponsor {
  _id: string;
  path: string;
  sponsorName: string;
  sponsorType: string;
}

const SponsorsPage: React.FC = () => {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/sponsors`, {
          method: 'GET'
        });

        if (!response.ok) {
          throw new Error(`Error fetching sponsors: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setSponsors(data);
      } catch (error) {
        console.error('Error fetching sponsors:', error);
        setError('Error fetching sponsors');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSponsors();
  }, []);

  const renderSponsorsByType = (type: string) => {
    const filteredSponsors = sponsors.filter(sponsor => sponsor.sponsorType === type);
    return (
      <div className="mb-8">
        <hr className="mt-8 border-t-2 border-gray-300 mx-auto w-11/12 sm:w-8/12 lg:w-6/12" />
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-center text-orange-500 mb-6 mt-6 sm:mt-8">{type}</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {filteredSponsors.map((sponsor) => (
            <div key={sponsor._id} className="text-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden mt-10">
                <Image src={sponsor.path} alt={sponsor.sponsorName} width={100} height={100} className="object-cover w-full h-full" />
              </div>
              <p className="mt-4 text-xs sm:text-sm md:text-xl text-gray-700">{sponsor.sponsorName}</p>
            </div>
          ))}
          {isLoading && <div>Loading...</div>}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className='flex justify-center items-center mt-32'>
          <div className='pt-9 mr-4'>
            <Image src="/handshake.png" alt="handshake icon" width={50} height={50} />
          </div>
          <div>
            <h1 className="text-3xl md:text-7xl font-bold mt-5">Sponsors</h1>
          </div>
        </div>
        <p className="text-center mb-4 text-sm sm:text-base md:text-3xl mt-10">
          8th International Conference on Engineering Research, Innovation and Education (ICERIE 2025)
        </p>
        <OrganizedBy />
        {renderSponsorsByType('Media Partner')}
        {renderSponsorsByType('Technical Partner')}
        {renderSponsorsByType('Supported By')}
      </div>
      {error && <div>{error}</div>}
          {/* Carousel Section */}
          <div className="container mx-auto px-4 py-8 hidden">
        <Carousel />
      </div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default SponsorsPage;
