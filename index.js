import React from 'react';
import Layout from '../components/Layout';

const HomePage = () => {
  return (

  <Layout>
    <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to House Rental Platform</h1>
        <p className="text-gray-600 mb-8">Find your dream home or tenant with ease.</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            List Your Property
          </button>
         <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
         Find a Property
          </button>
        </div>
     </div>
  </Layout>
  );
};

export default HomePage;