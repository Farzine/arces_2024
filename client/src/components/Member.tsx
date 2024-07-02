import React from 'react';

const ProfileCard: React.FC = () => {
  return (
    <div className="max-w-fit p-12 bg-white border rounded shadow">
      <div className="flex items-center justify-between">
        <div className="w-32 h-32 overflow-hidden rounded-full">
          <img src="https://res.cloudinary.com/djmgdgx86/image/upload/v1719695813/samples/upscale-face-1.jpg" alt="Farid Uddin Ahmed" className="object-cover w-full h-full" />
        </div>
        <div className="ml-6 text-center">
          <h2 className="text-md">Professor</h2>
          <h2 className="text-lg font-bold whitespace-nowrap">Farid Uddin Ahmed</h2>
          <p className="mt-2 text-sm text-gray-600">Vice Chancellor, SUST</p>
          <p className="mt-1 text-sm text-gray-600">Chief Patron</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
