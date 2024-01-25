function DropDown({ array, setValue, value, closeDropDown }) {
  const itemHandler = (str) => {
    setValue(str);
    closeDropDown(false);
  };
  return (
    <div className="absolute z-10 mt-2 w-full p-1 rounded bg-white text-xs shadow-lg border-[1px] border-gray-400 space-y-0.5">
      {array.map((item, index) => {
        return (
          <p
            onClick={() => itemHandler(item)}
            key={index}
            className={`drop-down-items ${item === value && "bg-gray-400 text-white"}`}
          >
            {item}
          </p>
        );
      })}
      {/* <p className="drop-down-items">DropDown</p>
      <p className="drop-down-items">DropDown</p>
      <p className="drop-down-items">DropDown</p>
      <p className="drop-down-items">DropDown</p>
      <p className="drop-down-items">DropDown</p> */}
    </div>
  );
}

export default DropDown;
