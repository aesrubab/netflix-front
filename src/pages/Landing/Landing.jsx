import React, { useState } from "react";
import Header from "./componentss/Header";
import TrendingMovies from "./componentss/TrendingMovies";
import FAQ from "./componentss/Faq";
import Footer from "./componentss/Footer";
function Landing() {
  const [language, setLanguage] = useState("en");

  return (
    <div>
      <Header/>
      <TrendingMovies/>
      <FAQ/>
      <Footer />
    </div>
  );
}

export default Landing;
