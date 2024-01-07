import logo from "@/assets/images/header-logo.png";
import Image from "next/image";

function Header() {
  return (
    <div className="w-full px-28 py-6 shadow-md z-10 flex items-center justify-between">
      <div className="flex items-center gap-x-24">
        <div className="flex items-center gap-x-2">
          <Image src={logo} width={30} height={30} alt="header_logo" />
          <h5 className="text-sm font-bold">Zameen Files</h5>
        </div>
        <div className="flex items-center gap-x-16">
          <h5 className="text-sm font-semibold">Home</h5>
          <h5 className="text-sm font-semibold">Contact Us</h5>
          <h5 className="text-sm font-semibold">Agent</h5>
        </div>
      </div>
      <div className="flex items-center gap-x-1.5">
        <i className="fa-solid fa-user text-main-color"></i>
        <h5 className="text-sm font-semibold">Sign In</h5>
      </div>
    </div>
  );
}

export default Header;
