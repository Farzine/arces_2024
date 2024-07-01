import React from 'react';

const Footer: React.FC = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('mailto:arces@sust.edu');
    alert('Email link copied to clipboard!');
  };

  return (
    <footer className="bg-gray-200 p-4 fixed bottom-0 w-full flex justify-between items-center">
      <div className="flex flex-col items-center">
        <span>
          Contact: 
          <a href="mailto:arces@sust.edu" className="text-blue-600 ml-1">arces@sust.edu</a>
          <button 
            className="ml-2 bg-blue-600 text-white px-2 py-1 rounded"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </span>
      </div>
      <button 
        className="bg-blue-600 text-white rounded-full w-8 h-8 flex justify-center items-center" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;