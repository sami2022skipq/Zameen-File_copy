import PropertyCard from "./PropertyCard";
import SeeMoreCard from "./SeeMoreCard";

function HomeTopSoc() {
  return (
    <div className="w-full lg:w-[1080px] mx-auto pb-10 lg:pb-20 px-4 lg:px-0">
      <div className="w-full mx-auto space-y-5">
        <div className="space-y-1">
          <p className="text-4xl font-semibold">New Properties</p>
          <p className="text-main-color font-medium">
            Explore the newly listed properties
          </p>
        </div>
        <div className="flex w-full flex-wrap justify-evenly lg:justify-normal items-center gap-5 pt-3">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <SeeMoreCard />
        </div>
      </div>
    </div>
  );
}

export default HomeTopSoc;
