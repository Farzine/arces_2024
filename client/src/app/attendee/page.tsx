"use client";
const BACKENDURL = process.env.NEXT_PUBLIC_APP_BACKEND_URL;
import Navbar from "@/components/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import AttendeeCard from "./AttendeeCard";
import Footer from "@/components/Footer";
import { LoaderCircle } from "lucide-react";

// Define the interface
interface AttendeeInterface {
  _id: string;
  name: string;
  email: string;
  university: string;
  photoUrl: string;
}

// Component to fetch and display attendees
export default function Attendee() {
  const [attendees, setAttendees] = useState<AttendeeInterface[]>([]);
  const [fetching, setFetching] = useState<boolean>(true);
  const [keyword, setKeyword] = useState<string>("");

  useEffect(() => {
    axios
      .get(`${BACKENDURL}/registration`)
      .then((response) => {
        setAttendees(response.data);
        setFetching(false);
      })
      .catch((error) => {
        console.error("Error fetching attendees:", error);
      });
  }, []);

  const filteredAttendees = attendees.filter(
    (attendee) =>
      attendee.name.toLowerCase().includes(keyword.toLowerCase()) ||
      attendee.email.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <main className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="flex-grow mt-24">
        {fetching ? (
          <div role="status" className="flex flex-col justify-center items-center h-screen">
          <LoaderCircle className="animate-spin" size={45} />
        </div>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-center my-6">
              Meet our attendees
            </h1>
            <div className="flex justify-center mx-6">
              <input
                placeholder="Search with name, email"
                className="max-w-screen-md w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6 my-6">
              {filteredAttendees.length > 0 ? (
                filteredAttendees.map((attendee) => (
                  <AttendeeCard
                    _id={attendee._id}
                    email={attendee.email}
                    name={attendee.name}
                    university={attendee.university}
                    photoUrl={attendee.photoUrl}
                    key={attendee._id}
                  />
                ))
              ) : (
                <div className="col-span-full text-center text-xl font-semibold">
                  No users found
                </div>
              )}
            </div>
          </>
        )}
      </div>
      <Footer />
    </main>
  );
}
