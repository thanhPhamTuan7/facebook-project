import React from "react";
import "./pocup.css";
import { Avatar } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import PhoneIcon from "@mui/icons-material/Phone";
import VideocamIcon from "@mui/icons-material/Videocam";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import CloseIcon from "@mui/icons-material/Close";
import { IconMess1, IconMess2, IconTin } from "../../pages/icons";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const listTinNhanTraLoi = [
  {
    title: "Hello !",
    avt: "/imgs/gai1.jpg",
  },
  {
    title: "Hello !",
    avt: "/imgs/gai1.jpg",
  },
  {
    title: "Hello !",
    avt: "/imgs/gai1.jpg",
  },
  {
    title: "Hello !",
    avt: "/imgs/gai1.jpg",
  },
  {
    title: "Hello !",
    avt: "/imgs/gai1.jpg",
  },
];

const PocupMessage = () => {
  return (
    <div className="pocup-message">
      <div className="top-top">
        <div className="top-child-t">
          <Avatar alt="Remy Sharp" src="/imgs/gai1.jpg" />
          <div>
            <div style={{ fontWeight: "bold" }}>Minh Ánh</div>

            <div style={{ fontSize: "13px", opacity: "0.7px" }}>
              Hoạt động 6 phút trước
            </div>
          </div>
        </div>
        {/* top-right */}
        <div className="top-right">
          <div className="icon-top-right">
            <PhoneIcon />
          </div>
          <div className="icon-top-right">
            <VideocamIcon />
          </div>
          <div className="icon-top-right">
            <HorizontalRuleIcon />
          </div>
          <div className="icon-top-right">
            <CloseIcon />
          </div>
        </div>
      </div>
      <div className="pocup-center">
        {listTinNhanTraLoi.map((item, index) => (
          <div className="tinnhan-ccontainer">
            <div className="tinnhanme-container-right">
              <div className="tinnhan-me">{item.title}</div>
            </div>

            <div className="tinnhanme-container-left">
              <div>
                <Avatar
                  style={{ width: "35px", height: "35px" }}
                  alt="Remy Sharp"
                  src="/imgs/gai1.jpg"
                />
              </div>
              <div className="tinnhan-you">{item.title}</div>
            </div>
          </div>
        ))}
      </div>

      {/* 
      //bottom */}

      <div className="bottom-chat">
        <div className="icon-left">
          <IconTin />
        </div>
        <div>
          <img
            className="icon-img"
            src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/8L2T81pQAIa.png"
          />
        </div>
        <div className="icon-svg">
          <IconMess1 />
        </div>
        <div className="icon-svg">
          <IconMess2 />
        </div>

        <div style={{}}>
          <input
            placeholder="Aa"
            style={{
              border: "none",
              outline: "none",
              fontWeight: "bold",
              opacity: "0.7",
              backgroundColor: "#e6e7e9",
              padding: "8px",
              borderRadius: "50px",
            }}
          />
        </div>
        <ThumbUpIcon style={{ opacity: "0.5" }} />
      </div>
    </div>
  );
};

export default PocupMessage;
