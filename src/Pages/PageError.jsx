import React from 'react';
import notFoundImg from '../assets/error-404.png'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const PageError = () => {
    return (
        
  <div>
  <Navbar></Navbar>
          <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-50 text-center px-4">
      <img
        src={notFoundImg}
        alt="404 Not Found"
        className="max-w-full h-auto mb-6"/>
      <h1 className="text-4xl font-bold mb-2">Oops, page not found!</h1>
      <p className="text-gray-500 mb-6">
        The page you are looking for is not available.
      </p>
      <button
        onClick={() => window.history.back()}
        className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg transition-all"
      >
        Go Back!
      </button>
    </div>
    <Footer></Footer>
  </div>
    );
};

export default PageError;