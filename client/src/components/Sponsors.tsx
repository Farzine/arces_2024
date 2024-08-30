import React from 'react';
import Image from 'next/image';

const Sponsors: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-24 bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-500 mb-12 md:mb-20">Sponsors</h2>
      
      {/* Responsive Layout */}
      <div className="flex flex-wrap justify-center gap-16 md:gap-32">
        <div className="text-center">
          <Image
            src="/sustLogo.png"
            alt="UGC Logo"
            className="h-auto w-auto"
            width={90}
            height={130}
          />
        </div>
        <div className="text-center">
          <Image
            src="/sustLogo.png"
            alt="Bangladesh"
            className="h-auto w-auto"
            width={90}
            height={130}
          />
        </div>
        <div className="text-center">
          <Image
            src="/sustLogo.png"
            alt="S logo"
            className="h-auto w-auto"
            width={90}
            height={130}
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
