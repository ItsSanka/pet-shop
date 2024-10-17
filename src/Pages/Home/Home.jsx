import React from "react";
import NavBar from "../../Components/NavBar/Navbar";
import Hero from "../../Components/HeroSection/Hero";

function Home() {
  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <NavBar></NavBar>
          <Hero></Hero>
        </div>
      </section>
    </div>
  );
}

export default Home;
