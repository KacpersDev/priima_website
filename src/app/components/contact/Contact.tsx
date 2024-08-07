"use client";

import { FormEvent, useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [request, setRequest] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div>
      <p className="text-center text-[50px] font-grotesk_500 text-[#122A37]">
        Contact Us
      </p>
      <div className="flex justify-center">
        <div className="w-[16px] h-[16px] bg-[#F7AB12] rounded-full m-[6px]" />
        <div className="w-[16px] h-[16px] bg-[#122A37] rounded-full m-[6px]" />
        <div className="w-[16px] h-[16px] bg-[#F7AB12] rounded-full m-[6px]" />
        <div className="w-[16px] h-[16px] bg-[#122A37] rounded-full m-[6px]" />
        <div className="w-[16px] h-[16px] bg-[#F7AB12] rounded-full m-[6px]" />
      </div>
      <form className="grid justify-center mt-[75px]" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-[400px] h-[60px] bg-[#122A37] rounded-2xl pl-[25px] text-white max-[500px]:w-[300px]"
          placeholder="Full Name"
          onChange={(event) => setName(event.target.value)}
          id="contact"
        />
        <input
          type="email"
          className="w-[400px] h-[60px] bg-[#122A37] rounded-2xl pl-[25px] text-white mt-[15px] max-[500px]:w-[300px]"
          placeholder="Email Address"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="phone"
          className="w-[400px] h-[60px] bg-[#122A37] rounded-2xl pl-[25px] text-white mt-[15px] max-[500px]:w-[300px]"
          placeholder="Phone Number"
          onChange={(event) => setPhone(event.target.value)}
        />
        <textarea
          className="bg-[#122A37] text-white rounded-2xl mt-[15px] resize-none w-[400px] h-[250px] p-[7px] pl-[25px] pr-[25px] pt-[10px] max-[500px]:w-[300px]"
          placeholder="Request"
          onChange={(event) => setRequest(event.target.value)}
        />
        <input
          type="submit"
          className="w-[400px] h-[60px] bg-[#122A37] rounded-2xl pl-[25px] text-white mt-[15px] hover:cursor-pointer max-[500px]:w-[300px]"
          value={"Submit"}
        />
      </form>
    </div>
  );
};

export default Contact;
