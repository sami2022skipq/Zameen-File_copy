import imgcard from "@/assets/images/card-image.png";
import Image from "next/image";

function HomeCard() {
  return (
    <div className="lg:w-[30%] rounded bg-white shadow">
      <div className="w-full h-1/2">
        <Image
          src={imgcard}
          className="w-full h-full object-cover object-center"
          alt="card_img"
        />
      </div>
      <div className="w-full h-1/2 p-6 space-y-2">
        <p className="text-xl font-medium">Villa on Grand Avenue</p>
        <p className="text-xs">Start from</p>
        <p className="text-main-color text-lg font-semibold">5,000,000</p>
        <p className="text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
        </p>
        <button className="w-24 border-[1px] border-main-color text-xs p-2 rounded">
          See Details
        </button>
      </div>
    </div>
  );
}

export default HomeCard;
