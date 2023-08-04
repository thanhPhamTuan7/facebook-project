import Avatar from "@mui/material/Avatar";
import React from "react";
import GroupIcon from "@mui/icons-material/Group";
import "./contentLeft.css";

const listSlideLeft = [
  {
    icon: "/imgs/3.png",
    name: "Bạn bè",
  },
  {
    icon: "/imgs/4.png",
    name: "Nhóm",
  },
  {
    icon: "/imgs/5.png",
    name: "Sự kiện",
  },
  {
    icon: "/imgs/6.png",
    name: "Bảng feed",
  },
  {
    icon: "/imgs/7.png",
    name: "Marketplace",
  },
  {
    icon: "/imgs/8.png",
    name: "Chiến dịch gây quỹ",
  },
  {
    icon: "/imgs/9.png",
    name: "Chơi game",
  },
  {
    icon: "/imgs/10.png",
    name: "Đã lưu",
  },
  {
    icon: "/imgs/11.png",
    name: "Đặt hàng",
  },
  {
    icon: "/imgs/12.png",
    name: "Xem thêm",
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
    <div style={{ marginLeft: "10px" }} className="contentleft">
      <div>
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
                padding: "0 10px",
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
