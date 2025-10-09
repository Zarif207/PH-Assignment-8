import React from 'react';
import { LuDownload } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
const AllApp2 = ({ allSingleApp }) => {
  const {companyName, downloads, ratingAvg,image} = allSingleApp;

  return (
    <div>
      <div className="card bg-base-100 w-85 shadow-sm hover:shadow-lg transition">
        <figure className="p-4">
          <img
            className="h-[316px] w-[316px] rounded-2xl p-5"
            src={image}
            alt={companyName}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center pb-3 text-center">
            {companyName}
          </h2>
          <div className="card-actions justify-between">
            <button className="btn text-[#03d390] flex items-center gap-2">
              <LuDownload />
              {downloads}
            </button>
            <button className="btn bg-[#fff0e1] text-[#ff8813] flex items-center gap-2">
              <FaStar />
              {ratingAvg}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllApp2;