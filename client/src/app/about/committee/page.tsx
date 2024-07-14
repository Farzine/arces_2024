"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import ProfileCard from "@/components/ProfileCard";

const profileData = [
  { name: "Professor Farid Uddin Ahmed ", title: "Vice Chancellor, SUST", role: "CHIEF PATRON", imageUrl: "https://res.cloudinary.com/djmgdgx86/image/upload/v1719695813/samples/upscale-face-1.jpg" },
  
  { name: "Prof. Dr. Md. Reza Selim ", title: "Chair", role: "ORGANISING COMMITTEE", imageUrl: "https://res.cloudinary.com/djmgdgx86/image/upload/v1719695813/samples/upscale-face-1.jpg" },
 
  { name: "Prof. Dr. Muhammad Muhsin Aziz Khan", title: "IPE, SUST", role: "TREASURER", imageUrl: "https://res.cloudinary.com/djmgdgx86/image/upload/v1719695813/samples/upscale-face-1.jpg" },
  
  { name: " Prof. Dr. Md. Tamez Uddin", title: " CEP,SUST", role: "CONFERENCE SECRETARY", imageUrl: "https://res.cloudinary.com/djmgdgx86/image/upload/v1719695813/samples/upscale-face-1.jpg" },
  
  { name: "Prof. Dr. Md. Forhad Rabbi", title: "CSE, SUST", role: "JOINT SECRETARIES", imageUrl: "https://res.cloudinary.com/djmgdgx86/image/upload/v1719695813/samples/upscale-face-1.jpg" },
  { name: "Prof. Dr. Md. Rezaul Hasan Shumon", title: "IPE, SUST", role: "JOINT SECRETARIES", imageUrl: "https://res.cloudinary.com/djmgdgx86/image/upload/v1719695813/samples/upscale-face-1.jpg" },
  { name: "Prof. Dr. H.M.A Mahzuz", title: "CEE, SUST", role: "JOINT SECRETARIES", imageUrl: "https://res.cloudinary.com/djmgdgx86/image/upload/v1719695813/samples/upscale-face-1.jpg" },
 //member 

  { name: "Jahirul Islam",                      title: "Director, IICT, SUST", role: "MEMBERS", imageUrl: "https://res.cloudinary.com/djmgdgx86/image/upload/v1719695813/samples/upscale-face-1.jpg" },
  { name: "Prof. Dr. Muhammad Mahamood Hasan ", title: "IPE, SUST.", role: "MEMBERS", imageUrl: "https://res.cloudinary.com/djmgdgx86/image/upload/v1719695813/samples/upscale-face-1.jpg" },
  { name: "Prof. Dr. Md. Tamez Uddin",          title: "CEP, SUST", role: "MEMBERS", imageUrl: "https://res.cloudinary.com/djmgdgx86/image/upload/v1719695813/samples/upscale-face-1.jpg" },
  { name: "Prof. Dr. Mohammad Shahidur Rahman",                      title: "CEE, SUST", role: "MEMBERS", imageUrl: "https://res.cloudinary.com/djmgdgx86/image/upload/v1719695813/samples/upscale-face-1.jpg" },
  { name: "Prof. Dr. Muhammad Farhad Howladar", title: "PME, SUST", role: "MEMBERS", imageUrl: "https://res.cloudinary.com/djmgdgx86/image/upload/v1719695813/samples/upscale-face-1.jpg" },
  { name: "Prof. Dr. Wahiduzzaman",          title: "FET, SUST", role: "MEMBERS", imageUrl: "https://res.cloudinary.com/djmgdgx86/image/upload/v1719695813/samples/upscale-face-1.jpg" },
  { name: "Prof. Dr. Md. Masum",                      title: "CSE, SUST", role: "MEMBERS", imageUrl: "https://res.cloudinary.com/djmgdgx86/image/upload/v1719695813/samples/upscale-face-1.jpg" },
  { name: "Prof. Dr. Ar. Iftekhar Rahman", title: "ARC, SUST", role: "MEMBERS", imageUrl: "https://res.cloudinary.com/djmgdgx86/image/upload/v1719695813/samples/upscale-face-1.jpg" },
  { name: "Mr. Md. Mahmud-Or-Rashid",          title: "MEE, SUST", role: "MEMBERS", imageUrl: "https://res.cloudinary.com/djmgdgx86/image/upload/v1719695813/samples/upscale-face-1.jpg" },
  { name: " Mr. Abdur Rouf",                      title: "Principal, SEC", role: "MEMBERS", imageUrl: "https://res.cloudinary.com/djmgdgx86/image/upload/v1719695813/samples/upscale-face-1.jpg" },
  
];

export default function Committees() {
  return (
    <main className="Committees-screen flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="mt-24 flex-grow container mx-auto px-4 ">
        <h1 className="text-4xl font-bold text-center my-8">
          Organizing Committee
          <div className="border-b-2 border-black w-1/2 mx-auto mt-3"></div>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-20">
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