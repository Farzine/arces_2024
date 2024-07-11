import { SetStateAction, useEffect, useState } from "react";

export default function Herosection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: "/1.jpg",
      text: "8th International Conference on Engineering Research, Innovation and Education (ICERIE 2025)",
    },
    {
      src: "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1719964800&semt=ais_user",
      text: "",
    },
    {
      src: "/slide.jpg",
      text: "Slide 3 Text",
    },
    {
      src: "/slide.jpg",
      text: "Slide 4 Text",
    },
    {
      src: "/slide.jpg",
      text: "Slide 5 Text",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden  md:h-96">
          {images.map((image, index) => (
            <div
              key={index}
              className={`ease-in-out ${index === currentIndex ? "" : "hidden"
                }`}
              data-carousel-item
            >
              <img
                src={image.src}
                className="absolute block w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>

        {/* Fixed text overlay */}
        <div className="absolute inset-0 flex items-crnter justify-center text-white  font-bold font-mono bg-black/55 p-4">
          <div  className="flex">
            <div className="flex items-center ml-28">
              <img src="/logoNavBar.png" alt="logo" className="w-36 h-36" />
            </div>
            <div className="flex items-center">
              <div>
                <div className="text-3xl">
                  <h1>8th International Conference on <br />Engineering Research, Innovation and Education <br />(ICERIE 2025)</h1>
                </div>

                <div className="flex">
                <div className="bg-orange-600 w-1/4 flex justify-center text-1xl">
                  <p >January 09-11, 2025</p>
                </div>
                <div className="ml-3 text-1xl">
                  <p>Sylhet, Bangladesh</p>
                </div>
              </div>
              </div>
              
            </div>

          </div>

        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${index === currentIndex
                ? "bg-blue-500" // Change this to your active indicator style
                : "bg-gray-300" // Change this to your inactive indicator style
                }`}
              aria-current={index === currentIndex}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={goToPrevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={goToNextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  );
}
