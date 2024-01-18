"use client";
import Header from "@/components/common/header";
import { useEffect, useState } from "react";

function Page() {
  const [timmer, setTimmer] = useState(60);
  const [showTimmer, setShowTimmer] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      if (timmer === 0) {
        setShowTimmer(false);
        clearInterval(timer);
        return;
      }
      setTimmer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timmer]);

  return (
    <>
      <Header />
      <div className="w-full min-h-screen flex items-center justify-center text-sm overflow-hidden sm:overflow-auto pt-20">
        <div className="w-[56.125rem] h-[33.563rem] flex items-center justify-center rounded-md lg:shadow-lg lg:my-10 sm:overflow-hidden px-5">
          <form className="flex flex-col items-center gap-y-7">
            <p className="text-2xl font-semibold text-gray-900">OTP</p>
            <p className="text-lg font-semibold text-gray-900">
              Enter code received
            </p>
            <div className="text-center space-y-1">
              <p>You will shortly receive a 4-digit code on</p>
              <p className="font-semibold">+9231234567890</p>
            </div>
            <div className="w-80 sm:w-96 flex items-center justify-between">
              <input type="text" className="opt-input" />
              <input type="text" className="opt-input" />
              <input type="text" className="opt-input" />
              <input type="text" className="opt-input" />
            </div>
            <div className="text-center space-y-2">
              {showTimmer && <p>After <span className="font-semibold">{timmer}</span> second you can</p>}
              <p
                className={`text-base font-semibold ${
                  showTimmer
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-black cursor-pointer"
                }`}
              >
                RESEND CODE BY CALL
              </p>
              <p>If you have not received the code by call, Please request</p>
              <p
                className={`text-base font-semibold ${
                  showTimmer
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-black cursor-pointer"
                }`}
              >
                RESEND CODE BY SMS
              </p>
            </div>
            <button className="w-full p-3 rounded bg-main-color text-base font-semibold text-white hover:shadow-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Page;
