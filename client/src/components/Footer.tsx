import React from 'react';
import { FaWhatsapp, FaFacebookF, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('arces@sust.edu');
    alert('Email copied to clipboard!');
  };
  
  return (
    <footer className="bg-gray-800 text-white p-4 md:flex md:justify-center gap-3 md:items-center">
      <div className="flex justify-center md:space-x-4 md:justify-start">
        <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="w-6 h-6  md:w-8 md:h-8" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="w-6 h-6  md:w-8 md:h-8" />
        </a>
        <a href="mailto:arces@sust.edu">
          <FaEnvelope className="w-6 h-6 md:w-8 md:h-8" />
        </a>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start mt-4 md:mt-0">
        <span className="text-xs md:text-sm">
          Copyright © 2024. All rights reserved |{' '}
          <button onClick={copyEmailToClipboard} className="ml-1 underline cursor-pointer">
            Contact: arces@sust.edu
          </button>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
