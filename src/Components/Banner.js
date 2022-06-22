import React from "react";
import banner1st from "../Assets/Images/banner-3.jpg";
import banner2nd from "../Assets/Images/banner-1.jpg";
import banner3rd from "../Assets/Images/banner-2.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="md:container mx-10 md:mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="max:h-[400px] relative shadow-lg rounded-xl">
          <img className="w-full h-full opacity-10" src={banner1st} alt="" />
          <h1 className="head-one">WOMAN</h1>
          <span className="head-span">SHOES</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-[10px]">
          <div className="max:h-[195px] relative shadow-lg rounded-xl">
            <img
              className="w-full rounded-xl opacity-50"
              src={banner2nd}
              alt=""
            />
            <h1 className="head-two">MAN</h1>
            <span className="head-span">SHOES</span>
          </div>
          <div className="max:h-[195px] relative shadow-lg rounded-xl">
            <img
              className="w-full rounded-xl opacity-80"
              src={banner3rd}
              alt=""
            />
            <h1 className="head-three">KIDS</h1>
            <span className="head-span">SHOES</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
