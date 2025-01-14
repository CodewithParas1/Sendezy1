import React from "react";
import Cards from "./Cards";
import FeaturesPage from "./FeaturesPage";
import Working from "./Working";
import AppDownload from "./AppDownload";
import Marquee from "./Marquee";
import Footer from "./Footer";
import HomePage from "./HomePage";
import EasyRem from "./EasyRem";

const StudentsPage = () => {
  return (
    <div>
      
      <HomePage />
      <Cards />
      <FeaturesPage />
      <Working />
      <EasyRem />
      <AppDownload />
      <Marquee />
      <Footer />
    </div>
  );
};

export default StudentsPage;
