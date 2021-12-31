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
import Calender from "./containers/Calender";
import Merchandise from "./containers/Merchandise";
import Team from "./containers/Team";
import Isedol from "./containers/Isedol";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/calender" element={<Calender />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/Merchandise" element={<Merchandise />} />
        <Route path="/isedol" element={<Isedol />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/" exact element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
