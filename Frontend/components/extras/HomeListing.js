import HomeCard from "@/components/extras/HomeCard";

function HomeListing() {
  return (
    <div className="bg-[#EEE] py-10 lg:py-20 px-4 lg:px-0">
      <div className="w-full lg:w-[1080px] mx-auto flex flex-col items-center justify-center gap-y-12">
        <div className="lg:w-[50rem] text-center space-y-2">
          <p className="text-main-color font-medium">FEATURED</p>
          <p className="text-4xl font-semibold">Latest Properties</p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
        <div className="w-full flex items-center justify-between flex-wrap gap-5">
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
          <HomeCard />
        </div>
        <button className="w-48 rounded bg-main-color p-4 text-white text-sm font-medium">
          View all Lists
        </button>
      </div>
    </div>
  );
}

export default HomeListing;
