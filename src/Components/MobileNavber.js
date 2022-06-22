import React from "react";
import { BiCategory } from "react-icons/bi";
import { BiHomeSmile } from "react-icons/bi";
import { BiCartAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const MobileNavber = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary md:hidden px-10">
      <div className="flex justify-between items-center text-base-100 my-3">
        <BiCategory className="text-2xl"></BiCategory>
        <BiHomeSmile className="text-2xl"></BiHomeSmile>
        <BiCartAlt className="text-2xl"></BiCartAlt>
        <CgProfile className="text-2xl"></CgProfile>
      </div>
    </div>
  );
};

export default MobileNavber;
