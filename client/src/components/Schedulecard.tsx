import React from "react";

interface ScheduleCardProps {
  title: string;
  date: string;
  start_time: string;
  end_time: string;
  room: string;
  checkend: boolean;
  // Using Date object for time
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({
  title,
  date,
  room,
  start_time,
  end_time,
  checkend,
}) => {
  return (
    <div className="flex justify-center h-14 w-full my-3">
      {/* icon with tail */}
      {checkend ? (
      // SVG without tail
      <svg
       className="my-10 mx-2"
        width="40"
        height="40"
        viewBox="0 0 59 102"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="29.5" cy="28.5" rx="29.5" ry="28.5" fill="#D9D9D9" />
        <circle cx="29.5" cy="28.5" r="19.5" fill="#FF4105" />
      </svg>
    ) : (
      // SVG with tail
      <svg
        className="my-10 mx-2"
        width="40"
        height="70"
        viewBox="0 0 59 182"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="29" y1="44" x2="29" y2="182" stroke="#D9D9D9" strokeWidth="10" />
        <ellipse cx="29.5" cy="28.5" rx="29.5" ry="28.5" fill="#D9D9D9" />
        <circle cx="29.5" cy="28.5" r="19.5" fill="#FF4105" />
      </svg>
    )}

      <div className="inline-block flex w-5/6 h-12 my-5  bg-gray-200 items-center  ">
        <h2 className=" text-sm mx-auto px-auto font-inter font-semibold  border-black text-center w-1/4 break-words overflow-wrap ">
          {title}
        </h2>
        <p className="text-sm  mx-auto px-auto font-inter font-semibold border-black  text-center w-1/4 break-words overflow-wrap">
          {room}
        </p>
        <p className=" text-sm mx-auto px-auto font-inter font-semibold border-black text-center w-1/4 break-words overflow-wrap ">
          {" "}
          {date}
        </p>
        <p className=" text-sm mx-auto px-auto font-inter font-semibold text-center w-1/4 break-words overflow-wrap">
          {start_time}-{end_time}
        </p>
      </div>
    </div>
  );
};

export default ScheduleCard;
