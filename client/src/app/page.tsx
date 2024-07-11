"use client";
import ConferenceDateView from "@/components/ConferenceDateView";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import ImportantUpdates from "@/components/ImportantUpdateFrontendView";
import Navbar from "@/components/NavBar";
import OrganizedBy from "@/components/OrganizedBy";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Sponsors from "@/components/Sponsors";

export default function Home() {
  return (
    <main className="h-screen bg-white">
     <div className="bg-white">
     <Navbar />
      <Herosection />
      <div className="pb-100">
        <ImportantUpdates />
        <div className="bg-white">
          <div className="bg-white p-6 border-2 m-10 rounded-lg">
            <h1 className="text-3xl font-bold mb-4">“Message”</h1>
            <div className="flex items-center mb-4">
              <img
                src="/logoNavBar.png"
                alt="Md Farhad Rabbi"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <p className="text-xl font-semibold">Md Farhad Rabbi</p>
                <p className="text-sm text-gray-500">Conference Chair, 2025</p>
              </div>
            </div>
            <blockquote className="italic border-l-4 pl-4">
              <p className="mb-4">
              The International Conference on Advanced Research in Computer,
                Electrical, and Software Engineering (ARCES) is a prestigious platform
                for research in computer, software, and electrical engineering. The key
                aspect of ARCES is its encouragement of the necessary interaction between
                scientists, researchers, engineers, corporate executives, and academic
                students to bridge the gap between government, business,<br /> <br />
                
                 and academia.To develop this motivation, eminent scholars in pertinent domains provide
                keynote addresses, tutorials, workshops, exhibitions, and oral
                presentations. Academic researchers will disclose the results and findings
                of laboratory-based investigations at this conference. To inform academia
                about recent developments and useful findings, industry professionals
                illustrate cutting-edge research in 4IR technologies. For discussions of
                recent developments in contemporary computing <br /> <br />
                
                intelligence, the ARCES platform will also address regional and global challenges in the
                aforementioned fields.
              </p>
            </blockquote>
          </div>
        </div>

        <ConferenceDateView />
        <OrganizedBy />
        <Sponsors />
      </div>
      <ScrollToTopButton />
      <Footer />
     </div>
    </main>
  );
}
