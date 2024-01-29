"use client";
import img from "@/assets/images/home-img.png";
import Image from "next/image";
import { useState } from "react";
import BuyFilter from "./BuyFilter";
import DropDown from "../common/DropDown";
import HeadingAndButtons from "../common/HeadingAndButtons";
import MobileBuyFilter from "./MobileBuyFilter";

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

function BuyHeroSection() {
  const [showBuyFilter, setShowBuyFilter] = useState(false);
  const [cityDropDown, setCityDropDown] = useState(false);
  const [selectedCity, setSelectedCity] = useState("All");
  const [fileDropDown, setFileDropDown] = useState(false);
  const [selectedFile, setSelectedFile] = useState("All");
  const [locationDropDown, setLocationDropDown] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("All");
  return (
    <div className="pt-[78px] w-full h-[51.5rem] overflow-hidden">
      <div className="w-full h-[51.5rem] relative">
        <Image
          src={img}
          className="h-full w-full object-cover object-center"
          alt="Home_Page_Img"
        />
      </div>
      <div className="w-full h-[51.5rem] flex flex-col items-center justify-center absolute top-0 right-0 bg-[#2626266e]">
        <div className="w-fit flex flex-col items-center gap-y-7 relative">
          <HeadingAndButtons buttonType={"buy"} />
          <div className="flex w-full space-y-3 lg:space-y-0 gap-3 px-4 lg:px-0">
            <div className="bg-white hidden lg:block px-6 py-4 rounded space-y-3">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-x-8">
                <div className="flex flex-col gap-y-3">
                  <label className="text-sm font-medium">Search by City</label>
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
                  onClick={() => setShowBuyFilter(!showBuyFilter)}
                  className="text-xs flex items-center gap-x-2 text-main-color cursor-pointer w-fit"
                >
                  <div className="hidden lg:block">
                    <i
                      className={`fa-solid fa-chevron-down cursor-pointer transition-all transform ${
                        showBuyFilter ? "rotate-180" : "rotate-0"
                      }`}
                    ></i>
                  </div>
                  <p>More Option</p>
                </div>
                <p className="cursor-pointer">Reset Search</p>
              </div>
            </div>
            <div className="hidden lg:flex bg-main-color text-white items-center justify-center rounded gap-x-2 px-5 text-xl cursor-pointer">
              <i className="fa-solid fa-magnifying-glass"></i>
              <p>Filters</p>
            </div>
            <div className="lg:hidden w-full text-center bg-main-color text-white rounded gap-x-2 p-2 text-xl cursor-pointer" onClick={() => setShowBuyFilter(true)}>
              <p>Filters</p>
            </div>
          </div>
          <div className="lg:block hidden">
            {showBuyFilter && <BuyFilter />}
          </div>
          <div className="block lg:hidden">
            <MobileBuyFilter
              openModel={showBuyFilter}
              closeModel={setShowBuyFilter}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyHeroSection;
