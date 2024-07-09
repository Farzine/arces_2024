"use client"
import Footer from "@/components/Footer";
import ImportantDates from "@/components/FrontendImportantDateComponent";
import FrontendNoticeCard from "@/components/FrontendNoticeCard";
import Navbar from "@/components/NavBar";
import ResearchTrackFontend from "@/components/ResearchTrackFontend";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import TrackCard from '@/components/Trackcardfontend';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0  z-50">
        <Navbar />
      </div>
      <div className="container mx-auto mt-11">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left side */}
          <div>
            <div className="flex justify-center">
              <h2 className="text-2xl font-semibold mt-11 mb-4">Latest Updates</h2>
            </div>
            <FrontendNoticeCard />
            <div className="mt-6">

              <ImportantDates />
            </div>
          </div>

          {/* Right side */}
          <div className="lg:col-span-2 mt-5">
            <div>
              <h1 className="text-3xl font-bold mb-4 mt-10 flex justify-center">RESEARCH TRACK</h1>
            </div>
            <div className="">
              <p className="text-justify mb-4 mt-11">
                2024 1st International Conference on Advance Research on Computing, Electronics and Software Engineering (ARCES 2024) will be held February 15-16, 2024 in Sylhet, Bangladesh. This conference will be sponsored by Springer. The conference will bring together the top researchers from Asian Pacific nations, North America, Europe and around the world to exchange their research results and address open issues in 4IR technologies like Deep Learning and Big Data; Intelligent System Architectures; Intelligent Web and Algorithm; Software Engineering and Service Science; Artificial Intelligence tools & Applications; Blockchain Technology and Systems as well as in Power Systems and Renewable Energy; Communications and Signal Processing; Electronic Circuits and Systems, etc. It will be one of the leading international conferences for presenting novel and fundamental advances in the fields of New Generation Artificial Intelligence, Internet of Things, Natural Language processing, System Model and Algorithm, Software Engineering and Blockchain Technology and Systems. All papers must be written in English and will be reviewed by technical committees of the Conference.
              </p>
              <p className="text-justify text-1xl mt-10">
                We are pleased to inform you that at ARCES 2024 we have renowned scholars from home and abroad at our advisory committee, technical program committee and organizing committee. We plan to invite renowned keynote speakers, invited speakers, resource personnel to ARCES 2024. We plan to publish all accepted and presented papers either at Springer Lecture Notes in Computer and Systems or as book chapters published by Taylor and Francis indexed by Scopus and/or other indexing services. The conference is soliciting state-of-the-art research papers in the following areas of interest (but not limited to):
              </p>
            </div>
          </div>

        </div>

        <ResearchTrackFontend />

        <ResearchTrackFontend />

      </div>
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}