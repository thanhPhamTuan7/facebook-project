import React from "react";
import "./App.css";
import Header from "./pages/header";
import Content from "./pages/content";
import PersonPage from "./pages/person-page";

function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <Content />
      {/* <PersonPage /> */}
    </div>
  );
}

export default App;
