import { useRouter } from 'next/navigation';
import React from 'react';

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

  return (
    <div 
      className='bg-white p-4 rounded-md shadow-md m-3 hover:shadow-lg flex flex-col justify-center items-center cursor-pointer'
      onClick={handleClick}
    >
      <img src={props.photoUrl} alt={props.name} className='aspect-square h-32 rounded-full object-cover' />
      <p className='text-lg font-semibold mt-4 text-center'>{props.name}</p>
      <p className='text-sm text-gray-500 text-center'>{props.email}</p>
      <p className='text-sm text-blue-500 text-center'>{props.university}</p>      
    </div>
  );
}

export default AttendeeCard;
