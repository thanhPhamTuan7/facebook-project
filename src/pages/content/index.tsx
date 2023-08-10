import React from "react";
import ContentLeft from "../../view/content/contentLeft/ContentLeft";
import ContentContent from "../../view/content/contentCenter/ContentContent";
import ContentRight from "../../view/content/contentRight/ContentRight";
import "./style.css";

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
          marginTop: "80px",
        }}
      >
        <ContentLeft />
      </div>
      <div
        style={{
          flex: "5.5",
          padding: "0 100px",
          marginTop: "80px",
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
