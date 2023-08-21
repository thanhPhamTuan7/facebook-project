import React from "react";
import "./storylayout.css";
import Header from "../header";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar } from "@mui/material";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

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
          position: "fixed",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className="fdfdwacvw"
          style={{ backgroundColor: "#fff", padding: "48px" }}
        >
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

          {/* //avata */}

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              columnGap: "10px",
            }}
          >
            <div>
              <Avatar
                style={{ width: "70px", height: "70px" }}
                alt="Remy Sharp"
                src="/imgs/avt.jpg"
              />
            </div>
            <div style={{ fontWeight: "bold", fontSize: "17px" }}>
              Phạm Tuấn Thanh
            </div>
          </div>
          <div
            className="ffdsfsdfdsfsdfsdfsdfsdf"
            style={{
              border: "1px solid #e4e6eb",
              marginTop: "30px",
            }}
          ></div>
        </div>

        <div
          style={{
            backgroundColor: "#f0f2f5",
            padding: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            columnGap: "40px",
          }}
        >
          <div className="tintintin">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                className="imgae-pading-hov-ewrwerwe"
                style={{ backgroundColor: "#fff", padding: "8px" }}
              >
                <PhotoLibraryIcon />
              </div>
              <div
                style={{ fontWeight: "bold", color: "#fff", marginTop: "10px" }}
              >
                Tạo tin ảnh
              </div>
            </div>
          </div>
          <div className="thanhthanhthanh">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                className="imgae-pading-hov-ewrwerwe"
                style={{
                  backgroundColor: "#fff",
                  padding: "8px",
                  fontWeight: "bold",
                }}
              >
                Aa
              </div>
              <div
                style={{ fontWeight: "bold", color: "#fff", marginTop: "10px" }}
              >
                Tạo tin dạng văn bản
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryLayout;
