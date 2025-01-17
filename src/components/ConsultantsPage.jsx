import React from "react";
import ConsultantsHomePage from "./ConsultantsHomePage";
import Bookdemo1 from "./Bookdemo1";
import BookDemoForm from "./BookDemoForm";


import Speedy from "./Speedy";
import Growincome from "./Growincome";
import Ongoing from "./Ongoing";
import NextGen from "./NextGen";
import Benefits from "./Benefits";
import FooterCons from "./FooterCons";

const ConsultantsPage = () => {
  return (
    <div>
      {/* Existing components */}
      <ConsultantsHomePage />
      <Bookdemo1 />
      <BookDemoForm />
      
      {/* New Speedy component */}
      <Speedy />
      <Growincome />
      <Ongoing />
      <NextGen />
      <Benefits />
      <FooterCons />
    </div>
  );
};

export default ConsultantsPage;
