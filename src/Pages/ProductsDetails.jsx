import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useProducts from "../Hooks/useProducts";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import downloadImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import reviewsImg from "../assets/icon-review.png";
import LoadingSpinner from "../Components/LoadingSpinner";
import toast, { Toaster } from "react-hot-toast";
import errorimage from "../assets/App-Error.png";

const ProductsDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useProducts();
  const app = apps.find((p) => String(p.id) === id);

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const existingList = JSON.parse(localStorage.getItem("installation")) || [];
    const alreadyInstalled = existingList.some((p) => p.id === app?.id);
    setIsInstalled(alreadyInstalled);
  }, [app]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center py-20 min-h-screen">
        <div className="w-72 h-72 bg-gray-200 rounded-full mb-6 flex items-center justify-center">
          <img src={errorimage} alt="Not Found" />
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          OPPS!! APP NOT FOUND
        </h1>

        <p className="text-gray-600 mb-8 text-center max-w-md">
          The App you are requesting is not found on our system. Please try
          another app.
        </p>

        <button
          onClick={() => {
            window.location.href = "/"; 
          }}
          className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)] text-white font-medium px-8 py-3 rounded-lg transition-all"
        >
          Back
        </button>
      </div>
    );
  }

  const {
    image,
    companyName,
    downloads,
    ratingAvg,
    description,
    size,
    ratings,
    develop,
    reviews,
  } = app;

  const handleAddToInstallation = () => {
    const existingList = JSON.parse(localStorage.getItem("installation")) || [];

    if (existingList.some((p) => p.id === app.id)) {
      toast.error("This app is already installed!");
      setIsInstalled(true);
      return;
    }

    localStorage.setItem(
      "installation",
      JSON.stringify([...existingList, app])
    );
    toast.success("Yahoo!! App installed successfully!");
    setIsInstalled(true);
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex justify-center">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="w-full max-w-full bg-[#f5f5f5] shadow-md rounded-xl p-10">
        <div className="flex flex-col md:flex-row justify-start items-start gap-10 border-b border-[#c4c9ce] pb-10">
          <img
            className="h-[350px] w-[350px] rounded-2xl bg-[#d9d9d9] p-4 object-contain"
            src={image}
            alt={companyName}
          />

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold">{companyName}</h1>
              <p className="text-gray-500 text-lg mt-1 border-b border-[#c4c9ce] pb-5">
                <span className="text-blue-600 font-medium">{develop}</span>
              </p>

              <div className="flex flex-wrap gap-15 mt-4 text-sm pb-10">
                <div className="flex flex-col items-center gap-1">
                  <img className="h-[30px] w-[30px]" src={downloadImg} />
                  <p>Downloads</p>
                  <p className="text-2xl font-bold">{downloads}</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <img className="h-[30px] w-[30px]" src={ratingImg} />
                  <p>Average Ratings</p>
                  <p className="text-2xl font-bold">{ratingAvg}</p>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <img className="h-[30px] w-[30px]" src={reviewsImg} />
                  <p>Total Reviews</p>
                  <p className="text-2xl font-bold">{reviews}</p>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={handleAddToInstallation}
                disabled={isInstalled}
                className={`mt-6 md:mt-auto btn px-8 py-3 rounded-lg text-lg font-medium text-white ${
                  isInstalled
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#03d390] hover:bg-[#05b47d]"
                }`}
              >
                <span>{isInstalled ? "Installed" : "Install Now"}</span>
                <p className="text-white">({size} MB)</p>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Ratings</h2>
          <div className="space-y-3 border-b border-[#c4c9ce] pb-15">
            {ratings
              ?.slice()
              .reverse()
              .map((rating, index) => {
                const totalReviews = ratings.reduce(
                  (sum, r) => sum + r.count,
                  0
                );
                const percentage =
                  totalReviews > 0 ? (rating.count / totalReviews) * 100 : 0;
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
                          starNumber === 5
                            ? "bg-orange-500"
                            : starNumber === 4
                            ? "bg-orange-400"
                            : starNumber === 3
                            ? "bg-orange-300"
                            : starNumber === 2
                            ? "bg-orange-200"
                            : "bg-orange-200"
                        }`}
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div className="w-14 text-sm text-gray-600">
                      {percentage.toFixed(0)}%
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-gray-700 leading-relaxed text-justify text-lg">
            {description ||
              "This app provides tools to enhance your productivity and focus. Stay organized and motivated with features like reminders, task tracking, and progress insights."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
