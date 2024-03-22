import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ShopIcon from "@mui/icons-material/Shop";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import { IconButton } from "@mui/material";
import { insights } from "../constants";

export default function Cards() {
  return (
    <div className="flex md:flex-row flex-col ">
      
     <div className="h-[200px] w-full flex-1 bg-white gap-5 lg:ml-5 mt-5">
         <IconButton style={{ background: "white", padding:'0px', margin:'0px' }}> 
        <EmailIcon
          style={{
            color: "rgba(62, 139, 234, 0.8)",
            fontSize: "50px",
           marginTop: '10px'
            
          }}
        />
         </IconButton>; 
     

      <div className=" flex justify-between items-center">
        <div className="flex-1  flex flex-col ">
          <h2 className="text-gray-800  font-semibold text-xl p-2 ">
            Lorem, ipsum
          </h2>

          <div className="">
            <p className="text-gray-700 text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatem ea asperiores dolorem officia tenetur.</p>
          </div>

          {/* {insights.map((insight) => {
            return (
              <div key={insight.subtitle} className="">
                <p className="text-gray-700 text-lg">{insight.subtitle}</p>
              </div>
            );
          })} */}
        </div>
      </div>
      </div>

      <div className="h-[200px] w-full flex-1 bg-white lg:ml-5 mt-5">
         <IconButton style={{ background: "white", padding:'0px', margin:'0px' }}> 
        <EmailIcon
          style={{
            color: "rgba(62, 139, 234, 0.8)",
            fontSize: "50px",
           marginTop: '10px'
            
          }}
        />
         </IconButton>; 
     

      <div className=" flex justify-between items-center">
        <div className="flex-1  flex flex-col ">
          <h2 className="text-gray-800  font-semibold text-xl p-2 ">
            Lorem, ipsum
          </h2>

          <div className="">
            <p className="text-gray-700 text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatem ea asperiores dolorem officia tenetur.</p>
          </div>
        </div>
      </div>
      </div>
      <div className="h-[200px] flex-1 bg-white lg:ml-5 mt-5">
         <IconButton style={{ background: "white", padding:'0px', margin:'0px' }}> 
        <EmailIcon
          style={{
            color: "rgba(62, 139, 234, 0.8)",
            fontSize: "50px",
           marginTop: '10px'
            
          }}
        />
         </IconButton>; 
     

      <div className=" flex justify-between items-center">
        <div className="flex-1  flex flex-col ">
          <h2 className="text-gray-800  font-semibold text-xl p-2 ">
            Lorem, ipsum
          </h2>

          <div className="">
            <p className="text-gray-700 text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatem ea asperiores dolorem officia tenetur.</p>
          </div>
        </div>
      </div>
      </div>
      <div className="h-[200px] flex-1 bg-white lg:ml-5 mt-5">
         <IconButton style={{ background: "white", padding:'0px', margin:'0px' }}> 
        <EmailIcon
          style={{
            color: "rgba(62, 139, 234, 0.8)",
            fontSize: "50px",
           marginTop: '10px'
            
          }}
        />
         </IconButton>; 
     

      <div className=" flex justify-between items-center">
        <div className="flex-1  flex flex-col ">
          <h2 className="text-gray-800  font-semibold text-xl p-2 ">
            Lorem, ipsum
          </h2>

          <div className="">
            <p className="text-gray-700 text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatem ea asperiores dolorem officia tenetur.</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
