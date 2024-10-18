import React from "react";
import { assets } from '../Assets/images'
import { dog_list } from "../Assets/images";

// data maping

function Knowledge() {


  return (
    <>
          <div className="headings flex justify-between items-center pb-6">
        <h3 className="font-robo text-3xl text-blue-950 font-semibold">
          <span className="text-lg text-black">You already know ?</span> <br /> Useful pet knowledge
        </h3>
        <button
          type="button"
          href="#"
          className="rounded-full text-blue-900 border-2 border-blue-900 py-2 px-6 font-normal flex flex-row items-center gap-2"
        >
          View more <img src={assets.right} alt="play" />
        </button>
      </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-6">
            {dog_list.map((item,index)=>{
                return(
                    <div key={index} className="shadow-lg p-3 rounded-2xl"> 
                        <img src={item.image} alt="dog" className="rounded-2xl pb-3 w-100"/>
                        <h3 className="text-blue-950 font-bold text-xl">{item.heading}</h3>
                        <p className="text-neutral-600 text-md font-bold">{item.description}</p>
                    </div>
                )
            })}
        </div>

    </>
  )
}

export default Knowledge
