import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import About from "./containers/About";
import Products from "./containers/Products";
import Team from "./containers/Team";
import Calender from "./containers/Calender";
import Clothing from "./containers/Clothing";
import Isedol from "./containers/Isedol";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/team" element={<Team />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/isedol" element={<Isedol />} />
        <Route path="/" exact element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
