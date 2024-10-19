import React, { useEffect, useState } from "react";
import { assets } from "../Assets/images";
import { Link } from "react-router-dom";

// fetching pet api

function Pet() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch(
          "https://monitor-backend-rust.vercel.app/api/pets"
        );
        const data = await res.json();
        setDogs(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDogData();
  }, []);

  return (
    <>
      <div className="headings md:flex md:text-left justify-between items-center pb-6 min-[320px]:block min-[320px]:text-center">
        <h3 className="font-robo text-3xl text-blue-950 font-semibold">
          <span className="text-lg text-black">Whats new?</span> <br /> Take a
          look at some of our pets
        </h3>
        <button
          type="button"
          href="#"
          className="rounded-full text-blue-900 border-2 border-blue-900 py-2 px-6 font-normal flex flex-row items-center gap-2 md:m-0 min-[320px]:m-auto min-[320px]:mt-2"
        >
          <Link to="/category" className="flex flex-row items-center gap-2">View Intro <img src={assets.right} alt="play" /></Link>
        </button>
      </div>

      {!dogs ? (
        <h2 className="flex items-center justify-center text-slate-800 text-center px-5 text-3xl font-bold uppercase">
          Loading...
        </h2>
      ) : (
        <>
          <section>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-6">
              {dogs.map((dog) => (
                <Link to={`/${dog.breed}`} key={dog.id} title="Click to visit" className="shadow-lg p-3 rounded-2xl hover:bg-slate-400 hover:duration-500">
                  <article>
                    <img
                      src={dog.image}
                      alt={dog.breed}
                      className="rounded-2xl pb-3 w-100"
                    />
                    <h3 className="text-blue-950 font-bold text-xl">
                      {dog.id} - {dog.breed}
                    </h3>
                    <p className="text-neutral-600 text-sm font-bold">
                      Gene: {dog.gender} &nbsp;&nbsp;|&nbsp;&nbsp; Age:{" "}
                      {dog.age}
                    </p>
                    <h4 className="text-blue-950 font-bold text-md mt-1">
                      {dog.price}
                    </h4>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default Pet;
