import React from "react";
import "./App.css";
import Header from "./pages/header";
import Content from "./pages/content";

function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <Content />
    </div>
  );
}

export default App;
