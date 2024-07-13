"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';
import { LoaderCircle } from 'lucide-react';
import Image from 'next/image';

const BACKENDURL = process.env.NEXT_PUBLIC_APP_BACKEND_URL;

export default function SoloAttendee({ params }: { params: { id: string } }) {
  const [attendee, setAttendee] = useState<any>(null); // Use 'any' type for flexibility
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Use 'null' as initial state for error

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKENDURL}registration/${params.id}`);
        setAttendee(response.data);
        setLoading(false);
      } catch (error:any) {
        setError(error.message); // Set error message in state
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]); // Fetch data whenever 'params.id' changes

  const payment = async () => {
    try {
      const response = await axios.get(`${BACKENDURL}registration/pay/${params.id}`);
      const { url } = response.data;
      window.location.href = url;
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <div role="status" className="flex flex-col justify-center items-center h-screen">
  <LoaderCircle className="animate-spin" size={45} />
</div>;
  if (error) return <p>Error: {error}</p>;
  if (!attendee) return <p>Attendee not found</p>; // Handle case where 'attendee' is null

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow flex-col justify-center items-center p-4">
        {/* <h1 className="text-3xl font-semibold mb-4">Attendee Details</h1> */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
          <Image
            src={attendee.photoUrl}
            alt={`${attendee.name}'s photo`}
            className="w-32 h-32 rounded-full mb-4"
            width={100} height={100}
          />
          <h2 className="text-2xl font-bold">{attendee.name}</h2>
          <p className="text-lg">Email: {attendee.email}</p>
          <p className="text-lg">Phone: {attendee.phone}</p>
          <p className="text-lg">Country: {attendee.country}</p>
          <p className="text-lg">University: {attendee.university}</p>
          <p className="text-lg">Payment Status: {attendee.payment_status ? <span className='text-green-500 font-semibold'>Paid</span> : <span className='text-red-500 font-semibold'>Not Paid</span>}</p>
          {!attendee.payment_status && (
            <button
              onClick={payment}
              className="px-4 py-2 mt-4 bg-green-500 text-white rounded hover:bg-green-700"
            >
              Pay now
            </button>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
