import React from "react";
import { useParams } from "react-router";
import useProducts from "../Hooks/useProducts";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

const ProductsDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useProducts();
  const app = apps.find((p) => String(p.id) === id);

  if (loading || !app) {
    return <p className="text-center py-10 text-gray-500">Loading...</p>;
  }

  const { image, companyName, downloads, ratingAvg, description } = app || {};

  const handleAddToInstallation = () => {
    const existingList = JSON.parse(localStorage.getItem("installation"));
    let updateList = [];
    if (existingList) {
      const isDuplicate = existingList.some((p) => p.id === app.id);
      app.quantity = app.quantity + 1;
      if (isDuplicate) return alert("This App is already in installation");
      updateList = [...existingList, app]; 
    } else {
      updateList.push(app); 
    }
    localStorage.setItem("installation", JSON.stringify(updateList));
  };

  return (
    <>
      <div className="card bg-base-100 shadow-sm hover:shadow-lg transition">
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
          <p>{description}</p>
          <div className="card-actions justify-between">
            <button className="btn text-[#03d390] flex items-center gap-2">
              <LuDownload />
              {downloads}
            </button>
            <button className="btn bg-[#fff0e1] text-[#ff8813] flex items-center gap-2">
              <FaStar />
              {ratingAvg}
            </button>
            <button
              onClick={handleAddToInstallation}
              className="btn w-[100px] flex justify-center items-center"
            >
              Install
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsDetails;
