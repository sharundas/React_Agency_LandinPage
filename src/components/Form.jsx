import React from "react";

export default function Form() {
  return (
    <form className="max-w-[900px] bg-slate-400 p-6 flex flex-col justify-center items-center mt-2">
      <div className=" w-full flex lg:flex-row flex-col ">
        <div className="w-full py-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-white px-10 py-2 border-gray-400 border-[1px] w-50%"
          />
        </div>
        <div className="w-full mb-4">
          <input
            type="text"
            placeholder="Enter Email"
            className="w-full bg-white px-10 py-2 border-gray-400 border-[1px] w-50%"
          />
        </div>
      </div>

     

      <textarea
        className="bg-white border-gray-400"
        placeholder="Message"
        name="Message"
        id=""
        cols="80"
        rows="6"
      ></textarea>
      <button className="bg-blue-400 text-white font-medium text-lg px-4 py-2 mt-4 rounded-md">
        Send Message
      </button>
    </form>
  );
}
