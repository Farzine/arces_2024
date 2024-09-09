"use client";
import ConferenceDateView from "@/components/ConferenceDateView";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import ImportantUpdates from "@/components/ImportantUpdateFrontendView";
import Navbar from "@/components/NavBar";
import OrganizedBy from "@/components/OrganizedBy";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Image from "next/image";
import Carousel from "@/js/index";
import ImportantDates from "@/components/FrontendImportantDateComponent";
import MessageCard from "@/components/MessageComponent";
import LatestUpdates from "@/components/LatestUpdates";


export default function Home() {
  return (
    <main className="bg-white">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <div className="mt-20">
        <Herosection />
      </div>
      <div className="mt-5">
        <ImportantUpdates />
      </div>

      <div className="px-4 py-6 lg:px-8">

        <div className="bg-white p-6 border-2 rounded-lg shadow-sm ml-20 mr-20 mt-10 mb-10">
          <h1 className="text-3xl font-bold mb-4">“Message”</h1>
          <div className="flex items-center mb-4">
            <Image
              src="/logoNavBar.png"
              alt="Md Farhad Rabbi"
              className="w-16 h-16 rounded-full mr-4"
              width={100} height={100}
            />
            <div>
              <p className="text-xl font-semibold">Md Farhad Rabbi</p>
              <p className="text-sm text-gray-500">Conference Chair, 2025</p>
            </div>
          </div>
          <blockquote className="italic text-justify border-l-4 border-blue-500 pl-4">
            <p className="mb-4">
              The International Conference on Advanced Research in Computer,
              Electrical, and Software Engineering (ARCES) is a prestigious platform
              for research in computer, software, and electrical engineering. The key
              aspect of ARCES is its encouragement of the necessary interaction between
              scientists, researchers, engineers, corporate executives, and academic
              students to bridge the gap between government, business, and academia. To
              develop this motivation, eminent scholars in pertinent domains provide
              keynote addresses, tutorials, workshops, exhibitions, and oral
              <br />
              <br />

              presentations. Academic researchers will disclose the results and findings
              of laboratory-based investigations at this conference. To inform academia
              <br />

              about recent developments and useful findings, industry professionals
              illustrate cutting-edge research in 4IR technologies. For discussions of

              <br />
              <br />
              recent developments in contemporary computing intelligence, the ARCES
              platform will also address regional and global challenges in the
              aforementioned fields.


            </p>
          </blockquote>
        </div>
        <div>
          <Carousel />
        </div>
      </div>
      <div className="mt-3">
        <ConferenceDateView />
      </div>

      <div className="mt-3">
        <LatestUpdates />
      </div>
      <div className="mt-28">
        <OrganizedBy />
      </div>
      <div className="mt-28">
        <ImportantDates />
      </div>
      <div className="mt-28">
        <MessageCard />
      </div>
      <ScrollToTopButton />
      <div>
        <Footer />
      </div>
    </main>
  );
}
