import PropertyCard from "./PropertyCard";
import SeeMoreCard from "./SeeMoreCard";

function HomeTopSoc() {
  return (
    <div className="w-full pb-10 lg:pb-20 px-4 lg:px-36 space-y-2">
      <div className="w-full 2xl:w-fit 2xl:mx-auto">
        <p className="text-4xl font-semibold">New Properties</p>
        <p className="text-main-color font-medium">
          Explore the newly listed properties
        </p>
        <div className="flex flex-wrap justify-evenly lg:justify-normal items-center gap-5 pt-3">
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
