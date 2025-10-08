import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa6";



const Installation3 = ({ downloadedApp }) => {
  const { image, companyName, downloads, ratingAvg, size } = downloadedApp;

  return (
<div>
        <div className="px-20 py-3">
      <div className="flex justify-between items-center w-full bg-white p-4 rounded-2xl">
    


        <div className="flex items-center gap-4">
          <div>
            <img
              className="h-[100px] w-[100px] rounded-2xl p-5 bg-[#d9d9d9]"
              src={image}
              alt={companyName}/>
          </div>

          <div className="flex flex-col justify-center">
            <h5 className="text-[20px]">{companyName}</h5>
            <div className="flex gap-4 pt-3">
              <p className="flex items-center gap-1 text-[#03d390]"><MdOutlineFileDownload />{downloads}</p>
              <p className="flex items-center gap-1 text-[#ff8813]"><FaStar />{ratingAvg}</p>
              <p className="text-[#637382]">{size} MB</p>
            </div>
          </div>
        </div>

      

        <div>
          <button className="btn bg-[#03d390] text-white">Uninstall</button>
        </div>
      </div>
    </div>
</div>
  );
};

export default Installation3;
