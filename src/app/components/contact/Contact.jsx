"use client";

import { FormEvent, useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [request, setRequest] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (window.Email) {
      window.Email.send({
        SecureToken: "1a4e10f0-003e-48f2-9ff6-c92354cb4e86",
        To: "vkacperpl@gmail.com",
        From: "vkacperpl@gmail.com",
        Subject: "Test email",
        Body: `Name: ${name}, Email: ${email}, Phone: ${phone}, Request: ${request}`,
      }).then(() => alert("email sent successfully"));
    }
  };

  return (
    <div>
      <p className="text-center text-[50px] font-grotesk_500 text-[#122A37]">
        Ota yhteyttä
      </p>
      <div className="flex justify-center">
        <div className="w-[16px] h-[16px] bg-[#F7AB12] rounded-full m-[6px]" />
        <div className="w-[16px] h-[16px] bg-[#122A37] rounded-full m-[6px]" />
        <div className="w-[16px] h-[16px] bg-[#F7AB12] rounded-full m-[6px]" />
        <div className="w-[16px] h-[16px] bg-[#122A37] rounded-full m-[6px]" />
        <div className="w-[16px] h-[16px] bg-[#F7AB12] rounded-full m-[6px]" />
      </div>
      <form
        className="grid justify-center mt-[75px]"
        onSubmit={handleSubmit}
        method="POST"
      >
        <input
          type="text"
          className="w-[400px] h-[60px] bg-[#122A37] rounded-2xl pl-[25px] text-white max-[500px]:w-[300px]"
          placeholder="Koko nimi"
          name="Name"
          onChange={(event) => setName(event.target.value)}
          id="contact"
        />
        <input
          type="email"
          name="Email"
          className="w-[400px] h-[60px] bg-[#122A37] rounded-2xl pl-[25px] text-white mt-[15px] max-[500px]:w-[300px]"
          placeholder="Sähköpostiosoite"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="phone"
          name="Phone"
          className="w-[400px] h-[60px] bg-[#122A37] rounded-2xl pl-[25px] text-white mt-[15px] max-[500px]:w-[300px]"
          placeholder="Puhelinnumero"
          onChange={(event) => setPhone(event.target.value)}
        />
        <textarea
          className="bg-[#122A37] text-white rounded-2xl mt-[15px] resize-none w-[400px] h-[250px] p-[7px] pl-[25px] pr-[25px] pt-[10px] max-[500px]:w-[300px]"
          placeholder="Pyytää"
          onChange={(event) => setRequest(event.target.value)}
          name="Request"
        />
        <input
          type="submit"
          className="w-[400px] h-[60px] bg-[#122A37] rounded-2xl pl-[25px] text-white mt-[15px] hover:cursor-pointer max-[500px]:w-[300px]"
          value={"Lähetä"}
        />
      </form>
    </div>
  );
};

export default Contact;
