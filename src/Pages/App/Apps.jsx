import React, { Suspense } from "react";
import App from "./App";
import { useNavigate } from "react-router";

const Apps = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f5f5f5] px-20">
      <div className="justify-center text-center p-7">
        <h2 className="text-4xl font-semibold">Trending Apps</h2>
        <p className="text-[#637382] pt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <Suspense fallback={<span>Loading....</span>}>
        {/* <App data={data}></App> */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map((singleApp) => (
            <App key={singleApp.id} singleApp={singleApp}></App>
          ))}
        </div>
      </Suspense>
      <div className="flex justify-center items-center py-15">
        <button
          className="btn rounded-[4px] bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)] text-white px-4 py-2 flex items-center gap-2 w-[140px]"
          onClick={() => {
            navigate("/allApps");
            window.scrollTo(0, 0);
          }}
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default Apps;
