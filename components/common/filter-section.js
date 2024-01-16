const FilterSection = () => {
  return (
    <div className="w-full py-6 pt-20 lg:pt-28 border-b-[1.8px] border-gray-300 text-sm overflow-hidden">
      <div className="w-full lg:w-[1110px] space-y-5 lg:space-y-7 mx-0 lg:mx-auto relative">
        <div className="absolute text-xs -top-3 right-3 block lg:hidden">
          <i className="fa-solid fa-arrow-right-long"></i>
        </div>
        <div className="flex gap-x-3 lg:gap-x-5 text-xs lg:text-sm px-3 lg:px-0 py-2 lg:py-0 overflow-x-auto">
          <div className="w-48 lg:w-52 border-gray-400 border-[1.8px] rounded-full lg:rounded-sm overflow-hidden flex items-center gap-x-1 px-2 lg:px-1 flex-none">
            <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
            <input
              type="text"
              className="py-1.5 w-full outline-none"
              placeholder="City Name"
            />
          </div>
          <div className="w-48 flex-none border-gray-400 border-[1.8px] flex items-center rounded-full lg:rounded-sm px-2 lg:px-1 justify-between">
            <p>Location</p>
            <i className="fa-solid fa-chevron-down cursor-pointer"></i>
          </div>
          <div className="w-48 flex-none border-gray-400 border-[1.8px] flex items-center rounded-full lg:rounded-sm px-2 lg:px-1 justify-between">
            <p>Society Name</p>
            <i className="fa-solid fa-chevron-down cursor-pointer"></i>
          </div>
          <div className="w-48 lg:w-44 flex-none border-gray-400 border-[1.8px] flex items-center rounded-full lg:rounded-sm px-2 lg:px-1 justify-between">
            <p>Property Type</p>
            <i className="fa-solid fa-chevron-down cursor-pointer"></i>
          </div>
          <div className="w-48 lg:w-28 flex-none border-gray-400 border-[1.8px] flex items-center rounded-full lg:rounded-sm px-2 lg:px-1 justify-between">
            <p>More Filters</p>
            <i className="fa-solid fa-chevron-down cursor-pointer"></i>
          </div>
          <button
            type="button"
            className="bg-main-color flex-none rounded-full lg:rounded-sm text-white w-24 lg:w-32 py-1.5"
          >
            Find
          </button>
        </div>
        <div className="w-full rounded-sm bg-high-light-gray py-4 px-3 lg:px-7 space-y-8 lg:space-y-12 text-xs lg:text-sm relative">
          <div className="text-main-color font-semibold flex gap-x-8 lg:gap-x-12">
            <p>Buy (302)</p>
            <p>Required (500)</p>
            <p>Discount (297)</p>
          </div>
          <div className="absolute top-6 right-3 block lg:hidden">
            <i className="fa-solid fa-arrow-right-long"></i>
          </div>
          <div className="w-full flex gap-x-4 lg:gap-x-0 py-2 lg:py-0 justify-normal lg:justify-between overflow-x-auto">
            <p className="flex-none">Plot Files (206)</p>
            <p className="flex-none">Houses for Sell (97)</p>
            <p className="flex-none">Houses Required (53)</p>
            <p className="flex-none">Properties (99)</p>
            <p className="flex-none">Buildings (78)</p>
            <p className="flex-none">Villas (53)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
