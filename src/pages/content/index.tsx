import React from "react";
import ContentLeft from "../../view/content/contentLeft/ContentLeft";
import ContentContent from "../../view/content/contentCenter/ContentContent";
import ContentRight from "../../view/content/contentRight/ContentRight";
import "./style.css";
import { Link } from "@mui/material";

const Content = () => {
  return (
    <div
      className="content"
      style={{
        backgroundColor: "#f0f2f5",
        width: "100%",
        paddingBottom: "20px",
        display: "flex",
      }}
    >
      <div
        className="contentleft"
        style={{
          flex: "3",
        }}
      >
        <ContentLeft />
      </div>
      <div
        style={{
          flex: "5.5",
          marginTop: "80px",
          padding: "0 80px",
        }}
      >
        <ContentContent />
      </div>
      <div
        style={{
          flex: "3",
          marginTop: "80px",
        }}
      >
        <ContentRight />
      </div>
    </div>
  );
};

export default Content;
