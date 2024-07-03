"use client";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="h-screen">
      <Navbar />
      <Herosection />
      <div className=" w-auto h-full bg-black">
        </div>

      <Footer />
    </main>
  );
}
