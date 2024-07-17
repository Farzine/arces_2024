"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/NavBar';
import OrganizedBy from '@/components/OrganizedBy';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';


interface Sponsor {
  _id: string;
  path: string;
  sponsorName: string;
  sponsorType: string;
}

const SponsorsPage: React.FC = () => {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/sponsors`, {
          method: 'GET',
          credentials: 'include',
        });
        if (response.ok) {
          const data = await response.json();
          setSponsors(data);
        } else {
          console.error('Error fetching sponsors:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching sponsors:', error);
      }
    };

    fetchSponsors();
  }, []);

  const renderSponsorsByType = (type: string) => {
    const filteredSponsors = sponsors.filter(sponsor => sponsor.sponsorType === type);
    return (
      <div className="mb-8">
        <hr className="mt-8 border-t-2 border-gray-300 mx-56" />
        <h2 className="text-4xl font-semibold text-center text-orange-500 mb-10 mt-10">{type}</h2>
        <div className="flex justify-center space-x-8">
          {filteredSponsors.map((sponsor) => (
            <div key={sponsor._id} className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mr-8">
                <Image src={sponsor.path} alt={sponsor.sponsorName} width={100} height={100} className="object-cover w-full h-full" />
              </div>
              <p className="mt-4 text-sm text-gray-700 mb-10 mr-8">{sponsor.sponsorName}</p>
            </div>
          ))}
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
      <div className='flex justify-center items-center mr-16 mt-20'>
          <div className='pt-9 mr-4'>
            <Image
              src="/handshake.png"
              alt="handshake icon"
              width={50}
              height={50}
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mt-5">Sponsors</h1>
          </div>
        </div>
        <p className="text-center mb-4">
          8th International Conference on Engineering Research, Innovation and Education (ICERIE 2025)
        </p>
        <OrganizedBy />
        {renderSponsorsByType('Media Partner')}
        {renderSponsorsByType('Technical Partner')}
        {renderSponsorsByType('Supported By')}
      </div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default SponsorsPage;
