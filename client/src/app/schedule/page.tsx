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

interface SessionListItem {
  sessionTheme: string;
  venue: string;
  start_time: string;
  end_time: string;
}

const Schedule: React.FC = () => {
  const [schedule, setSchedule] = useState<ScheduleItem[]>([]);
  const [sessionList, setSessionList] = useState<SessionListItem[]>([]);

  useEffect(() => {
    const fetchSessionList = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/sessionList`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch sessionList");
        }
        const data: SessionListItem[] = await response.json();
        setSessionList(data);
      } catch (error) {
        console.error("Error fetching sessionList:", error);
      }
    };

    fetchSessionList();
  }, []);

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


          {/* session list */}

        <div className="w-4/5 bg-white mx-auto h-auto pb-10 rounded-md justify-center shadow-lg mt-24">
          {/* heading box */}
          <div className="heading flex my-4 justify-center">

            <svg xmlns="http://www.w3.org/2000/svg" 
              width="45" 
              height="45"
              fill="black"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-clock-8 my-3"
               viewBox="0 0 64 64" id="session"><path d="M3 62h12a1 1 0 0 0 1-1v-8a7 7 0 0 0-3.779-6.208 5 5 0 1 0-6.442 0A7 7 0 0 0 2 53v8a1 1 0 0 0 1 1zm3-19a3 3 0 1 1 3 3 3 3 0 0 1-3-3zM4 53a5 5 0 0 1 10 0v7H4zm14 2v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a5 5 0 0 0-2.207-4.145 4 4 0 1 0-5.586 0A5 5 0 0 0 18 55zm3-7a2 2 0 1 1 2 2 2 2 0 0 1-2-2zm-1 7a3 3 0 0 1 6 0v5h-6zm10-2v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a7 7 0 0 0-3.779-6.208 5 5 0 1 0-6.442 0A7 7 0 0 0 30 53zm4-10a3 3 0 1 1 3 3 3 3 0 0 1-3-3zm3 5a5.006 5.006 0 0 1 5 5v7H32v-7a5.006 5.006 0 0 1 5-5zm9 7v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-6a5 5 0 0 0-2.207-4.145 4 4 0 1 0-5.586 0A5 5 0 0 0 46 55zm3-7a2 2 0 1 1 2 2 2 2 0 0 1-2-2zm-1 7a3 3 0 0 1 6 0v5h-6zm10.414-37.95A6 6 0 1 0 49.54 17H44V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v26a1 1 0 0 0 1 1h14.5v1.52l-4.625 3.7A1 1 0 0 0 13.5 37h19a1 1 0 0 0 .625-1.781L28.5 31.52V30H43a1 1 0 0 0 1-1v-4.749l4.833.95-2.977 10.527A1 1 0 0 0 46.818 37H61a1 1 0 0 0 1-1V21.558a4.374 4.374 0 0 0-3.586-4.508zM50 13a4 4 0 1 1 4 4 4 4 0 0 1-4-4zM26.875 32.781 29.649 35h-13.3l2.774-2.219A1 1 0 0 0 19.5 32v-2h7v2a1 1 0 0 0 .375.781zM42 28H4V4h38v13h-3a1 1 0 0 0-.888.54l-2 3.856a1 1 0 0 0 .7 1.442L42 23.858zm18 7H48.141l2.912-10.3a1 1 0 0 0-.77-1.254L38.5 21.133 39.607 19h18.374A2.339 2.339 0 0 1 60 21.558z"></path><path d="M7.541 14.839a1 1 0 0 0 1.472 1.036L11 14.776l1.987 1.1a1.013 1.013 0 0 0 .485.125 1 1 0 0 0 .987-1.161l-.391-2.4 1.648-1.689a1 1 0 0 0-.565-1.687l-2.236-.341-1.01-2.151a1 1 0 0 0-1.81 0l-1.01 2.154-2.236.341a1 1 0 0 0-.565 1.687l1.648 1.689Zm2.374-4.217a1 1 0 0 0 .754-.564l.331-.7.331.705a1 1 0 0 0 .754.564l.84.128-.641.657a1 1 0 0 0-.271.859l.14.862-.669-.37a1 1 0 0 0-.968 0l-.669.37.14-.862a1 1 0 0 0-.271-.859l-.641-.657ZM18 11h11v2H18zM21 15h15v2H21zM6.5 19h13v2h-13zM9 23h22v2H9z"></path></svg>

            <div className="font-inter font-bold text-2xl my-5 mx-2 ">
              SESSION LIST
            </div>
          </div>

          {/* session list table */}
          <div className="bg-indigo-700 flex justify-center w-full py-3 my-2 px-40 items-center divide-solid">
            <h1 className="flex text-white font-bold text-lg text-center  ml-9 w-4/5">
              Session Theme
            </h1>
            <h1 className="flex text-white font-bold text-lg text-center mr-36 ml-36">
              Venue
            </h1>
            <h1 className="flex text-white font-bold text-lg text-center ml-36">
              Time
            </h1>
          </div>

          {/* Render SessionListItem cards */}
          {sessionList.map((item, index) => (
            <Schedulecard
              key={index} // Ensure each element has a unique key
              title={item.sessionTheme}
              date={item.venue}
              start_time={item.start_time}
              end_time={item.end_time}
              checkend={index === sessionList.length - 1}
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
