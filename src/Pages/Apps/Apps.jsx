import React, { Suspense } from "react";
import App from "../App/App";

const Apps = ({ data }) => {
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
    </div>
  );
};

export default Apps;
