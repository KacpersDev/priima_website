"use client";
import Image from "next/image";

import Logo from "@/app/assets/images/logo.jpeg";
import Hamburer from "@/app/assets/images/hamburger.png";

const Header = () => {
  return (
    <div className="flex justify-center space-x-[450px] max-[1020px]:space-x-[200px] max-[770px]:space-x-[100px]">
      <div>
        <Image width={150} height={150} src={Logo} alt="logo" />
      </div>
      <div className="font-grotesk mt-[40px] max-[680px]:hidden">
        <button
          className="text-[#F8AB0F] m-[20px]"
          onClick={() => (location.href = "/")}
        >
          Home
        </button>
        <button
          className="text-[#F8AB0F] m-[20px]"
          onClick={() => (location.href = "#services")}
        >
          Services
        </button>
        <button className="text-[#F8AB0F] m-[20px]">About</button>
        <button
          className="text-white bg-[#F7AB12] m-[20px] w-[100px] p-[1px] rounded"
          onClick={() => (location.href = "#contact")}
        >
          Contact
        </button>
      </div>
      <div className="hidden">
        <Image
          width={32}
          height={32}
          className="mt-[60px] hover:cursor-pointer"
          src={Hamburer}
          alt="Hamburger Menu"
        />
      </div>
    </div>
  );
};

export default Header;
