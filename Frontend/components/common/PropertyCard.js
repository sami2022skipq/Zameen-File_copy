import imgcard from "@/assets/images/card-image.png";
import Image from "next/image";

function PropertyCard() {
  return (
    <div className="w-40 h-48 flex-none shadow-lg rounded-3xl cursor-pointer overflow-hidden">
      <div className="w-full h-[70%] relative">
        <Image
          src={imgcard}
          className="w-full h-full object-cover object-center"
          alt="card_img"
        />
        <div className="absolute bottom-0 left-0 text-white p-2">
          <p className="text-xl font-semibold drop-shadow-xl">Isalamabad</p>
          <p className="drop-shadow-xl">I-8</p>
        </div>
      </div>
      <div className="w-full h-[30%] py-1 px-2">
        <p className="text-gray-800 font-medium text-sm">
          215 new properties in Islamabad
        </p>
      </div>
    </div>
  );
}

export default PropertyCard;
