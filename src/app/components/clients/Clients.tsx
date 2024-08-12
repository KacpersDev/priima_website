import Image from "next/image";

import Client1 from "@/app/assets/images/client1.png";
import Client2 from "@/app/assets/images/client2.png";

const Clients = () => {
  return (
    <div>
      <p className="text-center font-grotesk_500 text-[50px] max-[500px]:text-[30px] max-[500px]:mt-[50px]">
        <span className="text-[#F7AB12]">Suurimmat</span> asiakkaat
      </p>
      <div className="flex justify-center">
        <div className="w-[16px] h-[16px] bg-[#122A37] rounded-full m-[6px]" />
        <div className="w-[16px] h-[16px] bg-[#F7AB12] rounded-full m-[6px]" />
        <div className="w-[16px] h-[16px] bg-[#122A37] rounded-full m-[6px]" />
        <div className="w-[16px] h-[16px] bg-[#F7AB12] rounded-full m-[6px]" />
        <div className="w-[16px] h-[16px] bg-[#122A37] rounded-full m-[6px]" />
      </div>
      <div className="flex justify-center min-[1000px]:space-x-[25px] mt-[50px] max-[1000px]:grid">
        <Image
          className="m-[10px] w-[200px] h-[80px]"
          src={Client1}
          alt="client1"
        />
        <Image
          className="m-[10px] w-[300px] h-[80px]"
          src={Client2}
          alt="client2"
        />
      </div>
    </div>
  );
};

export default Clients;
