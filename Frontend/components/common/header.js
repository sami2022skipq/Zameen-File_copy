"use client";
import logo from "@/assets/images/header-logo.png";
import { ZameenFileActions } from "@/features/slice";
import { getUserLogout } from "@/utils/fireBase";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.zameenFile.isLoggedIn);
  const logOutHandler = async () => {
    try {
      const res = await axios.delete(
        "/api/v1/auth/logout",
        {
          withCredentials: true, // Include credentials in the request
        }
      );
      if (res.status === 200) {
        getUserLogout();
        dispatch(ZameenFileActions.resetUser());
      }
    } catch (error) {
      console.log(error);
    }
  };
  const isUserLoggedIn = async () => {
    try {
      const res = await axios.get("/api/v1/users/showMe", {
        withCredentials: true, // Include credentials in the request
      });
      if (res.status === 200) {
        dispatch(ZameenFileActions.setUser(res.data.user));
        push("/buy-file");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    if (!isLoggedIn) {
      isUserLoggedIn();
    } else {
      push("/buy-file");
    }
  }, []);
  return (
    <div className="w-full fixed top-0 right-0 bg-white px-10 lg:px-16 xl:px-28 py-6 shadow-md z-20 flex items-center justify-between">
      <div className="flex items-center lg:gap-x-10 xl:gap-x-16 2xl:gap-x-24">
        <div className="flex items-center gap-x-2">
          <Image src={logo} width={30} height={30} alt="header_logo" />
          <h5 className="text-sm font-bold">Zameen Files</h5>
        </div>
        <div className="hidden lg:flex items-center text-xs xl:text-sm lg:gap-x-8 2xl:gap-x-16">
          <Link
            href="/buy-file"
            className={`font-semibold ${
              pathname === "/buy-file" && "text-main-color"
            }`}
          >
            Buy
          </Link>
          <Link
            href="/required-file"
            className={`font-semibold ${
              pathname === "/required-file" && "text-main-color"
            }`}
          >
            Required
          </Link>
          <Link
            href="/installment-discount"
            className={`font-semibold ${
              pathname === "/installment-discount" && "text-main-color"
            }`}
          >
            Installment Discount
          </Link>
          <h5 className="font-semibold text-gray-300">Top Agents</h5>
          <h5 className="font-semibold text-gray-300">Top Societies</h5>
          <Link
            href="/contact-us"
            className={`font-semibold ${
              pathname === "/contact-us" && "text-main-color"
            }`}
          >
            Contact Us
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        {!isLoggedIn && (
          <Link
            href="/sign-in"
            className="hidden lg:flex items-center gap-x-1.5 cursor-pointer text-xs xl:text-sm bg-main-color text-white px-5 py-2 rounded"
          >
            <i className="fa-solid fa-user text-white"></i>
            <h5 className="font-semibold">Sign In</h5>
          </Link>
        )}
        {isLoggedIn && (
          <div
            onClick={() => {}}
            className="hidden cursor-pointer lg:block text-xs xl:text-sm bg-main-color text-white px-5 py-2 rounded"
          >
            <h5 className="font-semibold">Add an Add</h5>
          </div>
        )}
        {isLoggedIn && (
          <div
            onClick={logOutHandler}
            className="hidden cursor-pointer lg:flex text-xs xl:text-sm items-center gap-x-1.5"
          >
            <i className="fa-solid fa-user text-main-color"></i>
            <h5 className="font-semibold">Sign Out</h5>
          </div>
        )}
      </div>
      <div className="text-main-color block lg:hidden">
        <i className="fa-solid fa-bars text-xl cursor-pointer"></i>
      </div>
    </div>
  );
}

export default Header;
