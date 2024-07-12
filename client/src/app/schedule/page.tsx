"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import Schedulecard from "@/components/Schedulecard";

export default function Schedule() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-200 p-16 ">
        <div className="flex-row w-4/5 bg-white mx-auto h-auto pb-12 rounded-md justify-center ">
          {/* heading box */}
          <div className="heading flex my-4 justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="45"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-clock-8 my-3"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 8 14" />
            </svg>

            <div className="font-inter font-bold text-2xl my-5 mx-2 ">
              SCHEDULE
            </div>
          </div>

          {/* schedule viewBox */}
          <div className="bg-indigo-700  flex justify-center w-full h-12 mx-auto my-2 px-20 items-center divide-solid  ">
            <h1 className="inline-block text-white font-bold text-lg text-center mx-auto">
              Session
            </h1>
            <h1 className="inline-block text-white font-bold text-lg text-center mx-auto">
              Room/Building
            </h1>
            <h1 className="inline-block text-white font-bold text-lg text-center mx-auto">
              Date
            </h1>
            <h1 className="inline-block text-white font-bold text-lg text-center mx-auto">
              Time
            </h1>
          </div>

          <Schedulecard
            title="Meeting Extented Title"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
          <Schedulecard
            title="Submission"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
          <Schedulecard
            title="Extented Submission"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
          <Schedulecard
            title="Extented Submission"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
          <Schedulecard
            title="Extented Submission"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
          <Schedulecard
            title="Extented Submission"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
          <Schedulecard
            title="Submission"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
          <Schedulecard
            title="Extented Submission"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
          <Schedulecard
            title="Extented Submission"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
          <Schedulecard
            title="Extented Submission"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
          <Schedulecard
            title="END"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
          <Schedulecard
            title="Submission"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
          <Schedulecard
            title="Extented Submission"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
          <Schedulecard
            title="Extented Submission"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
          <Schedulecard
            title="Extented Submission"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
          <Schedulecard
            title="END"
            room="Room no 130,IICT,SUST"
            datetime={new Date("2024-10-15T10:00:00")}
          />
        </div>

        {/* Background */}
      </div>

      <Footer />
    </>
  );
}
