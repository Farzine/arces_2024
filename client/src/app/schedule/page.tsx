"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import Schedulecard from "@/components/Schedulecard";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useEffect, useState } from "react";

interface ScheduleItem {
  session: string;
  date: string;
  start_time: string;
  end_time: string;
}

const Schedule: React.FC = () => {
  const [schedule, setSchedule] = useState<ScheduleItem[]>([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/schedule`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch schedule");
        }
        const data: ScheduleItem[] = await response.json();
        setSchedule(data);
      } catch (error) {
        console.error("Error fetching schedule:", error);
      }
    };

    fetchSchedule();
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="bg-white p-16 min-h-screen mt-16 ">
        <div className="w-4/5 bg-white mx-auto h-auto pb-10 rounded-md justify-center shadow-lg">
          {/* heading box */}
          <div className="heading flex my-4 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-clock-8 my-3"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 8 14" />
            </svg>

            <div className="font-inter font-bold text-2xl my-5 mx-2 ">
              SCHEDULE
            </div>
          </div>

          {/* schedule table */}
          <div className="bg-indigo-700 flex justify-center w-auto py-3 my-2 px-40 items-center divide-solid">
            <h1 className="flex text-white font-bold text-lg text-center mr-36 ml-20">
              Session
            </h1>
            <h1 className="flex text-white font-bold text-lg text-center mr-36 ml-36">
              Date
            </h1>
            <h1 className="flex text-white font-bold text-lg text-center ml-36">
              Time
            </h1>
          </div>

          {/* Render schedule cards */}
          {schedule.map((item, index) => (
            <Schedulecard
              key={index} // Ensure each element has a unique key
              title={item.session}
              date={item.date}
              start_time={item.start_time}
              end_time={item.end_time}
              checkend={index === schedule.length - 1}
            />
          ))}
        </div>

        {/* Background */}
      </div>
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Schedule;
