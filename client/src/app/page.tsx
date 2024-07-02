"use client";
import Footer from "@/components/Footer";
import ProfileCard from "@/components/Member";
import Navbar from "@/components/NavBar";


export default function Home() {
  return (
    <main className="h-screen">
     <Navbar />
      <h1 className="text-3xl font-semibold">Home Page</h1>
      <ProfileCard />
      <Footer />
    </main>
  );
}
