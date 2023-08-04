import React from "react";
import "./contentr.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import VideoCallRoundedIcon from "@mui/icons-material/VideoCallRounded";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Contact = () => {
  return (
    <div>
      <div
        className="contentrightcomponent"
        style={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 2 }}>Người liên hệ</div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flex: 1,
            justifyContent: "space-around",
          }}
        >
          <VideoCallRoundedIcon />
          <SearchRoundedIcon />
          <MoreHorizIcon />
        </div>

        {/* ..... */}
      </div>
      <div className="contact">
        <img
          style={{ width: "35px", height: "35px", borderRadius: "50%" }}
          src="/imgs/15.jpg"
        />
        <div className="background"></div>
      </div>
    </div>
  );
};

export default Contact;
