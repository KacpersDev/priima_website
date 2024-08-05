import Image from "next/image";

import WaveTop from "@/app/assets/images/wave_body_top.svg";
import WaveBottom from "@/app/assets/images/wave_body_bottom.svg";

const Body = () => {
  return (
    <div className="mt-[125px]">
      <p className="text-[#122A37] font-grotesk_600 text-[50px] w-[600px] text-center ml-auto mr-auto">
        <span className="text-[#F7AB12]">Effortless</span> and{" "}
        <span className="text-[#F7AB12]">affordable</span> transportation
        services
      </p>
      <p className="font-grotesk text-[20px] w-[600px] text-center ml-auto mr-auto mt-[10px]">
        Experience effortless and affordable transportation services tailored to
        meet your needs. Our commitment to reliability and efficiency ensures
        that your moving and recycling tasks are handled with care and
        professionalism, providing best experience.
      </p>
      <div className="flex justify-center space-x-[110px] mt-[35px]">
        <button
          className="bg-[#122A37] text-[#F7AB12] w-[150px] p-[7px] rounded shadow-lg shadow-black hover:text-white hover:bg-[#F7AB12]
          hover:transition hover:delay-150 hover:ease-in-out transition ease-in-out delay-150"
        >
          About Us
        </button>
        <button
          className="bg-[#122A37] text-[#F7AB12] w-[150px] p-[7px] rounded shadow-lg shadow-black hover:text-white hover:bg-[#F7AB12]
          hover:transition hover:delay-150 hover:ease-in-out"
        >
          Contact Us
        </button>
      </div>
      <div className="mt-[100px]">
        <Image className="w-[100%]" src={WaveTop} alt={"Wave"} />
      </div>
      <div className="bg-[#122A37]">
        <p className="text-white text-center font-grotesk_500 text-[50px]">
          We <span className="text-[#F7AB12] font-grotesk_600">take</span> care{" "}
          <span className="text-[#F7AB12] font-grotesk_600">of</span>
        </p>
        <div className="flex justify-center">
          <div className="w-[16px] h-[16px] bg-[#F7AB12] rounded-full m-[6px]" />
          <div className="w-[16px] h-[16px] bg-white rounded-full m-[6px]" />
          <div className="w-[16px] h-[16px] bg-[#F7AB12] rounded-full m-[6px]" />
          <div className="w-[16px] h-[16px] bg-white rounded-full m-[6px]" />
          <div className="w-[16px] h-[16px] bg-[#F7AB12] rounded-full m-[6px]" />
        </div>
        <div className="flex justify-center mt-[75px]">
          <div className=" bg-[url('./assets/images/1.png')] w-[425px] h-[600px] bg-no-repeat m-[20px]">
            <div
              className="text-white bg-black w-[175px] h-[35px] rounded-xl pt-[2px] ml-[125px] text-center mt-[50px] font-grotesk_500
              border-[3px] border-[#F7AB12]"
            >
              <p>Muutot</p>
            </div>
          </div>
          <div className=" bg-[url('./assets/images/2.png')] w-[425px] h-[600px] bg-no-repeat m-[20px]">
            <div
              className="text-white bg-black w-[175px] h-[35px] rounded-xl pt-[2px] ml-[125px] text-center mt-[50px] font-grotesk_500
              border-[3px] border-[#F7AB12]"
            >
              <p>Kantoapu</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[75px]">
          <div className=" bg-[url('./assets/images/3.png')] w-[425px] h-[600px] bg-no-repeat m-[20px]">
            <div
              className="text-white bg-black w-[175px] h-[35px] rounded-xl pt-[2px] ml-[125px] text-center mt-[50px] font-grotesk_500
              border-[3px] border-[#F7AB12]"
            >
              <p>Sortti</p>
            </div>
          </div>
          <div className=" bg-[url('./assets/images/4.png')] w-[425px] h-[600px] bg-no-repeat m-[20px]">
            <div
              className="text-white bg-black w-[175px] h-[35px] rounded-xl pt-[2px] ml-[125px] text-center mt-[50px] font-grotesk_500
              border-[3px] border-[#F7AB12]"
            >
              <p>Tavaran kuljetukset</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Image className="w-[100%]" src={WaveBottom} alt={"Wave"} />
      </div>
    </div>
  );
};

export default Body;
