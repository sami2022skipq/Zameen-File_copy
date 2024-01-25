import Image from "next/image";
import bestSeller from "@/assets/images/best-seller.png";

function BestDealCard() {
  return (
    <div className="w-full flex justify-between flex-none">
            <div className="w-full lg:w-[49%] pb-10 lg:pb-0 rounded space-y-4 lg:space-y-6 border-gray-400 border-[1px] lg:border-[2px] shadow-md py-2 lg:py-7 px-3 lg:px-10">
              <p className="w-16 bg-[#F2B241] text-white text-[0.625rem] p-0.5 text-center rounded">
                FEATURED
              </p>
              <div className="w-full flex items-center justify-between">
                <p className="text-xl font-medium">Villa on Grand Avenue</p>
                <div className="flex gap-x-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-md border-[1px] text-gray-400 border-gray-400">
                    <i className="fa-regular fa-bookmark"></i>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center rounded-md border-[1px] text-gray-400 border-gray-400">
                    <i className="fa-regular fa-heart"></i>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm">Start from</p>
                <p className="text-lg font-semibold text-main-color">
                  50,000,000
                </p>
              </div>
              <p className="text-xs pr-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <button className="w-40 p-3 rounded-md text-xs bg-main-color text-white">
                See Details
              </button>
            </div>
            <div className="h-[24.5rem] w-[49%] hidden lg:block">
              <Image
                src={bestSeller}
                className="h-full w-full rounded object-cover object-center"
                alt="Best_Seller_Img"
              />
            </div>
          </div>
  )
}

export default BestDealCard