"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import ProfileCard from "@/lossProject/Member";

const profileData = [
  { name: "Professor Farid Uddin Ahmed ", title: "Vice Chancellor, SUST", role: "CHIEF PATRON", imageUrl: "https://res.cloudinary.com/djmgdgx86/image/upload/v1719695813/samples/upscale-face-1.jpg" },
  { name: "Professor Farid Uddin Ahmed 2", title: "Vice Chancellor, SUST", role: "", imageUrl: "https://res.cloudinary.com/djmgdgx86/image/upload/v1719695813/samples/upscale-face-1.jpg" },
  { name: "Professor Farid Uddin Ahmed 3", title: "Vice Chancellor, SUST", role: "Chief Patron", imageUrl: "https://res.cloudinary.com/djmgdgx86/image/upload/v1719695813/samples/upscale-face-1.jpg" },
  // ... Add more profiles as needed, up to 15
  { name: "Professor Farid Uddin Ahmed 15", title: "Vice Chancellor, SUST", role: "Chief Patron", imageUrl: "https://res.cloudinary.com/djmgdgx86/image/upload/v1719695813/samples/upscale-face-1.jpg" },
  { name: "Professor Farid Uddin Ahmed 1", title: "Vice Chancellor, SUST", role: "Chief Patron", imageUrl: "https://res.cloudinary.com/djmgdgx86/image/upload/v1719695813/samples/upscale-face-1.jpg" },
  { name: "Professor Farid Uddin Ahmed 2", title: "Vice Chancellor, SUST", role: "Chief Patron", imageUrl: "https://res.cloudinary.com/djmgdgx86/image/upload/v1719695813/samples/upscale-face-1.jpg" },
  { name: "Professor Farid Uddin Ahmed 3", title: "Vice Chancellor, SUST", role: "Chief Patron", imageUrl: "https://res.cloudinary.com/djmgdgx86/image/upload/v1719695813/samples/upscale-face-1.jpg" },
  // ... Add more profiles as needed, up to 15
  { name: "Professor Farid Uddin Ahmed 15", title: "Vice Chancellor, SUST", role: "Chief Patron", imageUrl: "https://res.cloudinary.com/djmgdgx86/image/upload/v1719695813/samples/upscale-face-1.jpg" }

];

export default function Committees() {
  return (
    <main className="Committees-screen flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="mt-16 flex-grow container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-8">
          Organizing Committee
          <div className="border-b-2 border-black w-1/2 mx-auto mt-3"></div>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {profileData.map((profile, index) => (
            <ProfileCard key={index} profile={profile} />
          ))}
        </div>
      </div>
      <div className="mt-12">
        <Footer />
      </div>
    </main>
  );
}
