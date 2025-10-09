import React, { useState } from "react";
import useProducts from "../Hooks/useProducts";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  const { apps } = useProducts();
  const [search, setSearch] = useState('');
  const term = search.trim().toLocaleLowerCase();
  const searchProducts = term
    ? apps.filter((app) => 
    app.companyName.toLocaleLowerCase().includes(term))
    : apps; 


  return (
    <div>
      <div className="justify-center text-center pt-20">
        <h2 className="text-4xl font-semibold">Our All Applications</h2>
        <p className="text-[#637382] pt-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex justify-between items-center px-20">
        <div>
          <h3 className="text-[25px] font-semibold">
            <span>({searchProducts.length})</span> Apps Found
          </h3>
        </div>
        <div>
          <label className="input w-[350px]">
            <svg
              className="h-[1em] opacity-50"
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
            />
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-20 py-10">
        {searchProducts.map((app) => (
          <ProductCard key={app.id} app={app}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
