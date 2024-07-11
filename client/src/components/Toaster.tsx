import React from 'react';

interface ToasterProps {
  type: 'success' | 'error';
  message: string;
}

const Toaster: React.FC<ToasterProps> = ({ type, message }) => {
  return (
    <div className={`bg-${type === 'success' ? 'green' : 'red'}-100 border border-${type === 'success' ? 'green' : 'red'}-400 text-${type === 'success' ? 'green' : 'red'}-700 px-4 py-3 rounded relative mb-4`} role="alert">
      <strong className="font-bold">{type === 'success' ? 'Success!' : 'Error!'}</strong>
      <span className="block sm:inline"> {message}</span>
    </div>
  );
};

export default Toaster;
