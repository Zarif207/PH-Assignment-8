import React from "react";
import logo from "../assets/logo.png";

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#f5f5f5]">
      <img
        src={logo}
        alt="Loading..."
        className="h-24 w-24 mb-6 animate-spin"
        style={{ animationDuration: "0.5s" }}
      />

      <h1 className="text-4xl font-bold text-gray-700 tracking-wide">
        Loading<span className="animate-pulse">...</span>
      </h1>
    </div>
  );
};

export default LoadingSpinner;
