import React from "react";

function ListingFilter() {
  return (
    <div className="rounded bg-white text-sm absolute z-10 lg:left-[12%] -bottom-[17rem] lg:-bottom-32 px-6 py-4 space-y-3 shadow-lg">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-x-8">
        <div className="space-y-3 w-full">
          <label className="text-sm font-medium">Property Type</label>
          <div className="w-60 lg:w-48 flex-none border-gray-400 text-gray-400 text-sm p-2.5 rounded border-[1.8px] flex items-center justify-between">
            <p>Islamabad</p>
            <i className="fa-solid fa-chevron-down cursor-pointer"></i>
          </div>
        </div>
        <div className="space-y-3 w-full">
          <label className="text-sm font-medium">Plot Size</label>
          <div className="w-60 lg:w-36 flex-none border-gray-400 text-gray-400 text-sm p-2.5 rounded border-[1.8px] flex items-center justify-between">
            <p>Input Location</p>
            <i className="fa-solid fa-chevron-down cursor-pointer"></i>
          </div>
        </div>
        <div className="space-y-3 w-full">
          <label className="text-sm font-medium">Price</label>
          <div className="w-60 lg:w-40 flex-none border-gray-400 text-gray-400 text-sm p-2.5 rounded border-[1.8px] flex items-center justify-between">
            <p>All Types</p>
            <i className="fa-solid fa-chevron-down cursor-pointer"></i>
          </div>
        </div>
        <div className="space-y-3 w-full">
          <label className="text-sm font-medium">Posted By</label>
          <div className="w-60 lg:w-48 flex-none border-gray-400 text-gray-400 text-sm p-2.5 rounded border-[1.8px] flex items-center justify-between">
            <p>All Types</p>
            <i className="fa-solid fa-chevron-down cursor-pointer"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingFilter;
