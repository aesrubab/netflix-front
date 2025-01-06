import React from "react";
import Header from "./components/Header";
import TrendingMovies from "./components/TrendingMovies";
import FAQ from "./components/Faq";
import Footer from "./components/Footer";
function Landing() {
  return (
    <div>
      <Header />
      <TrendingMovies/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default Landing;
