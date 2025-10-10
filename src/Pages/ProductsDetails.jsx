import React from "react";
import { useParams } from "react-router";
import useProducts from "../Hooks/useProducts";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import downloadImg from '../assets/icon-downloads.png'
import ratingImg from '../assets/icon-ratings.png'
import reviewsImg from '../assets/icon-review.png'


const ProductsDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useProducts();
  const app = apps.find((p) => String(p.id) === id);

  if (loading || !app) {
    return <p className="text-center py-10 text-gray-500">Loading...</p>;
  }

  const { image, companyName, downloads, ratingAvg, description, size, ratings, develop, reviews } = app || {};

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



{/* try */}



<div className="min-h-screen w-full bg-gray-50 flex justify-center">
  <div className="w-full max-w-full bg-white shadow-md rounded-xl p-10">
    {/* Header Section */}
    <div className="flex flex-col md:flex-row justify-start items-start gap-10 border-b border-[#c4c9ce] pb-10">
      {/* Image */}
      <img
        className="h-[350px] w-[350px] rounded-2xl bg-[#d9d9d9] p-4 object-contain"
        src={image}
        alt={companyName}
      />

      {/* Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold">{companyName}</h1>
          <p className="text-gray-500 text-lg mt-1 border-b border-[#c4c9ce] pb-5">
            <span className="text-blue-600 font-medium">{develop}</span>
          </p>



          <div className="flex flex-wrap gap-15 mt-4 text-sm pb-10">
            <div className="flex flex-col items-center gap-1">
              <img className="h-[30px] w-[30px]" src={downloadImg}/>
              <p>Downloads</p>
              <p className="text-2xl font-bold">{downloads}</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img className="h-[30px] w-[30px]" src={ratingImg}/>
              <p>Average Ratings</p>
              <p className="text-2xl font-bold">{ratingAvg}</p>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img className="h-[30px] w-[30px]" src={reviewsImg}/> 
              <p>Total Reviews</p>
              <p className="text-2xl font-bold">{reviews}</p>
            </div>
            
           
          </div>
        </div>






     <div>
           <button
          onClick={handleAddToInstallation}
          className="mt-6 md:mt-auto btn bg-[#03d390] hover:bg-[#05b47d] text-white px-8 py-3 rounded-lg text-lg font-medium"
        >
          <span>Install Now</span>
          <p className="text-white">({size} MB)</p>
        </button>
     </div>

      </div>
    </div>

    {/* Ratings Info Section */}
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Ratings</h2>
      <div className="space-y-3 border-b border-[#c4c9ce] pb-15">
        {ratings?.slice().reverse().map((rating, index) => {
          const totalReviews = ratings.reduce((sum, r) => sum + r.count, 0);
          const percentage = totalReviews > 0 ? (rating.count / totalReviews) * 100 : 0;
          const starNumber = 5 - index;

          return (
            <div key={rating.name} className="flex items-center gap-3">
              <div className="w-28 text-sm text-gray-700 flex items-center gap-1">
                <span>{starNumber}</span>
                <span>⭐</span>
                <span className="text-gray-500">({rating.count})</span>
              </div>
              <div className="flex-1 h-4 bg-gray-200 rounded-lg overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    starNumber === 5 ? 'bg-orange-500' :
                    starNumber === 4 ? 'bg-orange-400' :
                    starNumber === 3 ? 'bg-orange-300' :
                    starNumber === 2 ? 'bg-orange-200' : 'bg-orange-200'
                  }`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <div className="w-14 text-sm text-gray-600">{percentage.toFixed(0)}%</div>
            </div>
          );
        })}
      </div>
    </div>

    {/* Description Section */}
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Description</h2>
      <p className="text-gray-700 leading-relaxed text-justify text-lg">
        {description ||
          "This app provides tools to enhance your productivity and focus. Stay organized and motivated with features like reminders, task tracking, and progress insights."}
      </p>
    </div>
  </div>
</div>







      
    </>
  );
};

export default ProductsDetails;
