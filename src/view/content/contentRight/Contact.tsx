import React from "react";
import "./contentr.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import VideoCallRoundedIcon from "@mui/icons-material/VideoCallRounded";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const listContant = [
  {
    image: "/imgs/it1.jpg",
    name: "Minh Ánh",
  },
  {
    image: "/imgs/it2.jpg",
    name: "Nguyễn Thị Hà Thu",
  },
  {
    image: "/imgs/it3.jpg",
    name: "Tuấn Phương",
  },
  {
    image: "/imgs/it4.jpg",
    name: "Phạm Bảo Khánh",
  },
  {
    image: "/imgs/it5.jpg",
    name: "Nguyễn Trần Trung Quân",
  },
  {
    image: "/imgs/it6.jpg",
    name: "Nguyễn Văn Nam",
  },
  {
    image: "/imgs/it7.jpg",
    name: "Đào Thị Quỳnh",
  },
  {
    image: "/imgs/it8.jpg",
    name: "Phạm Văn Quân",
  },
  {
    image: "/imgs/it9.jpg",
    name: "Nguyễn Thị Thơm",
  },
  {
    image: "/imgs/it10.jpg",
    name: "Phan Thị Hằng",
  },
];

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
      {listContant.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
            columnGap: "10px",
          }}
        >
          <div className="contact">
            <img
              style={{
                width: "35px",
                height: "35px",
                borderRadius: "50%",
              }}
              src={item.image}
            />
            <div className="background"></div>
          </div>
          <div
            style={{
              fontWeight: "bold",
              color: "#39393a",
            }}
          >
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contact;
