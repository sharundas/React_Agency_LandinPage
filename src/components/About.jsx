import React from "react";
import about from "../assets/about.jpg";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import BusinessIcon from '@mui/icons-material/Business';
import { IconButton } from "@mui/material";



export default function About() {
  return (
    // <div className="flex flex-col lg:flex-row gap-10 px-20">
    //   <div className="flex items-center justify-center">
    //     <img src={about} className="w-[600px]" alt="about image" />
    //   </div>
    //   <div className="flex-1  ">
    //     <h2 className="text-gray-700 font-semibold text-2xl pb-3">About Us</h2>
    //     <p className="text-gray-500 ">
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, rerum.
    //       Quis, accusamus sit Lorem ipsum dolor sit.
    //     </p>
    //     <p className="text-gray-900 float-left p-4 block">
    //       {" "}
    //       <span className="text-blue-900">&#10004;&#10004;</span> Lorem ipsum
    //       dolor sit amet consectetur adipisicing elit.
    //     </p>
    //     <p className="text-gray-900 float-left ml-4 block">
    //       {" "}
    //       <span className="text-blue-900">&#10004;&#10004;</span> Lorem ipsum
    //       dolor sit amet consectetur adipisicing elit.
    //     </p>
    //   </div>
    //   <div className="flex items-center justify-center">
    //     <IconButton style={{ background: "rgba(181, 219, 227, 0.2)" }}>
    //       <ViewInArIcon style={{ color: "rgba(62, 139, 234, 0.8)", fontSize: "50px" }} />
    //       </IconButton>
    //     </div>
    // </div>

    <div className="flex flex-1 flex-col lg:flex-row gap-10 px-20">
  <div className="flex items-center justify-center">
    <img src={about} className="w-[600px]" alt="about image" />
  </div>
  <div className="flex-1">
    <h2 className="text-gray-700 font-semibold text-2xl pb-3">About Us</h2>
    <p className="text-gray-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, rerum.
      Quis, accusamus sit Lorem ipsum dolor sit.
    </p>
    <p className="text-gray-900 float-left p-4 block">
      {" "}
      <span className="text-blue-900">&#10004;&#10004;</span> Lorem ipsum
      dolor sit amet consectetur adipisicing elit.
    </p>
    <p className="text-gray-900 float-left ml-4 block">
      {" "}
      <span className="text-blue-900">&#10004;&#10004;</span> Lorem ipsum
      dolor sit amet consectetur adipisicing elit.
    </p>
    
  </div>
  <div className="flex items-center justify-center"> {/* New container for the icon */}
 
</div>
</div>
 

  );
}
