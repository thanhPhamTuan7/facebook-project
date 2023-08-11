import React from "react";
import "./person.css";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AddIcon from "@mui/icons-material/Add";
import { GrAdd } from "react-icons/gr";
import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const PersonPage = () => {
  return (
    <div>
      {/* //header-person */}

      <div className="person-page">
        <div className="person-bg">
          <img className="person-img" src="/imgs/i3.jpg" />
        </div>

        {/* //header-person-left */}

        <div className="person-profile">
          <div className="person-left-center">
            <div className="person-avatart">
              <img src="/imgs/avt.jpg" className="person-avt" />
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
                  src="/imgs/avt.jpg"
                />
                <img
                  className="imgs-bb"
                  style={{ width: "32px", height: "32px" }}
                  src="/imgs/avt.jpg"
                />
                <img
                  className="imgs-bb"
                  style={{ width: "32px", height: "32px" }}
                  src="/imgs/avt.jpg"
                />
                <img
                  className="imgs-bb"
                  style={{ width: "32px", height: "32px" }}
                  src="/imgs/avt.jpg"
                />
                <img
                  className="imgs-bb"
                  style={{ width: "32px", height: "32px" }}
                  src="/imgs/avt.jpg"
                />
                <img
                  className="imgs-bb"
                  style={{ width: "32px", height: "32px" }}
                  src="/imgs/avt.jpg"
                />
                <img
                  className="imgs-bb"
                  style={{ width: "32px", height: "32px" }}
                  src="/imgs/avt.jpg"
                />
                <img
                  className="imgs-bb"
                  style={{ width: "32px", height: "32px" }}
                  src="/imgs/avt.jpg"
                />
              </div>
            </div>
          </div>

          {/* //header-person-right */}

          <div className="person-right">
            <div className="person-right-add">
              <AddIcon />
              <div style={{ color: "#fff", fontWeight: "bold" }}>
                Thêm vào tin
              </div>
            </div>
            <div className="person-right-right">
              <EditIcon />
              <div style={{ fontWeight: "bold", color: "#172045" }}>
                Chỉnh sửa trang cá nhân
              </div>
            </div>
          </div>
        </div>
        <div className="border-person"></div>
        <div className="list-friend-container">
          <div className="list-friend">
            <div className="firend">Bài viết</div>
            <div className="firend">Giới thiệu</div>
            <div className="firend">Bạn bè</div>
            <div className="firend">Ảnh</div>
            <div className="firend">Video</div>
            <div className="firend">Check in</div>
            <div className="firend">Xem thêm</div>
          </div>

          <div className="icon-preson">
            <MoreHorizIcon />
          </div>
        </div>
      </div>

      {/* //content-person */}

      <div className="content-person">
        <div className="content-person-left">
          <div style={{ width: "100%" }}>ffff</div>
        </div>
        <div className="content-person-right">
          <div style={{}}>fffff</div>
        </div>
      </div>
    </div>
  );
};

export default PersonPage;
