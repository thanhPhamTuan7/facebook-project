import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./contentcontent.css";
import { IconBangTin, IconTin } from "../../../pages/icons";
import { Avatar } from "flowbite-react";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PublicIcon from "@mui/icons-material/Public";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ClearIcon from "@mui/icons-material/Clear";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SearchIcon from "../../../component/search-icon/SearchIcon";
import Bangtin from "../../../component/bangtin/Bangtin";
import { Link } from "react-router-dom";

const listStory = [
  {
    imgs: "/imgs/gai1.jpg",
    label: "Phạm T. Thanh",
    imgs_tin: "/imgs/gai5.jpg",
    id: 1,
  },
  {
    imgs: "/imgs/gai2.jpg",
    label: "Lê Chiến",
    imgs_tin: "/imgs/gai6.jpg",
  },
  {
    imgs: "/imgs/gai3.jpg",
    label: "Hoàng Nguyễn",
    imgs_tin: "/imgs/gai7.jpg",
  },
  {
    imgs: "/imgs/gai4.jpg",
    label: "Văn Hòa",
    imgs_tin: "/imgs/gai8.jpg",
  },
];

const ContentContent = () => {
  return (
    <div>
      <div
        className="contentcontent"
        style={{
          backgroundColor: "#fff",
          width: "100%",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        {/* //content tin  */}

        {/* <div>
          <div style={{ padding: "16px" }} className="story">
            <div className="storyTopBox">
              <div className="storyCard">
                <img src="/imgs/gai1.jpg" alt="" className="imgStoryCard" />
                <div className="storyUpload">
                  <div className="iconStory">
                    <div
                      style={{
                        backgroundColor: "#1876f2 ",
                        borderRadius: "50%",
                        padding: "8px 8px 8px 8px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <IconTin />
                    </div>
                  </div>
                  <p className="storyTag">Tạo tin</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {listStory.map((item, index) => (
          <div key={index}>
            {item.id === 1 ? (
              <Link to="/story-layout">
                <div style={{ padding: "16px 16px 16px 16px" }}>
                  <div className="story">
                    <div className="storyTopBox">
                      <div
                        style={{ position: "relative" }}
                        className="storyCard"
                      >
                        <img
                          style={{ objectFit: "cover" }}
                          src={item.imgs}
                          alt=""
                          className="imgStoryCard"
                        />
                        <div
                          style={{
                            position: "absolute",
                            bottom: 5,
                            left: 4,
                            color: "#fff",
                            fontWeight: "bold",
                            fontSize: "14px",
                          }}
                        >
                          {item.label}
                        </div>

                        <div>
                          <div className="contentdsf">
                            <div className="contact">
                              <div
                                style={{
                                  backgroundColor: "#1876f2",
                                  borderRadius: "50%",
                                  padding: "4px 4px 4px 4px",
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <img
                                  style={{
                                    width: "35px",
                                    height: "35px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                  }}
                                  src={item.imgs_tin}
                                />
                              </div>

                              <div className="background"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <div style={{ padding: "16px 16px 16px 16px" }}>
                <div className="story">
                  <div className="storyTopBox">
                    <div style={{ position: "relative" }} className="storyCard">
                      <img
                        style={{ objectFit: "cover" }}
                        src={item.imgs}
                        alt=""
                        className="imgStoryCard"
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 5,
                          left: 4,
                          color: "#fff",
                          fontWeight: "bold",
                          fontSize: "14px",
                        }}
                      >
                        {item.label}
                      </div>

                      <div>
                        <div className="contentdsf">
                          <div className="contact">
                            <div
                              style={{
                                backgroundColor: "#1876f2",
                                borderRadius: "50%",
                                padding: "4px 4px 4px 4px",
                                display: "flex",
                                alignItems: "center",
                              }}
                            >
                              <img
                                style={{
                                  width: "35px",
                                  height: "35px",
                                  borderRadius: "50%",
                                  objectFit: "cover",
                                }}
                                src={item.imgs_tin}
                              />
                            </div>

                            <div className="background"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* //dang bai */}
      <div
        className="contentcontent"
        style={{
          backgroundColor: "#fff",
          width: "100%",
          borderRadius: "10px",
        }}
      >
        <div style={{ padding: "16px 16px 16px 16px", marginTop: "20px" }}>
          <div>
            <SearchIcon />
          </div>
        </div>
      </div>
      {/* // bảng tin .  dữ liệu  */}
      <Bangtin />
    </div>
  );
};

export default ContentContent;
