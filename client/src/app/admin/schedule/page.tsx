"use client";

import ScrollToTopButton from "@/components/ScrollToTopButton";
import Sidebar from "@/components/Sidebar";
import { format } from "date-fns";
import Cookies from "js-cookie";
import moment from "moment";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";

interface ScheduleItem {
  _id: string;
  session: string;
  date: string;
  start_time: string;
  end_time: string;
}

const Schedule: React.FC = () => {
  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([]);
  const [session, setSession] = useState<string>("");
  const [date, setDate] = useState<Date | null>(null);
  const [start_time, setStartTime] = useState<string | null>(null);
  const [end_time, setEndTime] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchScheduleItems();
  }, []);

  const fetchScheduleItems = async () => {
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
        setScheduleItems(data);
      } else {
        throw new Error("Failed to fetch schedule items");
      }
    } catch (error) {
      console.error("Error fetching schedule items:", error);
      setError("Failed to fetch schedule items. Please try again.");
    }
  };

  const handleAddScheduleItem = async () => {
    if (!session || !date || !start_time || !end_time) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);

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
            session,
            date: formattedDate,
            start_time,
            end_time,
          }),
        }
      );
      if (response.ok) {
        fetchScheduleItems();
        setSession("");
        setDate(null);
        setStartTime(null);
        setEndTime(null);
        setError(null);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      } else {
        throw new Error("Failed to add schedule item");
      }
    } catch (error) {
      console.error("Error adding schedule item:", error);
      setError("Failed to add schedule item. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteScheduleItem = async (id: string) => {
    setLoading(true);
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
        fetchScheduleItems();
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      } else {
        throw new Error("Failed to delete schedule item");
      }
    } catch (error) {
      console.error("Error deleting schedule item:", error);
      setError("Failed to delete schedule item. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEditScheduleItem = async () => {
    if (!editId || !session || !date || !start_time || !end_time) {
      setError("All fields are required.");
      return;
    }

    setLoading(true);

    try {
      const token = Cookies.get("token");
      const formattedDate = date ? format(date, "dd MMMM yyyy") : "";
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/schedule/edit/${editId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
          body: JSON.stringify({
            session,
            date: formattedDate,
            start_time,
            end_time,
          }),
        }
      );
      if (response.ok) {
        fetchScheduleItems();
        setSession("");
        setDate(null);
        setStartTime(null);
        setEndTime(null);
        setEditId(null);
        setError(null);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      } else {
        throw new Error("Failed to edit schedule item");
      }
    } catch (error) {
      console.error("Error editing schedule item:", error);
      setError("Failed to edit schedule item. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (item: ScheduleItem) => {
    setSession(item.session);
    setDate(moment(item.date, "DD MMMM yyyy").toDate());
    setStartTime(item.start_time);
    setEndTime(item.end_time);
    setEditId(item._id);
  };

  const handleCancelEdit = () => {
    setSession("");
    setDate(null);
    setStartTime(null);
    setEndTime(null);
    setEditId(null);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      {loading && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50 z-50">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                </div>
            )}
      <div className={`flex-1 p-4 md:p-8 overflow-y-auto bg-gray-100 h-screen ${loading ? 'filter blur-sm' : ''}`}>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Schedule Management</h1>

        {scheduleItems.length === 0 && <p>No schedule items found</p>}
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
            className="p-2 border rounded w-full md:w-1/3"
          ></textarea>
          
          <label className="block font-bold">Start Time</label>
          <TimePicker
            onChange={(start_time: string | null) => setStartTime(start_time)}
            value={start_time}
            className="p-2 rounded w-full md:w-1/5 border-4 border-white"
            disableClock
            format="h:mm a"
          />
          
          <label className="block font-bold">End Time</label>
          <TimePicker
            onChange={(end_time: string | null) => setEndTime(end_time)}
            value={end_time}
            className="p-2 rounded w-full md:w-1/5 border-4 border-white"
            disableClock
            format="h:mm a"
          />

          <div className="flex space-x-2">
            <button
              onClick={editId ? handleEditScheduleItem : handleAddScheduleItem}
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-40"
            >
              {editId ? "Update Schedule" : "Add Schedule"}
            </button>
            {editId && (
              <button
                onClick={handleCancelEdit}
                className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 w-40"
              >
                Cancel
              </button>
            )}
          </div>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Date</th>
                <th className="py-2 px-4 border">Session</th>
                <th className="py-2 px-4 border">Start Time</th>
                <th className="py-2 px-4 border">End Time</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {scheduleItems.map((item) => (
                <tr key={item._id} className="text-center">
                  <td className="py-2 px-4 border">
                    {moment(item.date).format("DD MMMM, YYYY")}
                  </td>
                  <td className="py-2 px-4 border">{item.session}</td>
                  <td className="py-2 px-4 border">{moment(item.start_time, "HH:mm").format("h:mm A")}</td>
                  <td className="py-2 px-4 border">{moment(item.end_time, "HH:mm").format("h:mm A")}</td>
                  <td className="py-2 px-4 border space-x-2">
                    <button
                      onClick={() => handleEditClick(item)}
                      className="text-black py-1 px-3 m-2 rounded hover:bg-green-600 border-2 border-green-600"
                    >
                      Edit
                    </button>
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
      <ScrollToTopButton />
    </div>
  );
};

export default Schedule;
