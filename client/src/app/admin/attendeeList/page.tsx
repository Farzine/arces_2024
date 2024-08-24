"use client";

import ScrollToTopButton from "@/components/ScrollToTopButton";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface AttendeeInterface {
  _id: string;
  name: string;
  email: string;
  university: string;
  photoUrl: string;
  phone: string;
  category: string;
  payment_status: boolean;
}

const AttendeeList: React.FC = () => {
  const [attendeeListItems, setAttendeeListItems] = useState<AttendeeInterface[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchAttendeeList();
  }, []);

  const fetchAttendeeList = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/registration`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (response.ok) {
        const data = await response.json();
        setAttendeeListItems(data);
        console.log(data);
      } else {
        throw new Error("Failed to fetch AttendeeList items");
      }
    } catch (error) {
      console.error("Error fetching AttendeeList items:", error);
      setError("Failed to fetch AttendeeList items. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Function to convert attendee data to CSV format
  const convertToCSV = (data: AttendeeInterface[]) => {
    const headers = ["Name", "Email", "University", "Category", "Phone", "Payment Status", "Photo Link"];
    const rows = data.map(item => [
      item.name,
      item.email,
      item.university,
      item.category,
      item.phone,
      item.payment_status ? "Paid" : "Unpaid",
      item.photoUrl
    ]);

    const csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
    return csvContent;
  };

  // Function to download the CSV file
  const downloadCSV = () => {
    const csvContent = convertToCSV(attendeeListItems);
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "attendee_list.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Attendee Details</h1>

        {attendeeListItems.length === 0 && <p>No Attendee Details found</p>}
        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <strong className="font-bold">Error!</strong>
            <span className="block sm:inline"> {error}</span>
          </div>
        )}

        {/* Download CSV Button */}
        <div className="mb-4">
          <button
            onClick={downloadCSV}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Download CSV
          </button>
        </div>

        <div className="mt-8 overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">University</th>
                <th className="py-2 px-4 border">Category</th>
                <th className="py-2 px-4 border">Phone</th>
                <th className="py-2 px-4 border">Payment Status</th>
              </tr>
            </thead>
            <tbody>
              {attendeeListItems.map((item) => (
                <tr key={item._id} className="text-center">
                  <td className="py-2 px-4 border">{item.name}</td>
                  <td className="py-2 px-4 border">{item.email}</td>
                  <td className="py-2 px-4 border">{item.university}</td>
                  <td className="py-2 px-4 border">{item.category}</td>
                  <td className="py-2 px-4 border">{item.phone}</td>
                  <td className="py-2 px-4 border">{item.payment_status === true ? "Paid" : "Unpaid"}</td>
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

export default AttendeeList;
