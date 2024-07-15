"use client";

import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';
import OrganizedBy from '@/components/OrganizedBy';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import Image from 'next/image';

const Sponsors = () => {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <div className="flex-grow bg-white mx-auto flex flex-col items-center p-4 md:p-10">
        <div className='flex justify-center items-center mr-16'>
          <div className='pt-9 mr-4'>
            <Image
              src="/handshake.png"
              alt="handshake icon"
              width={50}
              height={50}
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mt-5">Sponsors</h1>
          </div>
        </div>

        <p className="text-center mt-4 text-lg mb-4">
          8th International Conference on Engineering Research, Innovation and Education <br />(ICERIE 2025)
        </p>

        <OrganizedBy />

        <div className="my-16 w-full max-w-4xl">
        <hr className="my-8 border-gray-300" />
          <Section
            title="Media Partner"
            images={[
              { src: "/icerieLogo.jpg", alt: "Media Partner 1" },
              { src: "/icerieLogo.jpg", alt: "Media Partner 2" },
              { src: "/icerieLogo.jpg", alt: "Media Partner 3" }
            ]}
          />
          <hr className="my-8 border-gray-300" />
          <Section
            title="Technical Partner"
            images={[
              { src: "/icerieLogo.jpg", alt: "Technical Partner 1" },
              { src: "/icerieLogo.jpg", alt: "Technical Partner 2" },
              { src: "/icerieLogo.jpg", alt: "Technical Partner 3" }
            ]}
          />
          <hr className="my-8 border-gray-300" />
          <Section
            title="Supported By"
            images={[
              { src: "/icerieLogo.jpg", alt: "Supported By 1" },
              { src: "/icerieLogo.jpg", alt: "Supported By 2" },
              { src: "/icerieLogo.jpg", alt: "Supported By 3" }
            ]}
          />
        </div>
      </div>
      <ScrollToTopButton />
      <Footer />
    </main>
  );
};

const Section = ({ title, images }: { title: string, images: { src: string, alt: string }[] }) => (
  <div className="mb-10">
    <h2 className="text-3xl font-bold text-center text-orange-600 mb-16">{title}</h2>
    <div className="flex justify-center items-center space-x-16">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          width={100}
          height={100}
        />
      ))}
    </div>
  </div>
);

export default Sponsors;
