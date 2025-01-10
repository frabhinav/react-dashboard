import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";

function Card1() {
  return (
    <div className="border-gray-500 p-1 md:w-[33%] w-[100%] h-[18rem] rounded-lg bg-[#fff]">
      <div className="flex justify-start items-center gap-1 text-gray-500">
        <span>
          <IoIosArrowDropdown />
        </span>
        <p>Compare progress</p>
      </div>
    </div>
  );
}

export default Card1;
