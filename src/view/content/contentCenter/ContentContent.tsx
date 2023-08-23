import React from "react";
import "./contentcontent.css";
import { IconBangTin, IconTin } from "../../../pages/icons";
import SearchIcon from "../../../component/search-icon/SearchIcon";
import Bangtin from "../../../component/bangtin/Bangtin";
import { Link } from "react-router-dom";

const ContentContent = () => {
  return (
    <div>
      <div
        className="contentcontent"
        style={{
          backgroundColor: "#fff",
          width: "100%",
          borderRadius: "10px",
        }}
      >
        {/* //story tin */}

        <div className="storytin-contaner">
          <Link to="/story-layout" className="stoyry-backgorund">
            <img className="img-story-child" src="/imgs/avt.jpg" />
            <div>
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
          </Link>

          <div className="stoyry-backgorund">
            <img className="imgStoryCard" src="/imgs/gai8.jpg" />
            <div
              style={{
                position: "absolute",
                bottom: 10,
                left: 10,
                color: "#fff",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Nguyễn Huệ
            </div>
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
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    src="/imgs/gai1.jpg"
                  />
                </div>

                <div className="background"></div>
              </div>
            </div>
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
                src="/imgs/gai1.jpg"
              />
            </div>
          </div>

          <div className="stoyry-backgorund">
            <img className="imgStoryCard" src="/imgs/gai7.jpg" />
            <div
              style={{
                position: "absolute",
                bottom: 10,
                left: 10,
                color: "#fff",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Việt Hoàng
            </div>
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
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    src="/imgs/gai2.jpg"
                  />
                </div>

                <div className="background"></div>
              </div>
            </div>
          </div>

          <div className="stoyry-backgorund">
            <img className="imgStoryCard" src="/imgs/gai5.jpg" />
            <div
              style={{
                position: "absolute",
                bottom: 10,
                left: 10,
                color: "#fff",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Minh Ánh
            </div>
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
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    src="/imgs/gai6.jpg"
                  />
                </div>

                <div className="background"></div>
              </div>
            </div>
          </div>
        </div>
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
