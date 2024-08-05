import Image from "next/image";
import Logo from "@/app/assets/images/logo.jpeg";

const Header = () => {
  return (
    <div className="flex justify-center space-x-[450px]">
      <div>
        <Image width={150} height={150} src={Logo} alt="logo" />
      </div>
      <div className="font-grotesk mt-[40px]">
        <button className="text-[#F8AB0F] m-[20px]">Home</button>
        <button className="text-[#F8AB0F] m-[20px]">Services</button>
        <button className="text-[#F8AB0F] m-[20px]">About</button>
        <button className="text-white bg-[#F7AB12] m-[20px] w-[100px] p-[1px] rounded">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Header;
