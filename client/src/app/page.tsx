"use client";
import Footer from "@/components/Footer";
import ImportantDates from "@/components/FrontendImportantDateComponent";
import FrontendNoticeCard from "@/components/FrontendNoticeCard";
import ProfileCard from "@/components/Member";
import Navbar from "@/components/NavBar";


export default function Home() {
  return (
    <main className="h-screen">
     <Navbar />
      <h1 className="text-3xl font-semibold">Home Page</h1>
      <ProfileCard />
      <div className="mb-10">
        <FrontendNoticeCard />
      </div>
      <div className=" mb-10">
        <ImportantDates />
      </div>
      <div>

      <Footer />
      </div>
    </main>
  );
}
