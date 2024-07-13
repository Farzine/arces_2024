"use client";

import Sidebar from "@/components/Sidebar";
import { format } from "date-fns";
import Cookies from "js-cookie";
import moment from "moment";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface ScheduleItem {
  _id: string;
  session: string;
  room: string;
  date: string;
  start_time: string;
  end_time: string;
}

const ScheduleItem: React.FC = () => {
  const [ScheduleItem, setScheduleItem] = useState<ScheduleItem[]>([]);
  // Individual state variables for each field
  const [session, setSession] = useState<string>("");
  const [room, setRoom] = useState<string>("");
  const [date, setDate] = useState<Date | null>(null);
  const [start_time, setStartTime] = useState<string>("");
  const [end_time, setEndTime] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    fetchScheduleItem();
  }, []);

  const fetchScheduleItem = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/schedule`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (response.ok) {
        const data = await response.json();
        setScheduleItem(data);
      } else {
        throw new Error("Failed to fetch ScheduleItem");
      }
    } catch (error) {
      console.error("Error fetching ScheduleItem:", error);
      setError("Failed to fetch ScheduleItem. Please try again.");
    }
  };

  const handleAddScheduleItem = async () => {
    try {
      const token = Cookies.get("token");
      const formattedDate = date ? format(date, "dd MMMM yyyy") : "";
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/schedule/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
          body: JSON.stringify({
            session: session,
            room: room,
            date: formattedDate,
            start_time: start_time,
            end_time: end_time,
          }),
        }
      );
      if (response.ok) {
        fetchScheduleItem();
        setSession("");
        setRoom("");
        setDate(null);
        setStartTime("");
        setEndTime("");

        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      } else {
        throw new Error("Failed to add ScheduleItem");
      }
    } catch (error) {
      console.error("Error adding ScheduleItem:", error);
      setError("Failed to add ScheduleItem. Please try again.");
    }
  };

  const handleDeleteScheduleItem = async (id: string) => {
    try {
      const token = Cookies.get("token");
      if (!token) router.push("/admin");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/schedule/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        }
      );
      if (response.ok) {
        fetchScheduleItem();
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      } else {
        throw new Error("Failed to delete ScheduleItem");
      }
    } catch (error) {
      console.error("Error deleting ScheduleItem:", error);
      setError("Failed to delete ScheduleItem. Please try again.");
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 flex-1 p-8 overflow-y-auto bg-[#d7dbdb]">
        <h1 className="text-3xl font-bold mb-4">ScheduleItem</h1>

        {ScheduleItem.length === 0 && <p>No ScheduleItem found</p>}
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        )}
        {success && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline"> Operation successful.</span>
          </div>
        )}

        <div className="flex flex-col space-y-2">
          <DatePicker
            selected={date}
            onChange={(date: Date | null) => setDate(date)}
            dateFormat="dd MMMM, yyyy"
            placeholderText="Select a date"
            className="p-2 border rounded"
            popperPlacement="bottom-start"
          />
          <textarea
            placeholder="Session"
            value={session}
            onChange={(e) => setSession(e.target.value)}
            className="p-2 border rounded w-1/3"
          ></textarea>
          <textarea
            placeholder="Room/Building"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            className="p-2 border rounded w-1/3"
          ></textarea>
               {/* start time  */}
          <textarea
            placeholder="Start Time 10:00 AM"
            value={start_time}
            onChange={(e) => setStartTime(e.target.value)}
            className="p-2 border rounded w-1/5"
          ></textarea>
         {/* end time  */}
         
          <textarea
            placeholder="End Time 12:00 PM"
            value={end_time}
            onChange={(e) => setEndTime(e.target.value)}
            className="p-2 border rounded w-1/5"
          ></textarea>

          <button
            onClick={handleAddScheduleItem}
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-40"
          >
            Add Schedule
          </button>
        </div>

        <div className="mt-8">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Schedule ID</th>
                <th className="py-2 px-4 border">Date</th>
                <th className="py-2 px-4 border">Session</th>
                <th className="py-2 px-4 border">Room/Building</th>
                <th className="py-2 px-4 border">Start Time</th>
                <th className="py-2 px-4 border">End Time</th>
              </tr>
            </thead>
            <tbody>
              {ScheduleItem.map((item) => (
                <tr key={item._id}>
                  <td className="py-2 px-4 border">{item._id}</td>
                  <td className="py-2 px-4 border">
                    {moment(item.date).format("DD MMMM, YYYY")}
                  </td>
                  <td className="py-2 px-4 border">{item.session}</td>
                  <td className="py-2 px-4 border">{item.room}</td>
                  <td className="py-2 px-4 border">{item.start_time}</td>
                  <td className="py-2 px-4 border">{item.end_time}</td>
                  <td className="py-2 px-4 border space-x-2">
                    <button
                      onClick={() => handleDeleteScheduleItem(item._id)}
                      className="text-black py-1 px-3 rounded hover:bg-red-600 border-2 border-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ScheduleItem;
