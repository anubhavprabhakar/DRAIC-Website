import "./App.css";
import React from "react";
import Home from "./Components/Home.jsx";
import Contact from "./Components/Contact/Contact";
import Achivement from "./Components/Achievements/Achivements";
// import About from './Components/About/About.jsx';
import Project from "./Components/Projects/Project";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer";
import { Route, Navigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import Background from "./Components/Background";
import Progdep from "./Components/Department/progdep";
import Mechdep from "./Components/Department/mechanicaldep";
import Elecdep from "./Components/Department/Elecdep";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import About from "./Components/About/About";
import Contact2 from "./Components/Contact2/contact2";
import Team from "./Components/Team/team.jsx";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <Navbar />
      <Contact2 />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/about" element={<About />} /> */}
        <Route exact path="/about" element={<About />} />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/achievements" element={<Achivement />} />
        <Route exact path="/project" element={<Project />} />
        <Route exact path="/progammingDepartment" element={<Progdep />} />
        <Route exact path="/MechenicalDepartment" element={<Mechdep />} />
        <Route exact path="/ElectricalDepartment" element={<Elecdep />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Background className="particles" />
      <Footer />
    </div>
  );
};

export default App;
