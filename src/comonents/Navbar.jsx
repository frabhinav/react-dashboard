import { FaRegBell } from "react-icons/fa";
import { RiAccountBoxFill, RiArrowDropDownLine } from "react-icons/ri";
import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { TbHome } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import { HiHomeModern } from "react-icons/hi2";
import { AiFillThunderbolt } from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import { CgNotes } from "react-icons/cg";

function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  const handleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div className="main bg-gray-700 py-3 m-auto w-[full]">
      <div className="flex justify-center items-center md:w-[80%] m-auto md:gap-16 gap-8 ">
        <div className="logo flex justify-center items-center gap-2">
          <button
            onClick={handleMenu}
            className="text-white text-2xl outline-none block md:hidden"
          >
            {isMenu ? "" : <RiMenu2Line />}
          </button>
          <span className="text-white md:text-3xl text-2xl font-mono font-semibold">
            <span className="text-[#279f7d]">First</span>Bench
          </span>
        </div>
        <div
          className={`overflow-scroll scrollbar-hidden z-10 fixed top-0 left-0 h-full bg-black opacity-[0.9] text-white transition-transform duration-300 ease-in-out ${
            isMenu ? "translate-x-0" : "-translate-x-full"
          } md:w-[30%] w-[50%] shadow-lg`}
        >
          <h2 className=" text-2xl flex justify-end font-bold p-4 border-b border-gray-600">
            <RxCross2 onClick={() => setIsMenu(!isMenu)} />
          </h2>
          <ul className="p-4  text-center text-lg font-semibold">
            <a className="flex justify-center items-center gap-1  hover:bg-gray-800 rounded hover:text-[#279f7d]">
              <TbHome />
              <li className="block p-2 my-2 ">Dashboard</li>
            </a>
            <a className="flex justify-center items-center gap-1 hover:bg-gray-800 rounded hover:text-[#279f7d]">
              <BsStars />
              <li className="block p-2 my-2 ">FirstGuru</li>
            </a>
            <a className="flex justify-center items-center gap-1 hover:bg-gray-800 rounded hover:text-[#279f7d]">
              <HiHomeModern />
              <li className="block p-2 my-2 ">TownHall</li>
            </a>
            <a className="flex justify-center items-center gap-1 hover:bg-gray-800 rounded hover:text-[#279f7d]">
              <AiFillThunderbolt />
              <li className="block p-2 my-2 ">AI Evaluation</li>
            </a>
            <a className="flex justify-center items-center gap-1 hover:bg-gray-800 rounded hover:text-[#279f7d]">
              <GoGraph />
              <li className="block p-2 my-2 ">Performance</li>
            </a>
            <a className="flex justify-center items-center gap-1 hover:bg-gray-800 rounded hover:text-[#279f7d]">
              <CgNotes />
              <li className="block p-2 my-2 ">Mock Test</li>
            </a>
          </ul>
        </div>
        <div className="options hidden md:block">
          <ul className="text-white text-md flex justify-center items-center gap-7 ">
            <li className="hover:text-[#279f7d] flex justify-center items-center gap-1">
              <TbHome />
              <a href="">Dashboard</a>
            </li>
            <li className="hover:text-[#279f7d] flex justify-center items-center gap-1">
              <BsStars />
              <a href="">FirstGuru</a>
            </li>
            <li className="hover:text-[#279f7d] flex justify-center items-center gap-1">
              <HiHomeModern />
              <a href="">TownHall</a>
            </li>
            <li className="hover:text-[#279f7d] flex justify-center items-center gap-1">
              <AiFillThunderbolt />
              <a href="">AI Evaluation</a>
            </li>
            <li className="hover:text-[#279f7d] flex justify-center items-center gap-1">
              <GoGraph />
              <a href="">Performance</a>
            </li>
            <li className="hover:text-[#279f7d] flex justify-center items-center gap-1">
              <CgNotes />
              <a href="">Mock Test</a>
            </li>
          </ul>
        </div>

        <div className="profile flex justify-center items-center gap-4 bg-[#11122e] px-2 py-1 rounded-lg ">
          <div className="notification  ">
            <FaRegBell className="text-white text-md" />
          </div>
          <div className="info flex justify-center items-center gap-1">
            <div className="icon  bg-[#d18585] text-md text-[#884242]">
              <RiAccountBoxFill />
            </div>
            <div className="dic text-white text-md">Yaman</div>
            <div className="dropdown  text-white text-2xl">
              <RiArrowDropDownLine />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
