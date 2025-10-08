import React, { Suspense } from "react";
import Installation3 from "../Installation3/Installation3";

const Installation2 = ({ installData }) => {
  console.log(installData);
  return (
    <div className="bg-[#f5f5f5]">
      <Suspense fallback={<span>Loading....</span>}>
        <div className="pb-15 pt-5">
            {installData.map((downloadedApp) => (
          <Installation3 key={downloadedApp.id} downloadedApp={downloadedApp}></Installation3>
        ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Installation2;
