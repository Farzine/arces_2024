import React from 'react';
import Image from 'next/image';

const Sponsors: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-24  bg-gray-100">
      <h2 className="text-4xl font-semibold text-gray-500 mb-20">Sponsors</h2>
      <div className="flex flex-row items-center space-x-32">
        <div className='text-center'>
          <Image src="/sustLogo.png" alt="UGC Logo" className="h-20" width={90} height={130}/>
        </div>
        <div>
          <Image src="/sustLogo.png" alt="Bangladesh" className="h-20"width={90} height={130} />
        </div>
        <div>
          <Image src="/sustLogo.png" alt="S logo" className="h-20"width={90} height={130} />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;
