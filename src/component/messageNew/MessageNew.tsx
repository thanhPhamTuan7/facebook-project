import React, { useState } from "react";
import "./message.css";
import LaunchIcon from "@mui/icons-material/Launch";
import ClearIcon from "@mui/icons-material/Clear";
import { Avatar } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const MessageNew = () => {
  const [openMessageNew, setOpenMessageNew] = useState(false);
  const handleClick = () => {
    setOpenMessageNew(!openMessageNew);
  };
  const handleClose = () => {
    setOpenMessageNew(false);
  };

  const [openInputFriend, setOpenInputFriend] = useState(false);
  const handleClickFriend = () => {
    setOpenInputFriend(!openInputFriend);
  };
  const handleCloseFriend = () => {
    setOpenInputFriend(false);
  };

  return (
    <div>
      <div onClick={handleClick} className="message-fielx">
        <LaunchIcon />
      </div>
      {/* 
      //fdsfsdf */}
      {openMessageNew && (
        <div
          className="fdsfdse"
          style={{
            backgroundColor: "#fff",
            position: "fixed",
            bottom: "0px",
            right: "150px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 16px",
            }}
          >
            <div style={{ fontWeight: "bold" }}>Tin nhắn mới</div>
            <div
              onClick={handleClose}
              className="hover-icon-clear"
              style={{
                opacity: "0.7",
                padding: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ClearIcon />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: "15px", padding: "8px 16px" }}>Đến:</div>
            <div>
              <input
                onClick={handleClickFriend}
                style={{
                  border: "none",
                  outline: "none",
                  opacity: "0.7",
                  fontSize: "15px",
                }}
              />
            </div>
          </div>
          <div style={{ border: "1px solid #e4e6eb", marginTop: "10px" }}></div>

          {openInputFriend && (
            <div>
              <div style={{ padding: "16px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ fontWeight: "bold" }}>Người khác</div>
                  <div
                    onClick={handleCloseFriend}
                    className="hover-icon-clear"
                    style={{
                      opacity: "0.7",
                      padding: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <DeleteOutlineIcon />
                  </div>
                </div>

                <div
                  className="hover-imgs-flex"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "10px",
                    marginTop: "10px",
                  }}
                >
                  <Avatar alt="Remy Sharp" src="/imgs/gai111.jpg" />
                  <div style={{}}>
                    <div>Vũ Việt Hoàng</div>
                    <div style={{ fontSize: "14px", opacity: "0.7" }}>
                      Làm việc tại Moscava
                    </div>
                  </div>
                </div>
                <div
                  className="hover-imgs-flex"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "10px",
                    marginTop: "10px",
                  }}
                >
                  <Avatar alt="Remy Sharp" src="/imgs/gai5.jpg" />
                  <div style={{}}>
                    <div>Tuấn Nguyễn</div>
                    <div style={{ fontSize: "14px", opacity: "0.7" }}>
                      Làm việc tại Moscava
                    </div>
                  </div>
                </div>
              </div>

              {/* //fixcung */}
              <div style={{ padding: "16px" }}>
                <div style={{ fontWeight: "bold" }}>
                  Tài khoản khác trên Instagrams
                </div>
                <div
                  className="hover-imgs-flex"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "10px",
                    marginTop: "10px",
                  }}
                >
                  <Avatar alt="Remy Sharp" src="/imgs/avt.jpg" />
                  <div style={{}}>
                    <div>Critiano Ronaldo</div>
                    <div style={{ fontSize: "14px", opacity: "0.7" }}>
                      I from Bồ Đào Nha
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* //xong */}
        </div>
      )}
    </div>
  );
};

export default MessageNew;
