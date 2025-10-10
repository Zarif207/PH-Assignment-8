import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const Installation = () => {
  const [install, setInstall] = useState([]);
  const [sortDownloads, setSortDownloads] = useState('none');
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installation"));
    if (savedList) setInstall(savedList);
  }, []);
  return (
    <div>

      <div className="justify-center text-center pt-20">
        <h2 className="text-4xl font-semibold">Your Installed Apps</h2>
        <p className="text-[#637382] pt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between items-center px-20">
        <div>
          <h3 className="text-[25px] font-semibold">
            <span>({install.length})</span> Apps Found
          </h3>
        </div>
        <div>
         
            <select className="input w-[350px]" value={sortDownloads} onChange={e => setSortDownloads(e.target.value)}>
                <option value='none'>Sort By Size</option>
                <option value='download-asc'>Low-&gt;High</option>
                <option value='download-dsc'>High-&gt;Low</option>
            </select>
       
        </div>
      </div>

      {/* installed apps */}

      <div className="space-y-3">
        {install.map((p) => (
          <div>
            <div className="px-20 py-3">
              <div className="flex justify-between items-center w-full bg-white p-4 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div>
                    <img
                      className="h-[100px] w-[100px] rounded-2xl p-5 bg-[#d9d9d9]"
                      src={p.image}
                      alt={p.companyName}
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <h5 className="text-[20px]">{p.companyName}</h5>
                    <div className="flex gap-4 pt-3">
                      <p className="flex items-center gap-1 text-[#03d390]">
                        <MdOutlineFileDownload />
                        {p.downloads}
                      </p>
                      <p className="flex items-center gap-1 text-[#ff8813]">
                        <FaStar />
                        {p.ratingAvg}
                      </p>
                      <p className="text-[#637382]">{p.size} MB</p>
                    </div>
                  </div>
                </div>

                <div>
                  <button className="btn bg-[#03d390] text-white">
                    Uninstall
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
