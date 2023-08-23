import Avatar from "@mui/material/Avatar";
import React from "react";
import GroupIcon from "@mui/icons-material/Group";
import "./contentLeft.css";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const listSlideLeft = [
  {
    icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/-UR-mdYpyXa.png",
    name: "Bạn bè",
  },
  {
    icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/NCc4ln3EAaS.png",
    name: "Nhóm",
  },
  {
    icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/XXwl2m1vjqM.png",
    name: "Sự kiện",
  },
  {
    icon: "https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/AYj2837MmgX.png",
    name: "Bảng feed",
  },
  {
    icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/rEk7fp0z5AA.png",
    name: "Marketplace",
  },
  {
    icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/E_ZpLgQOkZb.png",
    name: "Chiến dịch gây quỹ",
  },
  {
    icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/Tvf-JvODx7o.png",
    name: "Chơi game",
  },
  {
    icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/X1wwBNSCk5F.png",
    name: "Đã lưu",
  },
  {
    icon: "https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/xH4w-lk44we.png",
    name: "Đặt hàng",
  },
  {
    icon: "/imgs/rr.png",
    name: "Xem thêm",
    label: 2,
  },
];

const listShortCuts = [
  {
    icon: "/imgs/b1.jpg",
    name: "Học lập trình web (f8 - fullstack.edu.vn )",
  },
  {
    icon: "/imgs/b2.jpg",
    name: "Việc làm part time Hà Nội",
  },
  {
    icon: "/imgs/b3.jpg",
    name: "Tìm việc làm part time và full time tại Hà Nội",
  },
  {
    icon: "/imgs/b4.jpg",
    name: "Hội anh em  ( Grab , Bee , GoJeck , Uber )",
  },
  {
    icon: "/imgs/b5.jpg",
    name: "Hội anh em tài xế Baemin Hà Nội",
  },
];

const ContentLeft = () => {
  return (
    <div style={{ position: "fixed", width: "300px" }} className="contentleft">
      <div>
        <Link
          style={{
            textDecoration: "none",
          }}
          to="/about"
        >
          <div
            className="avatar"
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "10px",
              fontWeight: "bold",
              height: "45px",
              cursor: "pointer",
              width: "90%",
              padding: "0 10px",
            }}
          >
            <Avatar
              style={{ width: "28px", height: "28px" }}
              alt="Remy Sharp"
              src="/imgs/avt.jpg"
            />
            Phạm Tuấn Thanh
          </div>
        </Link>

        {listSlideLeft.map((item, index) => (
          <div
            className="avatar"
            key={index}
            style={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              columnGap: "10px",
              height: "45px",
              color: "#39393a",
              cursor: "pointer",
              lineHeight: "2",
              width: "90%",
              padding: "0 10px",
            }}
          >
            <img
              style={{
                width: "30px",
                height: "30px",
                objectFit: "cover",
              }}
              src={item.icon}
            />
            <div>{item.name}</div>
          </div>
        ))}
        <div
          style={{
            border: "0.4px solid #dfdada",
            width: "90%",
            marginTop: "10px",
            padding: "0 10px",
          }}
        ></div>
        {/* //phanduoi */}
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              opacity: "0.7",
              color: "#39393a",
              fontSize: "17px",
              width: "90%",
              padding: "0 10px",
            }}
          >
            Lối tắt của bạn
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          {listShortCuts.map((item, index) => (
            <div
              className="avatar"
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "10px",
                color: "#39393a",
                fontWeight: "bold",
                width: "90%",
                padding: "0px 10px",
                height: "55px",
                cursor: "pointer",
              }}
            >
              <img
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "5px",
                  objectFit: "cover",
                }}
                src={item.icon}
              />
              <div>{item.name}</div>
            </div>
          ))}
        </div>

        {/* //bottomleft */}
        <div
          className="botttomleft"
          style={{
            marginTop: "5px",
            fontSize: "12px",
            opacity: "0.6",
            lineHeight: 1.2,
          }}
        >
          Quyền riêng tư . Điều khoản . Quảng cáo . Lựa chọn quảng cáo .Cookie .
          Xem thêm . Meta 2023...
        </div>
      </div>
    </div>
  );
};

export default ContentLeft;
