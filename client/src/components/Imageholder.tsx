import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface ImageholderProps {
  src: string;
  desc: string;
  year: number;
}

const Imageholder: React.FC<ImageholderProps> = ({ src, desc, year }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <>
      <div
        className="relative inline-block m-2 w-40 h-40 f overflow-hidden cursor-pointer"
        onClick={toggleZoom}
      >
        <img
          src={src}
          alt=""
          className="w-full h-full object-cover transition-transform duration-300"
          style={{ filter: isZoomed ? "blur(4px)" : "none" }} // Apply blur effect when zoomed
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-80 transition-opacity duration-300 flex items-end p-2 text-white">
          <div>
            <p className="text-sm">{desc}</p>
            <p className="text-xs">{year}</p>
          </div>
        </div>
      </div>
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-75"
          onClick={toggleZoom}
        >
          <div className="relative max-w-4xl max-h-4xl w-full h-full overflow-hidden">
            <img
              src={src}
              alt=""
              className="w-full h-full object-contain"
              style={{ margin: "auto", maxWidth: "100%", maxHeight: "100%" }}
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={toggleZoom}
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Imageholder;
