"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import ProfileCard from "@/components/ProfileCard";

const profileData = [
  { name: "Professor Farid Uddin Ahmed ", title: "Vice Chancellor, SUST", role: "CHIEF PATRON", imageUrl: "/teacher/vc.jpg" },
  
  { name: "Prof. Dr. Md. Reza Selim ", title: "Dean, School of Applied Sciences and Technology, SUST", role: "CONFERENCE CHAIR", imageUrl: "/teacher/selim.jpeg" },
 
  { name: "Prof. Dr. Muhammad Muhsin Aziz Khan", title: "Professor, IPE SUST", role: "CONFERENCE TREASURER", imageUrl: "/teacher/Aziz Khan.png" },
  
  { name: " Prof. Dr. Md. Tamez Uddin", title: "Professor & Head, CEP SUST", role: "CONFERENCE SECRETARY", imageUrl: "/teacher/Tammiz Uddin.png" },
  
  { name: "Prof. Dr. Md. Forhad Rabbi", title: "Professor, CSE SUST", role: "JOINT SECRETARIE", imageUrl: "/teacher/Farhad Rabbi.png" },
  { name: "Prof. Dr. Md. Rezaul Hasan Shumon", title: "Professor, IPE SUST", role: "JOINT SECRETARIE", imageUrl: "/teacher/shumon.png" },
  { name: "Prof. Dr. H.M.A Mahzuz", title: "Professor, CEE SUST", role: "JOINT SECRETARIE", imageUrl: "/teacher/mahzuz.jpg" },
 //member 

  { name: "Jahirul Islam",                      title: "Director, IICT SUST", role: "MEMBER", imageUrl: "/teacher/jahirul.jpg" },
  { name: "Prof. Dr. Muhammad Mahamood Hasan ", title: "Professor & Head, IPE SUST.", role: "MEMBER", imageUrl: "/teacher/mahamood.jpg" },
  { name: "Prof. Dr. Md. Tamez Uddin",          title: "Professor & Head, CEP SUST", role: "MEMBER", imageUrl: "/teacher/Tammiz Uddin.png" },
  { name: "Prof. Dr. Mohammad Shahidur Rahman", title: "Professor, CEE SUST", role: "MEMBER", imageUrl: "/teacher/shahidur.jpg" },
  { name: "Prof. Dr. Muhammad Farhad Howladar", title: "Professor, PME SUST", role: "MEMBER", imageUrl: "/teacher/farhad.jpg" },
  { name: "Prof. Dr. Wahiduzzaman",             title: "Professor & Head, FET SUST", role: "MEMBER", imageUrl: "/teacher/wahid.jpg" },
  { name: "Prof. Dr. Md. Masum",                title: "Professor & Head, CSE SUST", role: "MEMBER", imageUrl: "/teacher/masum.jpg" },
  { name: "Prof. Dr. Ar. Iftekhar Rahman",      title: "Associate Professor & Head, ARC SUST", role: "MEMBER", imageUrl: "/teacher/ifti.jpg" },
  { name: "Mr. Md. Mahmud-Or-Rashid",          title: "Assistant Professor & Head, MEE SUST", role: "MEMBER", imageUrl: "/teacher/rashid.jpg" },
  { name: " Mr. Abdur Rouf",                      title: "Principal, SEC", role: "MEMBER", imageUrl: "/teacher/" },
  
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