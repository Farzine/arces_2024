import { useRouter } from 'next/navigation';
import React from 'react';
import Image from 'next/image';

interface AttendeeCardProps {
  _id: string;
  name: string;
  email: string;
  photoUrl: string;
  university: string;
}

function AttendeeCard(props: AttendeeCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/attendee/${props._id}`);
  };

  // Fallback image URL in case the provided photoUrl is not valid
  const validPhotoUrl = props.photoUrl.startsWith('http') ? props.photoUrl : '/default-profile.jpg';

  return (
    <div 
      className='bg-white p-4 rounded-md shadow-md m-3 hover:shadow-lg flex flex-col justify-center items-center cursor-pointer'
      onClick={handleClick}
    >
      <Image 
        src={validPhotoUrl} 
        alt={props.name} 
        className='h-32 w-32 rounded-full object-cover' 
        width={128} 
        height={128} 
      />
      <p className='text-xl font-semibold mt-4 text-center'>{props.name}</p>
      <p className='text-md text-gray-500 text-center'>{props.email}</p>
      <p className='text-md text-blue-500 text-center'>{props.university}</p>      
    </div>
  );
}

export default AttendeeCard;
