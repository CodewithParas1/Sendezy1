import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import FeaturesPage from "./components/FeaturesPage";
import Cards from "./components/Cards";
import Working from "./components/Working";
import AppDownload from "./components/AppDownload";
import Marquee from "./components/Marquee";
import Footer from "./components/Footer";
import ConsultantsPage from "./components/ConsultantsPage";
import StudentsPage from "./components/StudentsPage"; // New page

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="mt-4">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HomePage />
                  <FeaturesPage />
                  <Cards />
                  <Working />
                  <AppDownload />
                  <Marquee />
                  <Footer />
                </>
              }
            />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/consultants" element={<ConsultantsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
