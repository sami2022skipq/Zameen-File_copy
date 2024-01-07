import logo from "@/assets/images/card-image.png";
import Image from "next/image";
import verify from "@/assets/images/verify.png";

const ProductCard = () => {
  return (
    <div className="w-full shadow-md overflow-hidden border-[1.8px] border-gray-300 rounded-md mb-8">
      <div className="flex">
        <div className="w-[40%]">
          <Image
            src={logo}
            width={"100%"}
            height={"100%"}
            className="object-cover"
            alt="header_logo"
          />
        </div>
        <div className="w-[60%] p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-8">
                <div className="text-xs flex items-center gap-x-1">
                  <Image
                    src={verify}
                    width={18}
                    height={18}
                    className="object-cover"
                    alt="verified_bedge_logo"
                  />
                  <p className="font-semibold">Verified</p>
                </div>
                <p className="text-xs text-gray-400 font-medium">
                  Posted by Agent
                </p>
              </div>
              <i className="fa-solid fa-ellipsis-vertical text-xl pr-3 cursor-pointer"></i>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-1">
              <p className="font-bold text-xs">PKR</p>
              <p className="text-lg font-bold text-main-color">30,000,000</p>
            </div>
            <div className="text-gray-400 text-sm flex items-center gap-x-1">
              <i className="fa-solid fa-location-dot"></i>
              <p>Gulburg Green, Rawalpindi, Street # 23</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold">
              10 Marla Residential Plot File. Available for Sell
            </p>
            <p className="text-xs text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text.
            </p>
          </div>
          <div className="text-xs text-gray-400 flex items-center gap-x-1">
            <div className="space-x-1">
              <i className="fa-solid fa-arrows-up-down"></i>
              <i className="fa-solid fa-ruler-vertical transform rotate-180"></i>
            </div>
            <p className="font-medium">10 Marla</p>
          </div>
        </div>
      </div>
      <div className="bg-high-light-gray flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-x-3">
          <div className="relative">
            <div className="bg-web-blue text-xs w-4 h-4 rounded-full flex items-center justify-center absolute -top-1 -right-1 z-10 text-white">
              <i className="fa-solid fa-check"></i>
            </div>
            <div className="border-[1px] border-main-color w-10 h-10 rounded-full flex items-end justify-center overflow-hidden relative">
              <i className="fa-solid fa-user text-main-color text-3xl"></i>
            </div>
          </div>
          <p className="text-xs text-gray-400">Listed 6 days ago</p>
        </div>
        <div className="flex items-center gap-x-4">
          <button
            type="button"
            className="bg-main-color transition-all hover:shadow-md text-white px-4 h-9 rounded-md text-sm"
          >
            <i className="fa-solid fa-phone mr-1"></i>Call
          </button>
          <button
            type="button"
            className="bg-inherit border-[1px] transition-all hover:shadow-md border-main-color text-web-green px-4 h-9 rounded-md text-sm"
          >
            <i className="fa-brands fa-whatsapp mr-1"></i>WhatsApp
          </button>
          <button
            type="button"
            className="border-[1px] border-main-color transition-all hover:shadow-md text-main-color h-9 px-2 flex items-center justify-center rounded-md text-xl"
          >
            <i className="fa-regular fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
