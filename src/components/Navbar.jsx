import React from "react";
import { navLinks } from "../constants";

export default function Navbar() {
  return (
   
    <nav className="bg-white  p-5 ">
      <div className=" mx-auto flex justify-between items-center">
        <a href="#" className="text-black text-3xl font-bold ml-8">
          Ze<span className="text-cyan-500">N</span>N
        </a>

        <ul className="flex space-x-12 mr-20">
          {navLinks.map((nav, index) => (
            <li key={nav.id}>
              
              <a href={`#${nav.id}`} className="text-black">
               
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
