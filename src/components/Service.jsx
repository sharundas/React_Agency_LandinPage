import React from "react";
import ArticleIcon from "@mui/icons-material/Article";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { IconButton } from "@mui/material";

export default function Service() {
  return (
    <div id="service"
     className="py-10">
      <div
        className="flex flex-col text-center items-center justify-center 
 "
      >
        <h1 className="text-black font-semibold mt-4 text-3xl underline decoration-blue-400 decoration-4  ">
          What We Do
        </h1>
        <p className="text-gray-700 mt-2 text-lg ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col items-center justify-center py-10 hover:shadow-box-shadow lg:w-1/3 w-full mt-8 gap-4 lg:mr-5 hover:animate-fade hover:animate-ease-in hover:animate-normal hover:animate-fill-forwards group ">
          <IconButton style={{ background: "rgba(181, 219, 227, 0.2)" }}>
            <ArticleIcon
              style={{ color: "rgba(62, 139, 234, 0.8)", fontSize: "50px" }}
            />
          </IconButton>
          <h2 className="text-gray-800 font-semibold mt-2 text-2xl group-hover:text-blue-400 ">
            Lorem, ipsum
          </h2>
          <p className="text-gray-700 text-base p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, sunt
          </p>
        </div>
        <div className="flex flex-col items-center justify-center py-10 hover:shadow-box-shadow lg:w-1/3 w-full mt-8 gap-4 lg:mr-5 hover:animate-fade hover:animate-ease-in hover:animate-normal hover:animate-fill-forwards group ">
          <IconButton style={{ background: "rgba(181, 219, 227, 0.2)" }}>
            <DonutSmallIcon
              style={{ color: "rgba(62, 139, 234, 0.8)", fontSize: "50px" }}
            />
          </IconButton>
          <h2 className="text-gray-800 font-semibold mt-2 text-2xl  group-hover:text-blue-400">
            Lorem, ipsum
          </h2>
          <p className="text-gray-700 text-base p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, sunt
          </p>
        </div>
        <div className="flex flex-col items-center justify-center py-10 hover:shadow-box-shadow lg:w-1/3 w-full mt-8 gap-4 hover:animate-fade hover:animate-ease-in hover:animate-normal hover:animate-fill-forwards group">
          <IconButton style={{ background: "rgba(181, 219, 227, 0.2)" }}>
            <AccessTimeIcon
              style={{ color: "rgba(62, 139, 234, 0.8)", fontSize: "50px" }}
            />
          </IconButton>
          <h2 className="text-gray-800 font-semibold mt-2 text-2xl group-hover:text-blue-400">
            Lorem, ipsum
          </h2>
          <p className="text-gray-700 text-base p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, sunt
          </p>
        </div>
      </div>
    </div>
  );
}
