import React from "react";
import "./person.css";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonLeft from "../../view/person/person-left/PersonLeft";
import PersonRight from "../../view/person/person-right/PersonRight";
import Header from "../header";

const PersonPage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div style={{ paddingBottom: "50px" }}>
        {/* //header-person */}

        <div className="person-page">
          <div style={{ position: "relative" }} className="person-bg">
            <img
              style={{ cursor: "pointer" }}
              className="person-img"
              src="/imgs/anhbiadep.jpg"
            />

            <div>
              <div
                className="position-avatar"
                style={{
                  backgroundColor: "#00000066",
                  top: "220px",
                  right: "150px",
                  position: "absolute",
                }}
              >
                Tạo với avatar
              </div>
            </div>

            <div>
              <div
                className="position-avatar"
                style={{
                  backgroundColor: "#00000066",
                  top: "280px",
                  right: "155px",
                  position: "absolute",
                }}
              >
                Thêm ảnh bìa
              </div>
            </div>
          </div>

          {/* //header-person-left */}

          <div className="person-profile">
            <div className="person-left-center">
              <div className="person-avatart">
                <img
                  style={{ cursor: "pointer" }}
                  src="/imgs/avt.jpg"
                  className="person-avt"
                />
                <div className="person-avt-child">
                  <CameraAltIcon />
                </div>
              </div>
              <div style={{ lineHeight: 1.6 }} className="person-name">
                <div className="profle-person-title">Phạm Tuấn Thanh</div>
                <div className="profle-person-label">634 bạn bè</div>
                <div style={{ marginTop: "5px" }}>
                  <img
                    className="imgs-bb"
                    style={{ width: "32px", height: "32px" }}
                    src="/imgs/gai1.jpg"
                  />
                  <img
                    className="imgs-bb"
                    style={{ width: "32px", height: "32px" }}
                    src="/imgs/gai2.jpg"
                  />
                  <img
                    className="imgs-bb"
                    style={{ width: "32px", height: "32px" }}
                    src="/imgs/gai3.jpg"
                  />
                  <img
                    className="imgs-bb"
                    style={{ width: "32px", height: "32px" }}
                    src="/imgs/gai4.jpg"
                  />
                  <img
                    className="imgs-bb"
                    style={{ width: "32px", height: "32px" }}
                    src="/imgs/gai5.jpg"
                  />
                  <img
                    className="imgs-bb"
                    style={{ width: "32px", height: "32px" }}
                    src="/imgs/gai6.jpg"
                  />
                  <img
                    className="imgs-bb"
                    style={{ width: "32px", height: "32px" }}
                    src="/imgs/gai7.jpg"
                  />
                  <img
                    className="imgs-bb"
                    style={{ width: "32px", height: "32px" }}
                    src="/imgs/gai8.jpg"
                  />
                </div>
              </div>
            </div>

            {/* //header-person-right */}

            <div className="person-right">
              <div>
                <div
                  className="person-right-add"
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Thêm vào tin
                </div>
              </div>
              <div className="person-right-right">
                <EditIcon />
                <div
                  style={{
                    fontWeight: "bold",
                    color: "#172045",
                    cursor: "pointer",
                  }}
                >
                  Chỉnh sửa trang cá nhân
                </div>
              </div>
            </div>
          </div>
          <div className="border-person"></div>
          <div className="list-friend-container">
            <div style={{ marginTop: "5px" }} className="list-friend">
              <div className="firend">Bài viết</div>
              <div className="firend">Giới thiệu</div>
              <div className="firend">Bạn bè</div>
              <div className="firend">Ảnh</div>
              <div className="firend">Video</div>
              <div className="firend">Check in</div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
                className="firend"
              >
                Xem thêm
                <ArrowDropDownIcon />
              </div>
            </div>

            <div style={{ marginTop: "5px" }} className="icon-preson">
              <MoreHorizIcon />
            </div>
          </div>
        </div>

        {/* //content-person */}

        <div className="content-person">
          <PersonLeft />
          <PersonRight />
        </div>
      </div>
    </div>
  );
};

export default PersonPage;
