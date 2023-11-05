import React from "react";

const Sec5Card = ({ title, img, catagory, detail, learnMoreLink, link }) => {
  return (
    <div className="p-2 border-2 rounded-xl min-w-[300px]">
      <img src={img} className="rounded-xl object-contain max-w-full" />
      <div className="my-3 pl-2 text-gray-400">{catagory}</div>
      <h1 className="font-semibold pl-2 text-2xl mb-3">
        <a href={link}>{title}</a>
      </h1>
      <p className="mb-2 pl-2 text-gray-600">{detail}</p>
      <div className="text-[15px] font-semibold pl-2 text-gray-700">
        <p>Modern Inrastructure</p>
        <p>Consulting Services</p>
      </div>
      <div className="text-sm my-3 pl-2 font-semibold">
        <a href={learnMoreLink}>Learn More</a>
      </div>
    </div>
  );
};

export default Sec5Card;
