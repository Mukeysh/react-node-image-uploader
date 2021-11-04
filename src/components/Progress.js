import React from "react";

const Progress = () => {
  return (
    <>
      <h1 className="text-2xl text-left mb-4">Uploading....</h1>
      <div className="h-1.5 progress relative rounded w-full">
        <div className="animated loading-bar"></div>
      </div>
    </>
  );
};

export default Progress;
