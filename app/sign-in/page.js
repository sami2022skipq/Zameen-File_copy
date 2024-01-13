"use client";
import Header from "@/components/common/header";
import google from "@/assets/images/google.png";
import facebook from "@/assets/images/Facebook.png";
import Image from "next/image";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "@/assets/images/carosel-img-1.png";
import img2 from "@/assets/images/carosel-img-2.png";
import Link from "next/link";

function Page() {
  const images = [img1, img2];
  const [password, setPassword] = useState(false);
  return (
    <>
      <Header />
      <div className="w-full min-h-screen flex items-center justify-center text-sm overflow-hidden sm:overflow-auto pt-20">
        <div className="w-[56.125rem] flex items-start justify-between rounded-md lg:shadow-lg lg:my-10 sm:overflow-hidden">
          <div className="hidden sm:block w-0 sm:w-1/2 flex-1">
            <Carousel
              className="carousel"
              infiniteLoop
              interval={6000}
              autoPlay={true}
              showStatus={false}
              showThumbs={false}
              stopOnHover={false}
              showArrows={false}
              swipeable={false}
              dynamicHeight={false}
            >
              {images.map((item, idx) => (
                <div key={idx} className="w-full h-full flex flex-1">
                  <Image
                    src={item}
                    alt="carosel-img"
                    width={"100%"}
                    height={"100%"}
                    className="object-cover object-center grow"
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="w-full sm:w-1/2 p-6">
            <div className="space-y-16">
              <h1 className="text-xl font-semibold">Sign In</h1>
              <div className="space-y-4">
                <div className="text-xs font-medium flex items-center justify-between sm:px-16 px-10">
                  <div className="border-gray-400 border-[1px] w-[100px] py-2 rounded text-center cursor-pointer flex items-center gap-x-1 justify-center shadow-sm">
                    <Image
                      src={facebook}
                      alt="facebook"
                      width={17}
                      height={17}
                      className="object-cover object-center"
                    />
                    <p>Facebook</p>
                  </div>
                  <div className="border-gray-400 border-[1px] w-[100px] py-2 rounded text-center cursor-pointer flex items-center gap-x-1 justify-center shadow-sm">
                    <Image
                      src={google}
                      alt="facebook"
                      width={17}
                      height={17}
                      className="object-cover object-center"
                    />
                    <p>Google</p>
                  </div>
                </div>
                <div className="text-xs flex items-center">
                  <div className="w-[45%] h-[1px] bg-gray-400 mt-1"></div>
                  <p className="w-[10%] text-center">or</p>
                  <div className="w-[45%] h-[1px] bg-gray-400 mt-1"></div>
                </div>
              </div>
              <form className="space-y-6">
                <div className="space-y-1">
                  <label>User Name</label>
                  <div className="input-container">
                    <i className="fa-regular fa-user text-xl"></i>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="John Smith"
                    />
                  </div>
                </div>
                <div>
                  <label>Password</label>
                  <div className="input-container">
                    <i className="fa-regular fa-lock text-xl"></i>
                    <input
                      type={password ? "text" : "password"}
                      className="input-field"
                      placeholder="**************"
                    />
                    <i
                      className={`fa-solid ${
                        password ? "fa-eye-slash" : "fa-eye"
                      } cursor-pointer text-xl`}
                      onClick={() => setPassword(!password)}
                    ></i>
                  </div>
                </div>
                <div className="pt-8">
                  <button className="w-full p-3 rounded bg-main-color text-base font-semibold text-white hover:shadow-lg">
                    Sign In
                  </button>
                </div>
                <div className="text-sm text-center space-y-1">
                  <p>
                    Have not any account?{" "}
                    <Link
                      href="/sign-up"
                      className="text-main-color font-semibold"
                    >
                      Register Now
                    </Link>
                  </p>
                  <Link href="/reset-password">Forget Password?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
