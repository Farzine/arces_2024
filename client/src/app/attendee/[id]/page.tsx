"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';
import { LoaderCircle } from 'lucide-react';
import Image from 'next/image';
import Carousel from '@/js';

const BACKENDURL = process.env.NEXT_PUBLIC_APP_BACKEND_URL;

interface AttendeeInterface {
  _id: string;
  name: string;
  email: string;
  university: string;
  photoUrl: string;
  regular_fee: number;
  early_bird_fee: number;
  payment_status: boolean;
  currency: string;
  category: string;
}

const earlyBirdDeadline = new Date("2024-12-10T23:59:59Z");
const regularDeadline = new Date("2024-12-25T23:59:59Z");

export default function SoloAttendee({ params }: { params: { id: string } }) {
  const [attendee, setAttendee] = useState<AttendeeInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [billAmount, setBillAmount] = useState<number>(0);
  const [payable, setPayable] = useState<boolean>(true);
  const currentDate = new Date();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BACKENDURL}/registration/${params.id}`);
        const attendeeData: AttendeeInterface = response.data;

        // Determine the fee based on the current date
        if (currentDate <= earlyBirdDeadline) {
          setBillAmount(attendeeData.early_bird_fee);
        } else if (currentDate <= regularDeadline) {
          setBillAmount(attendeeData.regular_fee);
        } else {
          setPayable(false); // Disable payment if the deadline has passed
        }

        setAttendee(attendeeData);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id]);

  const payment = async () => {
    try {
      const response = await axios.get(`${BACKENDURL}/registration/pay/${params.id}`);
      const { url } = response.data;
      window.location.href = url;
    } catch (error) {
      console.error(error);
    }
  };

  if (loading)
    return (
      <div role="status" className="flex flex-col justify-center items-center h-screen">
        <LoaderCircle className="animate-spin" size={45} />
      </div>
    );

  if (error) return <p>Error: {error}</p>;
  if (!attendee) return <p>Attendee not found</p>;

  return (
    <main className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="flex flex-grow flex-col justify-center items-center p-4">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
          <Image
            src={attendee.photoUrl}
            alt={`${attendee.name}'s photo`}
            className="w-32 h-32 md:w-52 md:h-52 rounded-full mb-4"
            width={100}
            height={100}
          />
          <h2 className="md:text-4xl text-3xl font-bold">{attendee.name}</h2>
          <p className="md:text-2xl text-xl">Email: {attendee.email}</p>
          <p className="md:text-2xl text-xl">University: {attendee.university}</p>
          <p className="md:text-2xl text-xl">
            Payment Status: {attendee.payment_status ? (
              <span className='text-green-500 font-semibold'>Paid</span>
            ) : (
              <span className='text-red-500 font-semibold'>Not Paid</span>
            )}
          </p>
          {!attendee.payment_status && payable && (
            <button
              onClick={payment}
              className="px-4 py-2 mt-4 bg-green-500 text-white rounded hover:bg-green-700"
            >
              {`Pay ${billAmount} ${attendee.currency}`}
            </button>
          )}
          {!payable && <p className="text-red-500 font-semibold mt-4">Payment deadline has passed</p>}
        </div>
      </div>
          {/* Carousel Section */}
          <div className="container mx-auto px-4 py-8 hidden">
        <Carousel/>
      </div>
      <Footer />
    </main>
  );
}
