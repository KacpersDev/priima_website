import Image from "next/image";

import WaveTop from "@/app/assets/images/wave_body_top.svg";
import WaveBottom from "@/app/assets/images/wave_body_bottom.svg";

const Body = () => {
  return (
    <div className="mt-[125px]">
      <p
        className="text-[#122A37] font-grotesk_600 text-[50px] w-[600px] text-center ml-auto mr-auto max-[800px]:w-[400px]
        max-[800px]:text-[30px] max-[400px]:w-[300px] max-[400px]:text-[25px]"
        id="about"
      >
        <span className="text-[#F7AB12]">Vaivattomat</span> ja{" "}
        <span className="text-[#F7AB12]">edulliset</span> kuljetuspalvelut
      </p>
      <p className="font-grotesk text-[20px] w-[600px] text-center ml-auto mr-auto mt-[10px] max-[800px]:w-[400px] max-[800px]:text-[17px] max-[400px]:w-[300px] max-[400px]:text-[15px]">
        Koe vaivattomat ja edulliset kuljetuspalvelut, jotka on räätälöity
        tarpeidesi mukaan. Sitoutumisemme luotettavuuteen ja tehokkuuteen
        varmistaa, että muutto- ja kierrätystehtäväsi hoidetaan huolellisesti ja
        ammattitaidolla, tarjoten parhaan mahdollisen kokemuksen.
      </p>
      <div className="flex justify-center min-[800px]:space-x-[110px] mt-[35px] max-[800px]:grid">
        <button
          className="bg-[#122A37] text-[#F7AB12] w-[150px] p-[7px] rounded shadow-lg shadow-black hover:text-white hover:bg-[#F7AB12]
          hover:transition hover:delay-150 hover:ease-in-out transition ease-in-out delay-150 max-[800px]:ml-auto max-[800px]:mr-auto max-[800px]:w-[250px]"
        >
          Meistä
        </button>
        <button
          className="bg-[#122A37] text-[#F7AB12] w-[150px] p-[7px] rounded shadow-lg shadow-black hover:text-white hover:bg-[#F7AB12]
          hover:transition hover:delay-150 hover:ease-in-out max-[800px]:mt-[20px] max-[800px]:w-[250px] max-[800px]:ml-auto max-[800px]:justify-center"
        >
          Ota yhteyttä
        </button>
      </div>
      <div className="mt-[100px]">
        <Image className="w-[100%]" src={WaveTop} alt={"Wave"} />
      </div>
      <div className="bg-[#122A37]">
        <p className="text-white text-center font-grotesk_500 text-[50px] max-[500px]:text-[30px]">
          <span className="text-[#F7AB12] font-grotesk_600">Huolehdimme</span>
        </p>
        <div className="flex justify-center">
          <div className="w-[16px] h-[16px] bg-[#F7AB12] rounded-full m-[6px]" />
          <div className="w-[16px] h-[16px] bg-white rounded-full m-[6px]" />
          <div className="w-[16px] h-[16px] bg-[#F7AB12] rounded-full m-[6px]" />
          <div className="w-[16px] h-[16px] bg-white rounded-full m-[6px]" />
          <div className="w-[16px] h-[16px] bg-[#F7AB12] rounded-full m-[6px]" />
        </div>
        <div className="flex justify-center mt-[75px] max-[950px]:grid">
          <div
            className="bg-[url('./assets/images/1.png')] w-[425px] h-[600px] bg-no-repeat m-[20px] max-[500px]:bg-contain
            max-[500px]:w-[310px] max-[500px]:ml-auto max-[500px]:mr-auto"
            id="services"
          >
            <div
              className="text-white bg-black w-[175px] h-[35px] rounded-xl pt-[2px] ml-[125px] text-center mt-[50px] font-grotesk_500
              border-[3px] border-[#F7AB12] max-[500px]:ml-[70px]"
            >
              <p>Muutot</p>
            </div>
          </div>
          <div
            className="bg-[url('./assets/images/1.png')] w-[425px] h-[600px] bg-no-repeat m-[20px]
            max-[500px]:w-[310px] max-[500px]:ml-auto max-[500px]:mr-auto max-[500px]:bg-contain max-[500px]:mt-[-150px]"
          >
            <div
              className="text-white bg-black w-[175px] h-[35px] rounded-xl pt-[2px] ml-[125px] text-center mt-[50px] font-grotesk_500
            border-[3px] border-[#F7AB12] max-[500px]:ml-[70px]"
            >
              <p>Kantoapu</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[75px] max-[950px]:grid">
          <div
            className=" bg-[url('./assets/images/3.png')] w-[425px] h-[600px] bg-no-repeat m-[20px] max-[500px]:bg-contain
          max-[500px]:w-[310px] max-[500px]:ml-auto max-[500px]:mr-auto max-[500px]:mt-[-215px]"
          >
            <div
              className="text-white bg-black w-[175px] h-[35px] rounded-xl pt-[2px] ml-[125px] text-center mt-[50px] font-grotesk_500
              border-[3px] border-[#F7AB12] max-[500px]:ml-[70px]"
            >
              <p>Sortti</p>
            </div>
          </div>
          <div
            className=" bg-[url('./assets/images/4.png')] w-[425px] h-[600px] bg-no-repeat m-[20px] max-[500px]:bg-contain
          max-[500px]:w-[310px] max-[500px]:ml-auto max-[500px]:mr-auto max-[500px]:mt-[-125px]"
          >
            <div
              className="text-white bg-black w-[175px] h-[35px] rounded-xl pt-[2px] ml-[125px] text-center mt-[50px] font-grotesk_500
              border-[3px] border-[#F7AB12] max-[500px]:ml-[70px]"
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
