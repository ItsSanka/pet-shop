import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../Assets/images";

function Footer() {
  return (
    <>
      <div className="flex bg-blue-950 rounded-xl p-5">
        <div className="w-5/12 pr-9">
          <h2 className="text-white font-bold text-4xl capitalize">Register now so you don't miss our programs</h2>
        </div>
        <div className="bg-white p-3 rounded-xl p3 w-7/12 m-auto">
          <form>
            <input
              className="py-3 px-8 rounded-xl text-black w-9/12 mr-4 border-solid border-2 border-black"
              type="text"
              name="mail"
              placeholder="Enter your Email"
            />
            <input className="rounded-md text-white bg-blue-950 py-3 px-8 font-normal" type="submit" value="Subcribe Now"/>
          </form>
        </div>
      </div>

      <div className="py-10 border-b border-b-blue-500 flex justify-between">
        <div>
            <ul className="flex gap-5">
                <li className="font-black text-md"><Link to='/'>Home</Link></li>
                <li className="font-black text-md"><Link to='/'>Category</Link></li>
                <li className="font-black text-md"><Link to='/'>About</Link></li>
                <li className="font-black text-md"><Link to='/'>Contact</Link></li>
            </ul>
        </div>
        <div className="flex gap-5">
            <a target="_blank" href="fb"><img src={assets.fb} alt="fb" /></a>
            <a target="_blank" href="tw"><img src={assets.tw} alt="tw" /></a>
            <a target="_blank" href="in"><img src={assets.ins} alt="in" /></a>
            <a target="_blank" href="yt"><img src={assets.yt} alt="yt" /></a>
        </div>
      </div>

      <div className="flex justify-between items-center pt-5">
        <div>
            <p>© 2022 Monito. All rights reserved.</p>
        </div>
        <div>
            <img className="img-fluid" src={assets.logo} alt="logo" />
        </div>
        <div className="flex gap-5">
            <a href="terms">Terms of Service</a>
            <a href="privacy">Privacy Policy</a>
        </div>
      </div>
    </>
  );
}

export default Footer;
