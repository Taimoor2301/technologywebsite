import React from "react";
import star from "./star-solid.svg";

const Stars = () => {
  return (
    <div className="flex">
      <div>
        <img src={star} alt="" className="w-4" />
      </div>
      <div>
        <img src={star} alt="" className="w-4" />
      </div>
      <div>
        <img src={star} alt="" className="w-4" />
      </div>
      <div>
        <img src={star} alt="" className="w-4" />
      </div>
      <div>
        <img src={star} alt="" className="w-4" />
      </div>
    </div>
  );
};

export default Stars;
