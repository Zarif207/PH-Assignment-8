import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import LoadingSpinner from "../Components/LoadingSpinner";
import toast, { Toaster } from "react-hot-toast"; 

const Installation = () => {
  const [install, setInstall] = useState([]);
  const [sortDownloads, setSortDownloads] = useState("none");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const savedList = JSON.parse(localStorage.getItem("installation")) || [];
      setInstall(savedList);
      setLoading(false);
    }, 500);
  }, []);

  const parseDownloads = (val) => {
    if (typeof val === "string") {
      if (val.includes("M")) return parseFloat(val) * 1_000_000;
      if (val.includes("K")) return parseFloat(val) * 1_000;
    }
    return Number(val);
  };

  const sortedItem = () => {
    if (sortDownloads === "download-asc") {
      return [...install].sort(
        (a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads)
      );
    } else if (sortDownloads === "download-dsc") {
      return [...install].sort(
        (a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads)
      );
    } else {
      return install;
    }
  };

  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem("installation")) || [];
    const updateList = existingList.filter((p) => p.id !== id);
    setInstall(updateList);
    localStorage.setItem("installation", JSON.stringify(updateList));

    
    toast.success("App uninstalled from your Device");
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="bg-[#f5f5f5] min-h-screen pb-20 relative">

      <Toaster position="top-center" reverseOrder={false} />

      <div className="text-center pt-20">
        <h2 className="text-4xl font-semibold">Your Installed Apps</h2>
        <p className="text-[#637382] pt-3">
          Explore all trending apps on the market developed by us
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center px-10 md:px-20 mt-10 gap-4">
        <h3 className="text-[22px] font-semibold">
          <span>({install.length})</span> Apps Found
        </h3>

        <select
          className="input border border-gray-300 rounded-lg p-2 w-[250px] focus:outline-none"
          value={sortDownloads}
          onChange={(e) => setSortDownloads(e.target.value)}
        >
          <option value="none">Sort By Downloads</option>
          <option value="download-asc">Low → High</option>
          <option value="download-dsc">High → Low</option>
        </select>
      </div>

      <div className="mt-8 space-y-4 px-6 md:px-20">
        {sortedItem().map((p) => (
          <div
            key={p.id}
            className="bg-white flex flex-col md:flex-row justify-between items-center p-5 rounded-2xl shadow-sm"
          >
            <div className="flex items-center gap-5">
              <img
                className="h-[100px] w-[100px] rounded-2xl p-5 bg-[#d9d9d9] object-contain"
                src={p.image}
                alt={p.companyName}
              />

              <div>
                <h5 className="text-[20px] font-medium">{p.companyName}</h5>
                <div className="flex flex-wrap gap-5 pt-3 text-sm">
                  <p className="flex items-center gap-1 text-[#03d390]">
                    <MdOutlineFileDownload size={16} />
                    {p.downloads}
                  </p>
                  <p className="flex items-center gap-1 text-[#ff8813]">
                    <FaStar size={14} />
                    {p.ratingAvg}
                  </p>
                  <p className="text-[#637382]">{p.size} MB</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleRemove(p.id)}
              className="btn bg-[#03d390] hover:bg-[#05b47d] text-white px-5 py-2 rounded-lg font-medium mt-4 md:mt-0"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;