"use client";

import ScrollToTopButton from "@/components/ScrollToTopButton";
import Sidebar from "@/components/Sidebar";
import { format } from "date-fns";
import { se } from "date-fns/locale";
import Cookies from "js-cookie";
import moment from "moment";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";

interface SessionListItem {
  _id: string;
  sessionTheme: string;
  venue: string;
  start_time: string;
  end_time: string;
}

const SessionList: React.FC = () => {
  const [sessionListItems, setSessionListItems] = useState<SessionListItem[]>([]);
  const [sessionTheme, setSessionTheme] = useState<string>("");
  const [venue, setVenue] = useState<string>("");
  const [start_time, setStartTime] = useState<string | null>(null);
  const [end_time, setEndTime] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchSessionListItems();
  }, []);

  const fetchSessionListItems = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/sessionList`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (response.ok) {
        const data = await response.json();
        setSessionListItems(data);
      } else {
        throw new Error("Failed to fetch SessionList items");
      }
    } catch (error) {
      console.error("Error fetching SessionList items:", error);
      setError("Failed to fetch SessionList items. Please try again.");
    }
  };

  const handleAddSessionListItem = async () => {
    if (!sessionTheme || !venue || !start_time || !end_time) {
      setError("All fields are required.");
      return;
    }
    setLoading(true);

    try {
      const token = Cookies.get("token");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/sessionList/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
          body: JSON.stringify({
            sessionTheme: sessionTheme,
            venue: venue,
            start_time,
            end_time,
          }),
        }
      );
      if (response.ok) {
        fetchSessionListItems();
        setSessionTheme("");
        setVenue("");
        setStartTime(null);
        setEndTime(null);
        setError(null);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      } else {
        throw new Error("Failed to add SessionList item");
      }
    } catch (error) {
      console.error("Error adding SessionList item:", error);
      setError("Failed to add SessionList item. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSessionListItem = async (id: string) => {
    setLoading(true);
    try {
      const token = Cookies.get("token");
      if (!token) router.push("/admin");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/sessionList/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
        }
      );
      if (response.ok) {
        fetchSessionListItems();
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      } else {
        throw new Error("Failed to delete SessionList item");
      }
    } catch (error) {
      console.error("Error deleting SessionList item:", error);
      setError("Failed to delete SessionList item. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEditSessionListItem = async () => {
    if (!editId || !sessionTheme || !venue || !start_time || !end_time) {
      setError("All fields are required.");
      return;
    }
    setLoading(true);

    try {
      const token = Cookies.get("token");
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/sessionList/edit/${editId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          credentials: "include",
          body: JSON.stringify({
            sessionTheme: sessionTheme,
            venue: venue,
            start_time,
            end_time,
          }),
        }
      );
      if (response.ok) {
        fetchSessionListItems();
        setSessionTheme("");
        setVenue("");
        setStartTime(null);
        setEndTime(null);
        setEditId(null);
        setError(null);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      } else {
        throw new Error("Failed to edit SessionList item");
      }
    } catch (error) {
      console.error("Error editing SessionList item:", error);
      setError("Failed to edit SessionList item. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (item: SessionListItem) => {
    setSessionTheme(item.sessionTheme);
    setVenue(item.venue);
    setStartTime(item.start_time);
    setEndTime(item.end_time);
    setEditId(item._id);
  };

  const handleCancelEdit = () => {
    setSessionTheme("");
    setVenue("");
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
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Session List Management</h1>

        {sessionListItems.length === 0 && <p>No session list items found</p>}
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
          <textarea
            placeholder="Session Theme"
            value={sessionTheme}
            onChange={(e) => setSessionTheme(e.target.value)}
            className="p-2 border rounded w-full md:w-1/3"
          ></textarea>
          <textarea
            placeholder="Venue/Building"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
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
              onClick={editId ? handleEditSessionListItem : handleAddSessionListItem}
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 w-40"
            >
              {editId ? "Update Session" : "Add Session"}
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
                <th className="py-2 px-4 border">Session Theme</th>
                <th className="py-2 px-4 border">Room/Building</th>
                <th className="py-2 px-4 border">Start Time</th>
                <th className="py-2 px-4 border">End Time</th>
                <th className="py-2 px-4 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sessionListItems.map((item) => (
                <tr key={item._id} className="text-center">
                  <td className="py-2 px-4 border">{item.sessionTheme}</td>
                  <td className="py-2 px-4 border">{item.venue}</td>
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
                      onClick={() => handleDeleteSessionListItem(item._id)}
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
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default SessionList;
