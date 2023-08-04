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
    name: "Hội anh em lái xe công nghệ ( Grab , Bee , GoJeck , Uber )",
  },
  {
    icon: "/imgs/b5.jpg",
    name: "Hội anh em tài xế Baemin Hà Nội",
  },
];

const ContentLeft = () => {
  return (
    <div
      className="contentleft"
      style={{
        marginLeft: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          columnGap: "10px",
          fontWeight: "bold",
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
          key={index}
          style={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            columnGap: "10px",
            marginTop: "10px",
            marginBottom: "10px",
            color: "#39393a",
            lineHeight: "2",
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
      <div style={{ border: "0.4px solid #dfdada", width: "60%" }}></div>

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
          }}
        >
          Lối tắt của bạn
        </div>
      </div>
      {listShortCuts.map((item, index) => (
        <div
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            columnGap: "10px",
            paddingRight: "100px",
            color: "#39393a",
            fontWeight: "bold",
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
  );
};

export default ContentLeft;
