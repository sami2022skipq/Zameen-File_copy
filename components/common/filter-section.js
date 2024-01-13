const FilterSection = () => {
  return (
    <div className="w-full py-6 pt-28 border-b-[1.8px] border-gray-300 flex flex-col items-center gap-y-7 text-sm">
      <div className="flex gap-x-5">
        <div className="w-52 border-gray-400 border-[1.8px] rounded-sm flex items-center gap-x-1 px-1">
          <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
          <input
            type="text"
            className="py-1.5 w-full outline-none"
            placeholder="City Name"
          />
        </div>
        <div className="w-48 border-gray-400 border-[1.8px] rounded-sm flex items-center px-1 justify-between">
          <p>Location</p>
          <i className="fa-solid fa-chevron-down cursor-pointer"></i>
        </div>
        <div className="w-48 border-gray-400 border-[1.8px] rounded-sm flex items-center px-1 justify-between">
          <p>Society Name</p>
          <i className="fa-solid fa-chevron-down cursor-pointer"></i>
        </div>
        <div className="w-44 border-gray-400 border-[1.8px] rounded-sm flex items-center px-1 justify-between">
          <p>Property Type</p>
          <i className="fa-solid fa-chevron-down cursor-pointer"></i>
        </div>
        <div className="w-28 border-gray-400 border-[1.8px] rounded-sm flex items-center px-1 justify-between">
          <p>More Filters</p>
          <i className="fa-solid fa-chevron-down cursor-pointer"></i>
        </div>
        <button
          type="button"
          className="bg-main-color rounded-sm text-white w-32 py-1.5"
        >
          Find
        </button>
      </div>
      <div className="w-[1110px] rounded-sm bg-high-light-gray py-4 px-7 space-y-12">
        <div className="text-main-color font-semibold flex gap-x-12">
          <p>Buy (302)</p>
          <p>Required (500)</p>
          <p>Discount (297)</p>
        </div>
        <div className="w-full flex justify-between">
            <p>Plot Files (206)</p>
            <p>Houses for Sell (97)</p>
            <p>Houses Required (53)</p>
            <p>Properties (99)</p>
            <p>Buildings (78)</p>
            <p>Villas (53)</p>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
