import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { CreateResume } from "./pages/CreateResume";
import { Profile } from "./pages/Profile";
import LandingPage from "./LandingPage/LandingPage";
import { Signin } from "./Authentication/Signin";
import { Login } from "./Authentication/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/createResume" element={<CreateResume />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signin/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
