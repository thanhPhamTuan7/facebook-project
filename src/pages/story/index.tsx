import React from "react";
import "./storylayout.css";
import Header from "../header";
import SettingsIcon from "@mui/icons-material/Settings";

const StoryLayout = () => {
  return (
    <div>
      <Header />
      <div
        className="fdfdwacvw"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          paddingTop: "50px",
        }}
      >
        <div style={{ backgroundColor: "#fff", padding: "48px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontWeight: "bold", fontSize: "24px" }}>
              Tin của bạn
            </div>
            <div
              className="tincuaban"
              style={{
                backgroundColor: "#e4e6eb",
                padding: "4px",
                borderRadius: "50%",
              }}
            >
              <SettingsIcon />
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: "#f0f2f5", padding: "48px" }}>gfdg</div>
      </div>
    </div>
  );
};

export default StoryLayout;
