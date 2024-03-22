import React from "react";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { IconButton } from "@mui/material";

export default function Records() {
  return (
    <div className="flex flex-col p-10 lg:flex-row">
      <div className="flex flex-1 justify-evenly flex-row mt-12  ">
        <div className="flex flex-col items-center justify-center ">
          <IconButton style={{ background: "rgba(181, 219, 227, 0.2)" }}>
            <SentimentSatisfiedAltIcon
              style={{ color: "rgba(62, 139, 234, 0.8)", fontSize: "50px" }}
            />
          </IconButton>
          <h1 className="font-semibold text-3xl text-gray-700 p-3">232</h1>
          <p className="text-gray-500 font-medium text-lg">Happy Clients</p>
        </div>
        <div className="flex flex-col items-center justify-center lg:ml-4">
          <IconButton style={{ background: "rgba(181, 219, 227, 0.2)" }}>
            <AccountTreeIcon
              style={{ color: "rgba(62, 139, 234, 0.8)", fontSize: "50px" }}
            />
          </IconButton>
          <h1 className="font-semibold text-3xl text-gray-700 p-3">521</h1>
          <p className="text-gray-500 font-medium text-lg">Happy Clients</p>
        </div>
      </div>

      <div className="flex flex-1 justify-evenly flex-row mt-12 lg:mt-0">
        <div className="flex flex-col items-center justify-center">
          <IconButton style={{ background: "rgba(181, 219, 227, 0.2)" }}>
            <HelpCenterIcon
              style={{ color: "rgba(62, 139, 234, 0.8)", fontSize: "50px" }}
            />
          </IconButton>
          <h1 className="font-semibold text-3xl text-gray-700 p-3">1463</h1>
          <p className="text-gray-500 font-medium text-lg">Happy Clients</p>
        </div>
        <div className="flex flex-col items-center justify-center lg:ml-4">
          <IconButton style={{ background: "rgba(181, 219, 227, 0.2)" }}>
            <EngineeringIcon
              style={{ color: "rgba(62, 139, 234, 0.8)", fontSize: "50px" }}
            />
          </IconButton>
          <h1 className="font-semibold text-3xl text-gray-700 p-3">21</h1>
          <p className="text-gray-500 font-medium text-lg">Happy Clients</p>
        </div>
      </div>
    </div>
  );
}
