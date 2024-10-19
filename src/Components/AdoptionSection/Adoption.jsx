import React from "react";
import { assets } from "../Assets/images";

function Adoption() {
  return (
    <>
      <div className="row banner bg-banner-pattern-yellow bg-no-repeat bg-cover rounded-2xl">
        <div className="col-lg-6 col-md-6 col-xs-12 heading flex items-start flex-col justify-center gap-3 py-5 xl:pl-28 min-[320px]:pl-3">
          <h1 className="text-blue-950 font-bold xl:text-7xl lg:text-5xl min-[320px]:text-4xl">Adoption</h1>
          <h2 className="text-blue-950 font-bold xl:text-5xl lg:text-4xl ctext-3xl">
            We need help. so do they.
          </h2>
          <p className="text-black-500 text-1sm font-medium">
            Adopt a pet and give it a home, <br /> it will be love you back
            unconditionally.
          </p>
          <div className="links flex gap-3 my-4">
            <button
              type="button"
              href="#"
              className="rounded-full text-white bg-blue-950 py-2 px-6 font-normal"
            >
              Explore Now
            </button>
            <button
              type="button"
              href="#"
              className="rounded-full text-blue-900 border-2 border-blue-900 py-2 px-6 font-normal flex flex-row items-center gap-2"
            >
              View Intro <img src={assets.play} alt="play" />
            </button>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-xs-12 image flex justify-center">
          <img src={assets.hand} alt="women" />
        </div>
      </div>
    </>
  );
}

export default Adoption;
