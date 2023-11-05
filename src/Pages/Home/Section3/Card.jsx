import React from "react";

const Card = (props) => {
  return (
    <div className="lg:col-span-3 md:col-span-4 bg-white flex flex-col justify-between gap-2 py-2 rounded shadow-lg hover:text-[#010ed0] transition-all">
      <div className="flex flex-col gap-1 px-6">
        <div className="row-span-2">
          <img src={props.img} />
        </div>
        <div className="row-span-1 text-2xl font-semibold">{props.title}</div>
        <div className="row-span-2 text-gray-500">{props.des}</div>
      </div>
      <div className=" border-t py-3 px-6">
        <a href="#" className="font-semibold text-sm">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
