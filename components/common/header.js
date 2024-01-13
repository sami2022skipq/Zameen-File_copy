import logo from "@/assets/images/header-logo.png";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="w-full fixed top-0 right-0 bg-white px-10 sm:16 md:px-28 py-6 shadow-md z-10 flex items-center justify-between">
      <div className="flex items-center sm:gap-x-24">
        <div className="flex items-center gap-x-2">
          <Image src={logo} width={30} height={30} alt="header_logo" />
          <h5 className="text-sm font-bold">Zameen Files</h5>
        </div>
        <div className="hidden md:flex items-center gap-x-16">
          <h5 className="text-sm font-semibold">Home</h5>
          <Link href="contact-us" className="text-sm font-semibold">Contact Us</Link>
          <h5 className="text-sm font-semibold">Agent</h5>
        </div>
      </div>
      <Link href="/sign-up" className="hidden md:flex items-center gap-x-1.5">
        <i className="fa-solid fa-user text-main-color"></i>
        <h5 className="text-sm font-semibold">Sign In</h5>
      </Link>
      <div className="text-main-color block md:hidden">
        <i className="fa-solid fa-bars text-xl cursor-pointer"></i>
      </div>
    </div>
  );
}

export default Header;
