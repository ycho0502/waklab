import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Products from "./components/pages/Products";
import Team from "./components/pages/Team";
import Calender from "./components/pages/Calender";
import Clothing from "./components/pages/Clothing";
import Isedol from "./components/pages/Isedol";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
