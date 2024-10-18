import React from "react";
import NavBar from "../../Components/NavBar/Navbar";
import Hero from "../../Components/HeroSection/Hero";
import Pet from "../../Components/PetSection/Pet";
import Banner from "../../Components/BannerSection/Banner";
import Product from "../../Components/ProductSection/Product";
import Seller from "../../Components/SellerSection/Seller";
import Adoption from "../../Components/AdoptionSection/Adoption";
import Knowledge from "../../Components/KnowledgeSection/Knowledge";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <div>
      <section className="hero-section bg-hero-pattern bg-no-repeat bg-cover">
        <div className="container">
          <NavBar></NavBar>
          <Hero></Hero>
        </div>
      </section>
      <div className="container py-12">
        <Pet></Pet>
      </div>
      <div className="container pt-5">
        <Banner></Banner>
      </div>
      <div className="container py-12">
        <Product></Product>
      </div>
      <div className="container py-12">
        <Seller></Seller>
      </div>
      <div className="container py-12">
        <Adoption></Adoption>
      </div>
      <div className="container py-12">
        <Knowledge></Knowledge>
      </div>
      <section className="footer bg-gradient-to-r from-orange-100 to-orange-200 rounded-t-3xl pt-4">
      <div className="container pt-12 pb-8">
        <Footer></Footer>
      </div>
      </section>
    </div>
  );
}

export default Home;
