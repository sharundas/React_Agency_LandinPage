import React from "react";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    // <div>
    //   <div className="flex p-2 ml-5 block">
    //     <h2 className="font-bold text-gray-500">ZeNN</h2>
    //   </div>

    //     {/* <ul className=''>
    //       {
    //         navLinks.map((nav) => {
    //           <li key={nav.id} className="">{nav.title}</li>
    //         })
    //       }
    //     </ul> */}
    //     <ul className='flex text-center justify-between'>
    //     {navLinks.map((nav, index) => (
    //       <li
    //         key={nav.id}
    //         className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-secondary`}

    //       >
    //         <a href={`#${nav.id}`}>{nav.title}</a>
    //       </li>
    //     ))}
    //     </ul>

    // </div>
    <nav className="bg-white  p-5 ">
      <div className=" mx-auto flex justify-between items-center">
        <a href="#" className="text-black text-3xl font-bold ml-8">
          Ze<span className="text-cyan-500">N</span>N
        </a>

        <ul className="flex space-x-12 mr-20">
          {navLinks.map((nav, index) => (
            <li key={nav.id}>
              <Link>
              </Link>
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
