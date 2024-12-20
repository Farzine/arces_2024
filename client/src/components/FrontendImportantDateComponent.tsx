// components/ImportantDates.tsx

import React, { useEffect, useState } from "react";

// Define the types for the date data
interface ImportantDate {
  id: string;
  title: string;
  description: string;
  date: string;
  show: unknown;
}

const ImportantDates: React.FC = () => {
  const [dates, setDates] = useState<ImportantDate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch the important dates from the backend API
  useEffect(() => {
    const fetchImportantDates = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_APP_BACKEND_URL}/important-dates`
        );
        if (response.ok) {
          const data = await response.json();
          setDates(data);
        } else {
          console.error("Failed to fetch important dates");
          setError("Error fetching important dates");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchImportantDates();
  }, []);

  return (
    <div className=" w-full md:w-[330px]  px-auto border my-10 h-auto md:h-[400px]   p-4 bg-white rounded-lg md:shadow-xl">
      <div className="flex items-center  mb-4">
        <h2 className="md:text-4xl  text-3xl font-semibold mr-2">
          Important Dates
        </h2>
        <svg
          className="ml-5 md:w-16 md:h-16 w-14 h-14 "
          viewBox="0 0 40 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xlinkHref="http://www.w3.org/1999/xlink"
        >
          <rect width="25" height="25" fill="url(#pattern0_696_823)" />
          <defs>
            <pattern
              id="pattern0_696_823"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_696_823"
                transform="matrix(0.00859375 0 0 0.0078125 -0.05 0)"
              />
            </pattern>
            <image
              id="image0_696_823"
              width="128"
              height="128"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      </div>
      <ul className="overflow-y-scroll no-scrollbar w-full md:w-[300px] text-wrap h-[320px]">
        {dates
          .filter((dates) => dates.show)
          .map((date) => (
            <li key={date.id} className="flex items-start mb-4">
              <svg
                className="md:w-12 md:h-12 w-10 h-10"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xlinkHref="http://www.w3.org/1999/xlink"
              >
                <path d="M0 0H30V30H0V0Z" fill="url(#pattern0_735_467)" />
                <defs>
                  <pattern
                    id="pattern0_735_467"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_735_467"
                      transform="scale(0.0078125)"
                    />
                  </pattern>
                  <image
                    id="image0_735_467"
                    width="128"
                    height="128"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>

              <div className="group cursor-pointer text-wrap w-full max-w-[340px] hover:bg-slate-200 ml-5">
                <p className="md:text-2xl w-full text-xl group-hover:bg-slate-200 text-gray-600">
                  {date.description}
                </p>
                <p className="md:text-xl w-full  text-lg font-semibold group-hover:bg-slate-200 text-red-500">
                  {new Date(date.date).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </li>
          ))}
        {isLoading && (
          <div
            role="status"
            className="max-w-sm px-5 w-full h-full animate-pulse"
          >
            <div className="h-2.5  my-8 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 my-8 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
            <div className="h-2 my-8 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div className="h-2 my-8 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
            <div className="h-2 my-8 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[180px] mb-2.5"></div>
            <div className="h-2 my-8 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            <div className="h-2 my-8 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[140px] mb-2.5"></div>
            <div className="h-2 my-8 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[200px] mb-2.5"></div>
            <div className="h-2 my-8 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </ul>
    </div>
  );
};

export default ImportantDates;
