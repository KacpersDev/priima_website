"use client";
import Image from "next/image";

import WavesTop from "@/app/assets/images/wave_testimonials_top.svg";
import WavesBottom from "@/app/assets/images/wave_testimonials_bottom.svg";
import Star from "@/app/assets/images/star.png";

interface TestimonialFace {
  name: String;
  review: String;
  starAmount: Number;
}

const Testimonials = () => {
  return (
    <div>
      <Image className="w-[100%]" src={WavesTop} alt="Waves Top" />
      <div className="bg-[#F7AB12]">
        <p className="text-center text-[50px] font-grotesk_500 text-[#122A37]">
          Asiakaspalautteet
        </p>
        <div className="flex justify-center">
          <div className="w-[16px] h-[16px] bg-[#122A37] rounded-full m-[6px]" />
          <div className="w-[16px] h-[16px] bg-white rounded-full m-[6px]" />
          <div className="w-[16px] h-[16px] bg-[#122A37] rounded-full m-[6px]" />
          <div className="w-[16px] h-[16px] bg-white rounded-full m-[6px]" />
          <div className="w-[16px] h-[16px] bg-[#122A37] rounded-full m-[6px]" />
        </div>
        <div className="flex justify-center mt-[75px] max-[1150px]:grid">
          <Testiomonial
            name={"Ami"}
            review={"Jätkät hoiti hommansa."}
            starAmount={5}
          />
          <Testiomonial
            name={"Jasmin"}
            review={"Kiitoksia kuljetus hoitui loistavasti!. "}
            starAmount={5}
          />
          <Testiomonial
            name={"Essi"}
            review={"Suositus, nopea je hyvä palvelu. "}
            starAmount={5}
          />
        </div>
        <button
          className="ml-auto mr-auto flex justify-center mt-[25px] bg-black text-white p-[5px] font-grotesk_500 w-[120px] rounded-xl hover:opacity-75"
          onClick={() => (location.href = "https://google.com")}
        >
          Lue lisää
        </button>
      </div>
      <Image className="w-[100%]" src={WavesBottom} alt="Waves Top" />
    </div>
  );
};

const Testiomonial: React.FC<TestimonialFace> = ({
  name,
  review,
  starAmount,
}) => {
  return (
    <div className="m-[20px]">
      <p className="text-white font-grotesk_500 text-[35px] text-center w-[350px]">
        {name}
      </p>
      <p className="text-white text-[20px] font-grotesk w-[350px] text-center max-[500px]:w-[300px] max-[500px]:text-center max-[500px]:ml-auto max-[500px]:mr-auto">
        {review}
      </p>
      <div className="flex justify-center mt-[20px]">
        <Image width={32} height={32} src={Star} alt="Star" />
        <Image width={32} height={32} src={Star} alt="Star" />
        <Image width={32} height={32} src={Star} alt="Star" />
        <Image width={32} height={32} src={Star} alt="Star" />
        <Image width={32} height={32} src={Star} alt="Star" />
      </div>
    </div>
  );
};

export default Testimonials;
