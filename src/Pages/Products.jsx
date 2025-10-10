import React, { useState, useEffect } from "react";
import useProducts from "../Hooks/useProducts";
import ProductCard from "../Components/ProductCard";
import LoadingSpinner from "../Components/LoadingSpinner";
import errorimage from "../assets/App-Error.png";

const Products = () => {
  const { apps, loading: initialLoading } = useProducts();
  const [search, setSearch] = useState("");
  const [displayApps, setDisplayApps] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [resetting, setResetting] = useState(false);

  const term = search.trim().toLowerCase();

  useEffect(() => {
    setSearchLoading(true);
    const timer = setTimeout(() => {
      const filtered = term
        ? apps.filter((app) => app.companyName.toLowerCase().includes(term))
        : apps;
      setDisplayApps(filtered);
      setSearchLoading(false);
      setResetting(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [search, apps, term]);

  if (initialLoading) return <LoadingSpinner />;

  return (
    <div className="bg-[#f5f5f5] relative min-h-screen">
      {(searchLoading || resetting) && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#f5f5f5] z-10">
          <LoadingSpinner />
        </div>
      )}

      <div className="justify-center text-center pt-20 relative z-20">
        <h2 className="text-4xl font-semibold">Our All Applications</h2>
        <p className="text-[#637382] pt-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between items-center px-20 mt-8 relative z-20">
        <div>
          <h3 className="text-[25px] font-semibold">
            <span>({displayApps.length})</span> Apps Found
          </h3>
        </div>
        <div>
          <label className="input w-[350px] flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <svg
              className="h-[1em] opacity-50 ml-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search Apps"
              className="flex-1 p-2 focus:outline-none"
            />
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-20 py-10 relative z-20">
        {displayApps.length > 0 ? (
          displayApps.map((app) => <ProductCard key={app.id} app={app} />)
        ) : !resetting && !searchLoading ? (
          <div className="col-span-full flex flex-col items-center justify-center py-20 min-h-[60vh]">
            <div className="w-72 h-72 bg-gray-200 rounded-full mb-6 flex items-center justify-center">
              <img src={errorimage} />
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
              OPPS!! APP NOT FOUND
            </h1>

            <p className="text-gray-600 mb-8 text-center max-w-md">
              The App you are requesting is not found on our system. please try
              another apps
            </p>

            <button
              onClick={() => {
                setResetting(true);
                setSearch("");
              }}
              className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)] text-white font-medium px-8 py-3 rounded-lg transition-all"
            >
              All Apps
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Products;
