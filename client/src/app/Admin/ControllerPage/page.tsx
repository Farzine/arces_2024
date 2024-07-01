"use client";

import IndustryTrack from "@/components/IndustryTrackAddCard";
import Footer from "@/components/Footer";
import ImportantDateCard from "@/components/ImportantDateAddCard";
import Navbar from "@/components/NavBar";
import NoticeCard from "@/components/NoticeAddCard";
import ResearchTrack from "@/components/ResearchTrackAddCard";

export default function Authors() {
    return (
      <div>
        <Navbar/>
        <NoticeCard/>
        <ImportantDateCard/>
        <IndustryTrack/>
        <ResearchTrack/>
        <Footer/>
        
      </div>
    );
  }
  