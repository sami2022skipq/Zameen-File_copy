function MobileBuyFilter({ openModel, closeModel }) {
  return (
    <div
      className={`w-full h-screen fixed top-0 right-0 z-50 flex items-center justify-center bg-[#33333363] py-20 px-5 transition-all transform ${
        openModel ? "scale-100" : "scale-0"
      }`}
    >
      <div className="w-full h-96 bg-white rounded-md p-3 relative">
        <div
          className="bg-main-color rounded-full h-7 w-7 absolute -top-3 -right-3 cursor-pointer flex items-center justify-center text-white"
          onClick={() => closeModel(false)}
        >
          <i className="fa-solid fa-xmark text-2xl"></i>
        </div>
        <div className="w-full h-full space-y-3  overflow-y-auto">
          <div className="flex flex-col gap-y-1">
            <label className="text-sm font-medium">Search by City</label>
            <input className="search-input w-full" />
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="text-sm font-medium">Location</label>
            <input className="search-input w-full" />
          </div>
          <div className="flex flex-col gap-y-1">
            <label className="text-sm font-medium">File Type</label>
            <input className="search-input w-full" />
          </div>
          <div className="space-y-1 w-full">
            <label className="text-sm font-medium">Property Type</label>
            <div className="w-full flex-none border-gray-400 text-gray-400 text-sm p-2.5 rounded border-[1.8px] flex items-center justify-between">
              <p>Islamabad</p>
              <i className="fa-solid fa-chevron-down cursor-pointer"></i>
            </div>
          </div>
          <div className="space-y-1 w-full">
            <label className="text-sm font-medium">Plot Size</label>
            <div className="w-full flex-none border-gray-400 text-gray-400 text-sm p-2.5 rounded border-[1.8px] flex items-center justify-between">
              <p>Input Location</p>
              <i className="fa-solid fa-chevron-down cursor-pointer"></i>
            </div>
          </div>
          <div className="space-y-1 w-full">
            <label className="text-sm font-medium">Price</label>
            <div className="w-full flex-none flex items-center justify-between">
              <input
                list="min-price"
                autoComplete="off"
                placeholder="min"
                className="w-2/5 outline-none border-gray-400 text-black text-sm p-2.5 rounded border-[1.8px]"
              />
              <datalist id="min-price">
                <option value="10000"></option>
                <option value="100000"></option>
                <option value="1000000"></option>
                <option value="10000000"></option>
                <option value="100000000"></option>
                <option value="1000000000"></option>
                <option value="10000000000"></option>
              </datalist>
              <p> to </p>
              <input
                list="max-price"
                autoComplete="off"
                placeholder="max"
                className="w-2/5 outline-none border-gray-400 text-black text-sm p-2.5 rounded border-[1.8px]"
              />
              <datalist id="max-price">
                <option value="10000"></option>
                <option value="100000"></option>
                <option value="1000000"></option>
                <option value="10000000"></option>
                <option value="100000000"></option>
                <option value="1000000000"></option>
                <option value="10000000000"></option>
              </datalist>
            </div>
          </div>
          <div className="space-y-1 w-full">
            <label className="text-sm font-medium">Posted By</label>
            <div className="w-full flex-none border-gray-400 text-gray-400 text-sm p-2.5 rounded border-[1.8px] flex items-center justify-between">
              <p>All Types</p>
              <i className="fa-solid fa-chevron-down cursor-pointer"></i>
            </div>
          </div>
          <div className="space-y-1 w-full">
            <label className="text-sm font-medium">Property Type</label>
            <div className="w-full flex-none border-gray-400 text-gray-400 text-sm p-2.5 rounded border-[1.8px] flex items-center justify-between">
              <p>Islamabad</p>
              <i className="fa-solid fa-chevron-down cursor-pointer"></i>
            </div>
          </div>
          <div
            className="flex bg-main-color text-white items-center justify-center rounded gap-x-2 p-2 text-xl cursor-pointer"
            onClick={() => closeModel(false)}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
            <p>Search</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileBuyFilter;
