import React from "react";
import "./contentr.css";
import Contact from "./Contact";
import Conversation from "./Conversation";
import { Link } from "@mui/material";
import CakeIcon from "@mui/icons-material/Cake";

const listContentRight = [
  {
    image: "/imgs/15.jpg",
    label: "CLICK ---> Chơi ngay ",
    labelMore: "shoppe.vn",
  },
  {
    image: "/imgs/qq.jpg",
    label: "Miễn phí vip6",
    labelMore: "vip6.vn",
  },
  {
    image:
      "https://scontent.fhan14-2.fna.fbcdn.net/v/t45.1600-4/366131793_23857541982460769_1205621393667233429_n.jpg?stp=cp0_dst-jpg_p296x100_q75_spS444&_nc_cat=108&ccb=1-7&_nc_sid=67cdda&_nc_ohc=FVUn9A40tAIAX_GDRc6&_nc_ht=scontent.fhan14-2.fna&oh=00_AfBw3Mbu5gQ6tKxERzJkN5rzOXMNtTUbCqc7aGWjIhbeDg&oe=64E7B399",
    label: "Miễn phí trẻ em",
    labelMore: "bupffe.vn",
  },
];
const ContentRight = () => {
  return (
    <div style={{ position: "fixed", padding: "0 5px" }} className="container">
      <div className="contentrightcomponent" style={{ padding: "10px 10px" }}>
        Được tài trợ
      </div>

      {listContentRight.map((item, idx) => (
        <div
          style={{
            cursor: "pointer",
            paddingTop: "10px",
            paddingBottom: "10px",
            width: "100%",
            padding: "10px 10px",
          }}
          className="contentright-hover"
        >
          <div
            key={idx}
            style={{
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
        <div
          style={{ marginTop: "10px", padding: "10px 10px" }}
          className="contentrightcomponent"
        >
          Sinh nhật
        </div>
        <div
          style={{
            display: "flex",
            columnGap: "5px",
            marginTop: "10px",
            alignItems: "center",
            padding: "10px 10px",
            cursor: "pointer",
          }}
          className="contentright-hover"
        >
          <div
            style={{
              width: "30px",
              height: "30px",
              objectFit: "cover",
              marginTop: "10px",
            }}
          >
            <CakeIcon />
          </div>

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
