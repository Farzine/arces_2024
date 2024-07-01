"use client";

import Footer from "@/components/Footer";
import ImportantDateCard from "@/components/ImportantDateAddCard";
import Navbar from "@/components/NavBar";
import NoticeCard from "@/components/NoticeAddCard";

export default function Authors() {
    return (
      <div>
        <Navbar/>
        <NoticeCard/>
        <ImportantDateCard/>
        <Footer/>
      </div>
    );
  }
  