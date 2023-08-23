import React from "react";
import "./App.css";
import PersonPage from "./pages/person-page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/header/home";
import Login from "./pages/login";
import StoryLayout from "./pages/story";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<PersonPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/story-layout" element={<StoryLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
