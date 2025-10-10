import React from "react";

const SkeletonLoader = ({count }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-20 py-10">
      {Array.from({length: count}).map((_,i)=>
      <div key={i} className="flex w-52 flex-col gap-4">
        <div className="skeleton h-[316px] w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
      )}
    </div>
  );
};

export default SkeletonLoader;
