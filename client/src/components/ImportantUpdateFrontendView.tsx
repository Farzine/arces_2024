import React, { useEffect, useState } from 'react';

const ImportantUpdates: React.FC = () => {
  const [updates, setUpdates] = useState<string[]>([]);

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/important-updates`);
        const data = await response.json();
        setUpdates(data.map((update: { title: string }) => update.title));
      } catch (error) {
        console.error('Error fetching updates:', error);
      }
    };

    fetchUpdates();
  }, []);

  return (
    <div className='w-full bg-white pb-10'>
      <div className='flex items-center justify-center space-x-2 pt-10 pb-4'>
        <div>
          <svg height="45px" width="45px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-19.71 -19.71 236.56 236.56" xmlSpace="preserve" fill="#ff0000" stroke="#ff0000" strokeWidth="10.645722000000001">

            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.394286" />

            <g id="SVGRepo_iconCarrier"> <g> <g> <path style={{fill:"#ffffff"}} d="M195.031,166.074l-85.592-148.24c-2.226-3.89-6.403-6.306-10.89-6.306 c-4.477,0-8.65,2.412-10.894,6.292L1.68,166.747c-2.24,3.876-2.24,8.689,0,12.565c2.24,3.887,6.413,6.302,10.887,6.302h172.01 c6.929,0,12.565-5.644,12.565-12.58C197.143,170.447,196.377,167.956,195.031,166.074z M184.577,178.324H12.571 c-1.882,0-3.643-1.009-4.585-2.645c-0.945-1.636-0.948-3.665,0-5.3L93.961,21.456c0.941-1.628,2.698-2.645,4.588-2.645 c1.882,0,3.654,1.016,4.592,2.645l85.764,148.537c0.626,0.895,0.966,1.943,0.966,3.046 C189.871,175.952,187.491,178.324,184.577,178.324z" /> <polygon style={{fill:"#ffffff"}} points="102.504,134.938 104.486,67.255 89.709,67.255 91.681,134.938 " /> <path style={{fill:"#ffffff"}} d="M97.096,144.637c-5.146,0-8.879,3.905-8.879,9.28c0,5.39,3.733,9.294,8.879,9.294 c5.229,0,8.886-3.815,8.886-9.294C105.982,148.452,102.328,144.637,97.096,144.637z" /> </g> </g> </g>

          </svg>
        </div>
        <div className='font-bold text-3xl flex items-center'>
          <h1>LATEST UPDATES</h1>
        </div>
      </div>
      <div className="w-full overflow-hidden bg-red-500 py-4 flex items-center relative">
        <div className="flex whitespace-nowrap animate-scroll">
          {updates.map((update, index) => (
            <span key={index} className="mr-12 text-white font-bold text-xl">
              **{update}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImportantUpdates;
