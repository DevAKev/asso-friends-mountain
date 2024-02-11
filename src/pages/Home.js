import React from "react";
import Navigation from "../components/Navigation";
import Carousel from "../components/Carousel";
import Articles from "../components/Articles";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Carousel />
      <Articles />
      <Footer />
    </div>
  );
};

export default Home;
