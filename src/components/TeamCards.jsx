import React from "react";
// import { teams } from '../constants';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';


export default function TeamCards({imageUrl,title, subtitle, name }) {
  return (
    <div className="flex flex-col items-center justify-center h-[520px] w-[80%] md:w-[400px] bg-slate-100">
      <div className="w-64">
        <img className="rounded-[50%]" src={imageUrl} alt="Image_cards" />
      </div>
     <div className="">
      <h1 className="text-gray-800 font-bold text-lg">{name}</h1>
     </div>
     <div className="">
      <p className="text-gray-700 font-light ">{title}</p>
     </div>
     <div className="text-gray-500 lg:w-96 w-auto">
      {subtitle}
     </div>
    </div>
  );
}
