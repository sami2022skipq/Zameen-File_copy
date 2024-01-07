const SubscriptionContainer = () => {
  return (
    <div className="w-[1080px] mx-auto pt-8 pb-16 space-y-7">
      <div className="bg-white rounded w-fit py-1 px-4">SUBSCRIBE</div>
      <div className="text-white flex items-center justify-between">
        <div className="w-[45%] text-2xl">
          Sign Up To Our Newsletter To Get The Latest News And Offers.
        </div>
        <div className="w-[50%] flex border-[1px] border-white rounded overflow-hidden">
          <input
            type="text"
            className="w-full py-2 outline-none bg-transparent px-4 placeholder-white"
            placeholder="Enter your email"
          />
          <button className="bg-white text-black py-2 w-48">
            Subscribe now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionContainer;
