import React from "react";
import "./contentr.css";
import AddIcon from "@mui/icons-material/Add";

const listConversation = [
  {
    image: "/imgs/i1.png",
    name: "PM24.02",
  },
  {
    image: "/imgs/i2.jpg",
    name: "HOLA - TECH",
  },
  {
    image: "/imgs/i3.jpg",
    name: "Nhóm lập trình website(f8.edu.vn)",
  },
  {
    image: "/imgs/i4.jpg",
    name: "Nhóm lớp trưởng , lớp phó PM24.02",
  },
];

const Conversation = () => {
  return (
    <div>
      <div style={{ marginTop: "20px" }} className="contentrightcomponent">
        Cuộc trò chuyện nhóm
      </div>
      {listConversation.map((item, index) => (
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
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          columnGap: "10px",
        }}
      >
        <div
          style={{
            backgroundColor: "#e4e6eb",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#3a3939",
          }}
        >
          <AddIcon />
        </div>
        <div style={{ color: "  #39393a", fontWeight: "bold" }}>
          Tạo nhóm mới
        </div>
      </div>
    </div>
  );
};

export default Conversation;
