import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import FeaturesPage from "./components/FeaturesPage";
import Cards from "./components/Cards";
import Working from "./components/Working";
import AppDownload from "./components/SaveFees";
import Marquee from "./components/Marquee";
import Footer from "./components/Footer";
import StudentsPage from "./components/StudentsPage";
import ConsultantsHomePage from "./components/ConsultantsHomePage";
import Bookdemo1 from "./components/Bookdemo1";
import BookDemoForm from "./components/BookDemoForm";
import Speedy from "./components/Speedy";
import Growincome from "./components/Growincome";
import Ongoing from "./components/Ongoing";
import NextGen from "./components/NextGen";
import Benefits from "./components/Benefits";
import FooterCons from "./components/FooterCons";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs"; 
import EasyRem from "./components/EasyRem";
import EducationLoanPage from "./components/EducationLoanPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="mt-4">
          <Routes>
            {/* Main Home Page Routes */}
            <Route
              path="/"
              element={
                <>
                  <HomePage />
                  <FeaturesPage />
                  <Cards />
                  <Working />
                  <EasyRem />
                  <AppDownload />
                  <Marquee />
                  <Footer />
                </>
              }
            />

            {/* Students Page Route */}
            <Route path="/students" element={<StudentsPage />} />

            {/* Consultants Page Routes */}
            <Route
              path="/consultants"
              element={
                <>
                  <ConsultantsHomePage />
                  <Bookdemo1 />
                  <BookDemoForm />
                  <Speedy />
                  <Growincome />
                  <Ongoing />
                  <NextGen />
                  <Benefits />
                  <FooterCons />
                </>
              }
            />

            {/* About Us Page Route */}
            <Route path="/about-us" element={<AboutUs />} />

            {/* Contact Page Route */}
            <Route path="/contact" element={<Contact />} />

             {/* Education Loan Page Route */}
            <Route path="/education-loan" element={<EducationLoanPage />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
