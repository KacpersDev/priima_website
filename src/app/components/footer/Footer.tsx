import Image from "next/image";

import Logo from "@/app/assets/images/logo.jpeg";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center min-[1150px]:space-x-[500px] mt-[150px] max-[1150px]:grid">
        <div className="font-grotesk text-center grid">
          <Image
            className="max-[1150px]:ml-auto max-[1150px]:mr-auto"
            width={150}
            height={150}
            src={Logo}
            alt="logo"
          />
          <p>Street 11</p>
          <p>00800 Helsinki</p>
          <p className="mt-[20px]">09 701 3 701</p>
          <p>050 576 8076</p>
          <p className="mt-[20px]">info@company.com</p>
        </div>
        <div>
          <p className="w-[500px] font-grotesk mt-[85px] text-center ml-auto max-[600px]:w-[300px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            porta massa at est convallis, in accumsan dolor fermentum.
            Suspendisse nibh mauris, dapibus eget vulputate id, consectetur non
            nisl. Aliquam sed tempor nibh. Donec ac ultrices arcu, ac gravida
            lacus. Fusce eget ipsum est. Sed aliquet sem et tincidunt semper.
            Nullam enim ipsum, rutrum at est vel, pulvinar feugiat felis.
          </p>
        </div>
      </div>
      <p className="font-grotesk text-center mt-[55px] text-[15px]">
        Copyright © 2024 COMPANY. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
