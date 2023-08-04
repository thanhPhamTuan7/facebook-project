import React from "react";
import "./contentr.css";
import Contact from "./Contact";
import Conversation from "./Conversation";

const listContentRight = [
  {
    image: "/imgs/15.jpg",
    label: "Đăng ký nhận ngay ưu đãi từ IT không giới hạn 84%",
    labelMore: "shoppe.vn",
  },
  {
    image: "/imgs/qq.jpg",
    label: "Miễn phí vip6",
    labelMore: "vip6.vn",
  },
];
const ContentRight = () => {
  return (
    <div className="container">
      <div className="contentrightcomponent" style={{}}>
        Được tài trợ
      </div>
      {listContentRight.map((item, idx) => (
        <div>
          <div
            key={idx}
            style={{
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              columnGap: "10px",
            }}
          >
            <img
              style={{
                borderRadius: "10px",
                width: "100px",
                height: "100px",
                objectFit: "cover",
              }}
              src={item.image}
            />
            <div
              style={{
                fontWeight: "bold",
                color: "#4c4d4e",
              }}
            >
              {item.label}
              <div
                style={{
                  marginTop: "5px",
                  fontSize: "12px",
                  opacity: "0.6",
                }}
              >
                {item.labelMore}
              </div>
            </div>
          </div>
        </div>
      ))}
      <div
        style={{
          border: "0.4px solid #dfdada",
          width: "100%",
          marginTop: "20px",
        }}
      ></div>
      <div>
        <div style={{ marginTop: "20px" }} className="contentrightcomponent">
          Sinh nhật
        </div>
        <div className="contain-happy">
          <img
            style={{
              width: "30px",
              height: "30px",
              objectFit: "cover",
              marginTop: "10px",
            }}
            src="/imgs/happy.png"
          />
          <div className="happy">
            <div className="happyopacity">Hôm nay là sinh nhật của</div>
            <div className="happybold">Phạm Tuấn Thanh</div>
            <div className="happyopacity">và</div>
            <div className="happybold">2 người khác</div>
          </div>
        </div>
        <div
          style={{
            border: "0.4px solid #dfdada",
            width: "100%",
            marginTop: "20px",
          }}
        ></div>
        <Contact />
        <div
          style={{
            border: "0.4px solid #dfdada",
            width: "100%",
            marginTop: "20px",
          }}
        ></div>
        <Conversation />
      </div>
    </div>
  );
};

export default ContentRight;
