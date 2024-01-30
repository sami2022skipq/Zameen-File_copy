import Image from "next/image";
import img2 from "@/assets/images/home-section-2-img.png";

function HomeInfoSection() {
  return (
    <div className="xl:py-40 lg:w-[1080px] mx-auto">
      <div className="w-full lg:h-[33rem] flex flex-col lg:flex-row">
        <div className="w-1/2 grow hidden lg:block">
          <Image
            src={img2}
            className="w-full h-full object-cover object-center xl:rounded"
            alt="section_2_img"
          />
        </div>
        <div className="w-full lg:w-1/2 p-8 lg:p-12">
          <div className="h-full flex flex-col items-center lg:items-start justify-evenly gap-y-5 lg:gap-y-0">
            <p className="text-4xl lg:text-5xl font-medium text-center lg:text-left">
              Our mission is to redefine real estate in the customer favor.
            </p>
            <p className="text-sm text-justify lg:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="text-sm font-medium w-48 p-3.5 text-white rounded-md bg-main-color">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeInfoSection;
