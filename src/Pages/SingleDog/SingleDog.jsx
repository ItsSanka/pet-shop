import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function SingleDog() {
  const [dog, setDog] = useState([]); // Use null since we'll fetch a single dog
  const { id } = useParams(); // Get the dog name from the URL

  useEffect(() => {
    const fetchSingleDogData = async () => {
      try {
        const res = await fetch(
          `https://monitor-backend-rust.vercel.app/api/pets/?q=${id}` // Fetch based on the name
        );
        const data = await res.json();
        
        // Ensure you only set the first dog (if the API returns multiple results)
        if (data.length > 0) {
          setDog(data[0]); // Get only the first result
        } else {
          setDog(null); // If no result, set it as null
        }
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSingleDogData();
  }, [id]);

  // Return a loading message if data isn't ready
  if (!dog) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="max-w-5xl mx-auto flex items-center justify-center h-screen">
        <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:place-items-center">
          <article>
            <img
              src={dog.image} // Access image from the single dog object
              alt={dog.breed}
            />
          </article>
          <article>
            <h1 className="text-3xl font-bold text-white mb-8 lg:text-5xl">
              {dog.breed} {/* Show the breed of the dog */}
            </h1>

            <Link
              to="/"
              className="inline-block bg-slate-600 py-2 px-6 rounded mt-8 text-white hover:bg-slate-500 transition-all duration-200"
            >
              &larr; Back
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
