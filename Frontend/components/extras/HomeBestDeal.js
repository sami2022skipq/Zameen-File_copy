"use client";
import Image from "next/image";
import home from "@/assets/images/House.png";
import insurance from "@/assets/images/Insurance.png";
import choice from "@/assets/images/Choice.png";
import BestDealCard from "./BestDealCard";
import { useEffect, useRef, useState } from "react";

function HomeBestDeal() {
  const imageRef = useRef(null);
  const [counter, setCounter] = useState(0);
  const [first, setFirst] = useState(false);
  const card = ["card", "card", "card", "card", "card", "card", "card"];
  const increaseCounter = () => {
    if (!first) {
      setFirst(true);
    }
    const imageCounter = counter;
    if (imageCounter === card.length - 1) {
      setCounter(0);
    } else {
      setCounter(imageCounter + 1);
    }
  };
  const decreaseCounter = () => {
    if (!first) {
      setFirst(true);
    }
    const imageCounter = counter;
    if (imageCounter === 0) {
      setCounter(card.length - 1);
    } else {
      setCounter(imageCounter - 1);
    }
  };
  const scrollImage = () => {
    if (imageRef.current) {
      imageRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };
  useEffect(() => {
    if (first) {
      scrollImage();
    }
  }, [counter]);
  return (
    <div className="lg:w-[1080px] mx-auto py-10 lg:py-40 px-4 lg:px-0 space-y-14 lg:space-y-28">
      <div className="space-y-10 lg:space-y-20">
        <div className="w-full space-y-2">
          <p className="text-main-color text-sm">HOT PROPERTY</p>
          <div className="w-full flex items-center justify-between">
            <p className="text-2xl lg:text-4xl font-semibold">Our Best Deals</p>
            <div className="flex gap-x-5">
              <div
                className="text-gray-400 border-[1px] border-gray-400 w-8 h-8 flex items-center justify-center rounded-md active:text-main-color active:border-main-color cursor-pointer"
                onClick={decreaseCounter}
              >
                <i className="fa-solid fa-chevron-left"></i>
              </div>
              <div
                className="w-8 h-8 flex items-center justify-center rounded-md text-gray-400 border-[1px] border-gray-400 active:text-main-color active:border-main-color cursor-pointer"
                onClick={increaseCounter}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center gap-x-5 overflow-hidden">
          {card.length > 0 &&
            card.map((_image, idx) => (
              <div
                ref={idx === counter ? imageRef : null}
                key={idx}
                className="flex-none w-fit"
              >
                <BestDealCard />
              </div>
            ))}
          <BestDealCard />
        </div>
      </div>
      <div className="w-full shadow bg-main-color rounded px-3 lg:px-20 py-8 lg:py-14 text-white space-y-3">
        <p className="text-sm">Why choose us?</p>
        <div className="flex flex-col lg:flex-row w-full justify-between items-start lg:items-center gap-y-5">
          <p className="text-3xl lg:text-4xl font-semibold">
            Reason To Choose Us
          </p>
          <button className="bg-white hidden lg:block text-black w-44 text-center rounded text-base p-3">
            Get Started
          </button>
        </div>
        <div className="w-full flex items-center justify-between pt-6 pb-4 lg:pb-0 lg:pt-10">
          <div className="lg:w-[33%] lg:px-5 flex flex-col items-center justify-center gap-y-3 lg:gap-y-9">
            <Image
              src={home}
              className="h-16 w-16 rounded object-cover object-center"
              alt="Best_Seller_Img"
            />
            <div className="w-full space-y-4">
              <p className="text-sm text-center lg:text-left lg:text-xl font-medium">
                Excellent Reputation
              </p>
              <p className="text-sm hidden lg:block">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="lg:w-[33%] lg:px-5 flex flex-col items-center justify-center gap-y-3 lg:gap-y-9">
            <Image
              src={insurance}
              className="h-16 w-16 rounded object-cover object-center"
              alt="Best_Seller_Img"
            />
            <div className="w-full space-y-4">
              <p className="text-sm text-center lg:text-left lg:text-xl font-medium">
                Best Local Agents
              </p>
              <p className="text-sm hidden lg:block">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="lg:w-[33%] lg:px-5 flex flex-col items-center justify-center gap-y-3 lg:gap-y-9">
            <Image
              src={choice}
              className="h-16 w-16 rounded object-cover object-center"
              alt="Best_Seller_Img"
            />
            <div className="w-full space-y-4">
              <p className="text-sm text-center lg:text-left lg:text-xl font-medium">
                Personalized Service
              </p>
              <p className="text-sm hidden lg:block">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center lg:hidden">
          <button className="bg-white text-black w-44 text-center rounded text-base p-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeBestDeal;
