"use client";
import img from "@/assets/images/home-img.png";
import Image from "next/image";
import { useState } from "react";
import DropDown from "../common/DropDown";
import HeadingAndButtons from "../common/HeadingAndButtons";
import RequiedFilter from "./RequiredFilter";
import MobileRequiredFilter from "./MobileRequiredFilter";

const city = ["All", "Islamabad", "Rawalpindi", "Muree"];

const file = ["All", "Open", "Close", "Full Paid"];

const location = [
  "DHA",
  "Bahria Town",
  "Blue Area",
  "G-6",
  "I-8",
  "Satellite Town",
  "Main Peshawar Road",
  "Adiala Road",
  "Oak Vista",
  "Mall Road",
  "Kashmir Point",
];

function RequiredHeroSection() {
  const [showRequiredFilter, setShowRequiredFilter] = useState(false);
  const [cityDropDown, setCityDropDown] = useState(false);
  const [selectedCity, setSelectedCity] = useState("All");
  const [fileDropDown, setFileDropDown] = useState(false);
  const [selectedFile, setSelectedFile] = useState("All");
  const [locationDropDown, setLocationDropDown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("All");
  return (
    <div>
      <div className="pt-[78px]">
        <div className="w-full h-[51.5rem] relative">
          <Image
            src={img}
            className="h-full w-full object-cover object-center"
            alt="Home_Page_Img"
          />
        </div>
        <div className="w-full h-[51.5rem] flex items-center justify-center absolute top-0 right-0 bg-[#2626266e]">
          <div className="w-fit flex flex-col items-center justify-center gap-y-7 relative">
            <HeadingAndButtons buttonType={"required"} />
            <div className="lg:flex space-y-3 lg:space-y-0 gap-3 px-4 lg:px-0">
              <div className="bg-white px-6 py-4 rounded space-y-3">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-x-8">
                  <div className="flex flex-col gap-y-3">
                    <label className="text-sm font-medium">
                      Search by City
                    </label>
                    <input className="search-input" />
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <label className="text-sm font-medium">Location</label>
                    <input className="search-input" />
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <label className="text-sm font-medium">File Type</label>
                    <input className="search-input" />
                  </div>
                </div>
                <div className="text-xs flex items-center gap-x-5 text-main-color">
                  <div
                    onClick={() => setShowRequiredFilter(!showRequiredFilter)}
                    className="text-xs flex items-center gap-x-2 text-main-color cursor-pointer w-fit"
                  >
                    <div className="hidden lg:block">
                      <i
                        className={`fa-solid fa-chevron-down cursor-pointer transition-all transform ${
                          showRequiredFilter ? "rotate-180" : "rotate-0"
                        }`}
                      ></i>
                    </div>
                    <p>More Option</p>
                  </div>
                  <p className="cursor-pointer">Reset Search</p>
                </div>
              </div>
              <div className="flex bg-main-color text-white items-center justify-center rounded gap-x-2 px-5 text-xl cursor-pointer">
                <i className="fa-solid fa-magnifying-glass"></i>
                <p>Search</p>
              </div>
            </div>
            <div className="lg:block hidden">
              {showRequiredFilter && <RequiedFilter />}
            </div>
            <div className="block lg:hidden">
              <MobileRequiredFilter
                openModel={showRequiredFilter}
                closeModel={setShowRequiredFilter}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequiredHeroSection;
