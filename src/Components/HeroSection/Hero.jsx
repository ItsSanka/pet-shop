import React from "react";
import "./Hero.css";
import women from "../Assets/dog-women.png"
import play from "../Assets/play.png"

function Hero() {
  return (
    <>
      <div className="row hero">
        <div className="col-lg-6 col-md-6 col-xs-12 heading flex flex-col justify-center gap-2">
          <h1>One more friend</h1>
          <h2>Thousands more fun!</h2>
          <p>
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different that
            can meet your needs!
          </p>
          <div className="links flex gap-3 my-4">
            <button
              type="button"
              href="#"
              className="rounded-full text-blue-900 border-2 border-blue-900 py-2 px-6 font-normal flex flex-row gap-2"
            >
              View Intro <img src={play} alt="play" />
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
        <div className="col-lg-6 col-md-6 col-xs-12 image">
          <img src={women} alt="women" />
        </div>
      </div>
    </>
  );
}

export default Hero;
