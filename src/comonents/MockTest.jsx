import React, { useState } from "react";
import ResultJson from "../assets/result.json";
import Lottie from "lottie-react";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdAccountBox } from "react-icons/md";
import { AiOutlineFilePdf } from "react-icons/ai";
import { GrCircleInformation } from "react-icons/gr";
import Card1 from "./utilities/Card1.jsx";
import { FaArrowUp } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { BsStars } from "react-icons/bs";
import { LuClockAlert } from "react-icons/lu";
import { FaCodeCompare } from "react-icons/fa6";
import Graph from "../assets/graph_image.jpg";
import Scale from "../assets/scale.png";

function MockTest() {
  const [marks, setMarks] = useState(136);
  const [topScore, setTopScore] = useState(230);

  return (
    <div className="main md:w-[80%] m-auto py-8 w-[90%] md:flex justify-center items-start space-y-4 md:space-y-0">
      <div className="md:w-[30%] rounded-xl w-[100%]">
        <div className="bg-[#f8f2fd] space-y-8 py-6 rounded-xl">
          <div className="pic w-[80%] m-auto ">
            <Lottie className="h-[10rem] " animationData={ResultJson} />

            <h3 className="text-2xl font-semibold text-[#772cce] text-center">
              Your Result!
            </h3>
            <p className="text-center text-gray-700">
              All your insights & details in one place
            </p>
          </div>

          <div className="score  w-[90%] m-auto gap-y-4 flex flex-col bg-[#fff] p-3 rounded-lg">
            <div className="marks bg-[#f8f2fd] flex justify-center items-center md:gap-3 gap-6 py-2 px-2 rounded-2xl">
              <div className="text-bold text-4xl p-3 bg-[#dfcaf2] rounded-xl">
                <IoBagCheckOutline />
              </div>
              <div>
                <p className="text-sm bg-[#502a72] md:px-2 px-1 py-1 rounded-3xl text-white">
                  you've passed
                </p>
                <p className="text-gray-500">
                  <span className="text-2xl font-semibold text-black">
                    {marks}
                  </span>
                  /240
                </p>
              </div>
              <div className="border-l-2 border-gray-400 px-2">
                <span className="bg-[#189e8c] text-white px-1 rounded-lg">
                  76%
                </span>
                <p className="text-[#189e8c]">Accuracy</p>
              </div>
            </div>
            <div className="top-score   bg-[#f8f2fd] pb-2 px-2 rounded-2xl">
              <div className="flex justify-start items-center gap-2 py-2">
                <div className="info text-5xl text-[#502a72]">
                  <MdAccountBox />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#502a72]">
                    Top Score
                  </p>
                  <p className="text-gray-500">
                    <span className="text-2xl font-semibold text-black">
                      {topScore}
                    </span>
                    /240
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between px-2 pt-2 border-t-2 border-gray-400">
                <p className="font-semibold">
                  <span className="text-gray-500">by</span> Abhinav Karn
                </p>
                <span className="bg-[#189e8c] text-white px-1 rounded-2xl ">
                  92% Accuracy
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Improve your Marks</h3>
              <p className="text-sm text-gray-400 ">
                Improve your score by practicing more
              </p>
            </div>
            <div className="practice-btn">
              <a href="#">
                <button className="w-[100%] py-2 text-white bg-[#6f3a9c] rounded-lg">
                  Practice more
                </button>
              </a>
            </div>
          </div>
          <div className="visitpaper bg-[#fff] flex flex-col justify-center items-start gap-1 gap-y-8 py-2 px-2 rounded-2xl w-[90%] m-auto leading-tight">
            <div className="w-[95%] m-auto gap-y-3 flex flex-col leading-tight">
              <h3 className="text-2xl font-bold ">Revisit Paper</h3>
              <p className="text-gray-500">
                Challenge your friends by simply sharing link to the test
              </p>
              <div className="w-[70%] py-2 text-white bg-[#6f3a9c] rounded-lg flex justify-center items-center gap-2 m-auto">
                <AiOutlineFilePdf /> Visit
              </div>
            </div>
            <div className="flex justify-center items-center text-gray-400 gap-2 px-2">
              <GrCircleInformation className="text-2xl" />
              <p className="text-sm leading-tight">
                instruction for how to upload your handwritten material in given
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="right md:w-[70%] w-[100%] space-y-8">
        <div className="first md:flex justify-center items-center gap-4 px-4 space-y-4 md:space-y-0">
          <Card1 />
          <Card1 />
          <Card1 />
        </div>
        <div className="second flex  justify-center items-center gap-2 px-4 flex-wrap md:flex-nowrap">
          <div className="md:w-[25%] w-[48%] border rounded-md bg-[#fff] p-2 space-y-2 h-[14rem] overflow-scroll scrollbar-hidden">
            <h2 className="md:text-lg text-md text-gray-500 flex items-center gap-1">
              <SlGraph />
              Improvement
            </h2>

            <p className="font-semibold text-sm md:text-md">
              Subject understanding
            </p>
            <div className="flex justify-start items-center flex-wrap gap-y-1">
              <button className="px-2 py-1 bg-[#19beca] text-white rounded-2xl text-[0.7rem]">
                Geography
              </button>
              <button className="px-2 py-1 bg-[#c9c433] text-white rounded-2xl text-[0.7rem]">
                Politics
              </button>
              <button className="px-2 py-1 bg-[#b83030] text-white rounded-2xl text-[0.7rem]">
                Current Affairs
              </button>
              <button className="px-2 py-1 bg-[#19beca] text-white rounded-2xl text-[0.7rem]">
                General Studies
              </button>
              <button className="px-2 py-1 bg-[#c9c433] text-white rounded-2xl text-[0.7rem]">
                Mathematics
              </button>
              <button className="px-2 py-1 bg-[#b83030] text-white rounded-2xl text-[0.7rem]">
                Social Studies
              </button>
              <button className="px-2 py-1 bg-[#19beca] text-white rounded-2xl text-[0.7rem]">
                English Literature
              </button>
              <button className="px-2 py-1 bg-[#c9c433] text-white rounded-2xl text-[0.7rem]">
                Indian History
              </button>
              <button className="px-2 py-1 bg-[#19beca] text-white rounded-2xl text-[0.7rem]">
                Economics
              </button>
            </div>
          </div>
          <div className="md:w-[25%] w-[48%] border rounded-md bg-[#fff] p-2 space-y-4 h-[14rem]">
            <h2 className="md:text-lg text-md text-gray-500 flex items-center gap-1">
              <LuClockAlert />
              Response Time
            </h2>

            <p className="bg-[#502a72] text-white rounded-md px-1">
              Std Time-2min
            </p>
            <div className="flex justify-center items-center border-dashed border">
              <span className="text-2xl font-semibold text-[#189e8c]">60</span>
              <p className="text-gray-500 text-sm">% Ans took</p>
              <span className="text-[#502a72] flex justify-center items-center md:ml-4">
                <FaArrowUp className="text-red-600" />
                2min
              </span>
            </div>
            <hr className="my-1 border" />
            <p className="text-xl text-center ">
              You are <span className="text-red-600">Slow</span> !
            </p>
          </div>
          <div className="md:w-[25%] w-[48%] h-[14rem] border rounded-md bg-[#fff] p-2 space-y-3 overflow-scroll scrollbar-hidden">
            <h2 className="md:text-lg text-md text-gray-500 flex items-center gap-1">
              <SlGraph />
              Approach Data
            </h2>

            <div>
              <div className="flex justify- items-center gap-2 border border-[#6e6e6e] rounded-sm py-1 my-1 px-2">
                <span className="text-[#502a72] bg-[#f8f2fd] text-sm p-1 rounded-md">
                  25%
                </span>
                <p className="text-sm">
                  Based on{" "}
                  <span className="text-[#733da2] font-semibold">Facts</span>
                </p>
              </div>
              <div className="flex justify- items-center gap-2 border border-[#6e6e6e] rounded-sm py-1 my-1 px-2">
                <span className="text-[#502a72] bg-[#f8f2fd] text-sm p-1 rounded-md">
                  32%
                </span>
                <p className="text-sm">
                  Based on{" "}
                  <span className="text-[#733da2] font-semibold">Analysis</span>
                </p>
              </div>
              <div className="flex justify- items-center gap-1 border border-[#6e6e6e] rounded-sm py-1 my-1 px-1">
                <span className="text-[#502a72] bg-[#f8f2fd] text-sm p-1 rounded-md">
                  19%
                </span>
                <p className="text-sm">
                  Based on{" "}
                  <span className="text-[#733da2] font-semibold">
                    Elimination
                  </span>
                </p>
              </div>
              <div className="flex justify- items-center gap-2 border border-[#6e6e6e] rounded-sm py-1 my-1 px-2">
                <span className="text-[#502a72] bg-[#f8f2fd] text-sm p-1 rounded-md">
                  24%
                </span>
                <p className="text-sm">
                  Based on{" "}
                  <span className="text-[#733da2] font-semibold">Guess</span>
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-[25%] w-[48%] h-[14rem] border rounded-md bg-[#fff] p-2 space-y-4">
            <h2 className="md:text-lg text-md text-gray-500  flex items-center gap-1">
              <BsStars />
              Suggestions
            </h2>
            <div className="flex  justify-center items-center gap-1">
              <div className=" space-y-4">
                <span className="text-sm text-white bg-[#502a72] px-1 rounded-md">
                  Q.1-12
                </span>
                <div className="px-1 py-2 border-dashed border border-gray-500 text-center">
                  <span className="text-lg font-semibold">40</span>sec
                </div>
                <p className="text-[#189e8c] font-semibold text-center">Easy</p>
              </div>
              <div className="space-y-4 ">
                <span className="text-sm text-white bg-[#502a72] px-1 rounded-md">
                  Q.12-32
                </span>
                <div className="px-1 py-2 border-dashed border border-gray-500 text-center">
                  <span className="text-lg font-semibold">1.5</span>min
                </div>
                <p className="text-[#c9c433] font-semibold text-center">
                  Medium
                </p>
              </div>
              <div className="space-y-4 ">
                <span className="text-sm text-white bg-[#502a72] px-1 rounded-md">
                  Q.32-40
                </span>
                <div className="px-1 py-2 border-dashed border border-gray-500 text-center">
                  <span className="text-lg font-semibold">3</span>min
                </div>
                <p className="text-[#b83030] font-semibold text-center">Hard</p>
              </div>
            </div>
          </div>
        </div>
        <div className="third flex flex-col md:flex-row justify-center items-center gap-2 px-4">
          <div className="one md:w-[50%] w-[100%] border rounded-md bg-[#fff] p-3 space-y-4 h-[20rem]">
            <h3 className="text-gray-500 flex items-center gap-1">
              <FaCodeCompare />
              Compare Accuracy
            </h3>
            <div className="w-[100%] h-[100%] object-contain">
              <img src={Graph} alt="" className="w-[95%] h-[90%]" />
            </div>
          </div>
          <div className="two md:w-[50%] w-[100%] border rounded-md bg-[#fff] p-3 space-y-4 h-[20rem]">
            <h3 className="text-gray-500 flex items-center gap-1">
              <LuClockAlert />
              Time taken
            </h3>
            <div>
              <img src={Scale} alt="" />
              <p className="text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
                delectus.
              </p>
            </div>
            <div>
              <img src={Scale} alt="" />
              <p className="text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
                delectus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MockTest;
