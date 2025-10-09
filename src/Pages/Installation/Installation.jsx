import React from "react";
import { useLoaderData } from "react-router";
import Installation2 from "./Installation2";

const Installation = () => {
  const installData = useLoaderData();
  console.log(installData)

  return (
    <div className="bg-[#f5f5f5]">
      <div className="justify-center text-center pt-15">
        <h1 className="text-[40px] font-semibold p-2">Your Installed Apps</h1>
        <p className="text-[#919ca6]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between items-center px-20">
        <div>
          <h3 className="text-[25px] font-semibold">Apps Found</h3>
        </div>
        <div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search Apps" />
          </label>
        </div>
      </div>


      <Installation2 installData={installData}></Installation2>
    </div>
  );
};

export default Installation;
