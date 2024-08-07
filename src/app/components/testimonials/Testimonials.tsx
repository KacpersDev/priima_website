import Image from "next/image";

import WavesTop from "@/app/assets/images/wave_testimonials_top.svg";
import WavesBottom from "@/app/assets/images/wave_testimonials_bottom.svg";

const Testimonials = () => {
  return (
    <div>
      <Image className="w-[100%]" src={WavesTop} alt="Waves Top" />
      <div className="bg-[#F7AB12]">
        <p className="text-center text-[50px] font-grotesk_500 text-[#122A37]">
          Testimonials
        </p>
        <div className="flex justify-center">
          <div className="w-[16px] h-[16px] bg-[#122A37] rounded-full m-[6px]" />
          <div className="w-[16px] h-[16px] bg-white rounded-full m-[6px]" />
          <div className="w-[16px] h-[16px] bg-[#122A37] rounded-full m-[6px]" />
          <div className="w-[16px] h-[16px] bg-white rounded-full m-[6px]" />
          <div className="w-[16px] h-[16px] bg-[#122A37] rounded-full m-[6px]" />
        </div>
      </div>
      <Image className="w-[100%]" src={WavesBottom} alt="Waves Top" />
    </div>
  );
};

export default Testimonials;
