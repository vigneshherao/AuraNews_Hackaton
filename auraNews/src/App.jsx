import "./App.css";
import React from "react";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsDetails from "./components/NewsDetails";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/newsDetails" element={<NewsDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
