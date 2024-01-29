function AgentCard() {
  return (
    <div className="flex flex-none flex-col items-center justify-center gap-y-3">
      <div className="w-32 h-32 border-main-color flex items-end justify-center border-[1px] rounded-full overflow-hidden">
        <i className="fa-solid fa-user text-[6.8rem] text-main-color"></i>
      </div>
      <div className="text-center space-y-0.5">
        <p className="text-sm font-semibold">Agent Name</p>
        <p className="text-gray-500 text-xs">agent description</p>
      </div>
    </div>
  );
}

export default AgentCard;
