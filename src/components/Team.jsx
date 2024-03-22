import React from "react";
import TeamCards from "./TeamCards";
import Testimonial1 from "../assets/testimonials-1.jpg";

export default function Team() {
  return (
    <div className="lg:m-10 m-1 flex flex-col items-center justify-center">
      <h2 className="text-gray-800 font-semibold underline text-3xl decoration-4 decoration-blue-400">
        Team
      </h2>
      <p className="text-gray-600 p-2 text-lg ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, debitis
        Lorem ipsum dolor sit amet Lorem, ipsum dolor.
      </p>
      <div className="pl-36">
      <div className="flex  gap-5 lg:flex-row flex-col  lg:justify-center md:items-center ">
        <TeamCards
          imageUrl={Testimonial1}
          name="Peter Mitchell"
          title="Chief excutive"
          subtitle="Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut"
        />
        <TeamCards
          imageUrl={Testimonial1}
          name="Peter Mitchell"
          title="Chief excutive"
          subtitle="Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut"
        />
        <TeamCards
          imageUrl={Testimonial1}
          name="Peter Mitchell"
          title="Chief excutive"
          subtitle="Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas
      "
        />
      </div>
      </div>
      
    </div>
  );
}
