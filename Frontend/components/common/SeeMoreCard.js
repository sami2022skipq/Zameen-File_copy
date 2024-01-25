function SeeMoreCard() {
  return (
    <div className="w-40 h-48 flex-none shadow-lg bg-gray-300 rounded-3xl cursor-pointer flex flex-col items-center justify-center gap-y-3">
      <div className="bg-gray-400 w-14 h-14 flex items-center justify-center rounded-full">
        <i className="fa-solid fa-plus text-gray-800 text-2xl"></i>
      </div>
      <p className="text-gray-800 font-medium text-sm">See more</p>
    </div>
  );
}

export default SeeMoreCard;
