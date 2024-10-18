import React from "react";
import { assets } from "../Assets/images";

function Banner() {
  return (
    <>
      <div className="row banner bg-banner-pattern bg-no-repeat bg-cover rounded-2xl pt-5">
        <div className="col-lg-6 col-md-6 col-xs-12 image flex justify-center">
          <img src={assets.girl} alt="women" />
        </div>
        <div className="col-lg-6 col-md-6 col-xs-12 heading flex items-end flex-col justify-center gap-3 py-5 pr-28">
          <h1 className="text-blue-950 font-bold text-7xl">One more friend</h1>
          <h2 className="text-blue-950 font-bold text-5xl">
            Thousands more fun!
          </h2>
          <p className="text-black-500 text-1sm font-medium w-3/5">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different that
            can meet your needs!
          </p>
          <div className="links flex gap-3 my-4">
            <button
              type="button"
              href="#"
              className="rounded-full text-blue-900 border-2 border-blue-900 py-2 px-6 font-normal flex flex-row items-center gap-2"
            >
              View Intro <img src={assets.play} alt="play" />
            </button>
            <button
              type="button"
              href="#"
              className="rounded-full text-white bg-blue-950 py-2 px-6 font-normal"
            >
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
