import React from "react";

const Section4element = ({ title, img, link }) => {
  return (
    <div className="bg-gray-100 text-md font-semibold text-center pr-5 rounded-[50px] flex w-full sm:w-auto items-center gap-2 overflow-visible]">
      <img
        src={img}
        className=" rounded-full top-[-10px] left-[-20px] h-[50px]"
      />
      <a href={link} className="hover:text-blue-800 transition-all">
        {title}
      </a>
    </div>
  );
};

export default Section4element;
