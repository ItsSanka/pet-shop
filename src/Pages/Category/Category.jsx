import React from "react";
import NavBar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/BannerSection/Banner";
import Pet from "../../Components/PetSection/Pet";

function Category() {
  return (
    <div>
      <div className="container">
        <NavBar></NavBar>
      </div>
      <div className="container">
        <Banner></Banner>
      </div>
      <div className="container py-5">
        <h1 className="text-4xl font-bold mb-3">Contact</h1>
        <Pet></Pet>
      </div>
      <section className="footer bg-gradient-to-r from-orange-100 to-orange-200 rounded-t-3xl pt-4">
        <div className="container py-5">
          <Footer></Footer>
        </div>
      </section>
    </div>
  );
}

export default Category;
