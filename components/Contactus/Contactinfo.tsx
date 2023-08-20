import React from 'react';

const Contactinfo = () => {
  return (
    <div className="grid grid-cols-1 px-10 sm:px-20 lg:px-36 mb:px-10 pb-7 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">Adress</h3>
        <p className="text-gray-600">
          123 Main Street
          <br />
          City, State ZIP
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">Telefonnummer</h3>
        <p className="text-gray-600">123-456-7890</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">E-postadress</h3>
        <p className="text-gray-600">info@example.com</p>
      </div>
    </div>
  );
};

export default Contactinfo;
