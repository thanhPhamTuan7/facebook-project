import React from "react";
import "./App.css";
import Header from "./pages/header";
import Content from "./pages/content";
import PersonPage from "./pages/person-page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/header/home";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<PersonPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
