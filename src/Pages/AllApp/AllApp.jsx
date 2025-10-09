import React, { Suspense } from 'react';
import AllApp2 from './AllApp2';

const AllApp = ({ allData }) => {
  console.log("AllApp Data:", allData);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 py-8">
      <Suspense fallback={<span>Loading....</span>}>
        {allData.map((allSingleApp) => (
          <AllApp2 key={allSingleApp.id} allSingleApp={allSingleApp}></AllApp2>
        ))}
      </Suspense>
    </div>
  );
};

export default AllApp;