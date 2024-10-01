import React from 'react';

import { Link } from 'react-router-dom/dist';

function Landing() {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 flex justify-center items-center h-screen overflow-hidden relative">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white to-transparent rounded-full blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-0 w-40 h-40 bg-gradient-to-tl from-white to-transparent rounded-full blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
        
        <div className="z-10 text-center space-y-8">
          {/* Heading */}
          <h1 className="text-white text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight drop-shadow-lg">
            Welcome to <span className="text-yellow-400">Drip</span>
          </h1>

          {/* Subheading */}
          <p className="text-white text-lg sm:text-m font-medium max-w-lg mx-auto drop-shadow-md">
            Discover the best shopping experience, curated just for you!
          </p>
<br></br>
         <Link to='/loginpage'>
         <button className="text-white px-6 sm:px-6 py-2 sm:py-3 bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 rounded-full text-lg sm:text-xl font-semibold transition duration-300 ease-in-out transform hover:scale-105">
            Get started
          </button>
         </Link>
         
        </div>
      </div>
    </>
  );
}

export default Landing;
