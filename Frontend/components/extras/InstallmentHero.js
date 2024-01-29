"use client";
import img from "@/assets/images/home-img.png";
import Image from "next/image";
import { useState } from "react";
import DropDown from "../common/DropDown";
import HeadingAndButtons from "../common/HeadingAndButtons";

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

function InstallmentHero() {
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
            <HeadingAndButtons buttonType={"installment-discount"} />
            <div className="lg:flex space-y-3 lg:space-y-0 gap-3 px-4 lg:px-0">
              <div className="bg-white px-6 pt-4 pb-[2.7rem] rounded space-y-3">
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
              </div>
              <div className="flex bg-main-color text-white items-center justify-center rounded gap-x-2 px-5 text-xl cursor-pointer">
                <i className="fa-solid fa-magnifying-glass"></i>
                <p>Search</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstallmentHero;
