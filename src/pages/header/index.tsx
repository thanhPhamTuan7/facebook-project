import React from "react";
import HeaderLeft from "../../view/header/HeaderLeft";
import HeaderCentent from "../../view/header/HeaderCentent";
import HeaderRight from "../../view/header/HeaderRight";
import "./header.css";

const Header = () => {
  return (
    <div
      className="ffsdfd"
      style={{
        width: "100%",
        height: "56px",
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        position: "fixed",
        zIndex: 1,
      }}
    >
      <div style={{ flex: 3, width: "100%" }}>
        <HeaderLeft />
      </div>
      <div
        style={{
          flex: 5,
          cursor: "pointer",
          width: "100%",
        }}
      >
        <HeaderCentent />
      </div>
      <div style={{ flex: 3, width: "100%" }}>
        <HeaderRight />
      </div>
    </div>
  );
};

export default Header;
