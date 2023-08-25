import React, { useState } from "react";
import "./contentr.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import VideoCallRoundedIcon from "@mui/icons-material/VideoCallRounded";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import PocupMessage from "../../header/PocupMessage";

const listContant = [
  {
    image: "/imgs/it1.jpg",
    name: "Minh Ánh",
    label: 1,
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
    name: "Nguyễn Trần Quân",
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
  const [openRunMessage, setOpenRunMessage] = useState(false);
  const handleClickPocupMessage = () => {
    setOpenRunMessage(true);
  };
  const handleClosePocupMessage = () => {
    setOpenRunMessage(false);
  };
  return (
    <div>
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
          <div style={{ flex: 2, padding: "10px 10px" }}>Người liên hệ</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flex: 1,
              columnGap: "5px",
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
          <div>
            {item.label === 1 ? (
              <div
                onClick={handleClickPocupMessage}
                className="contentright-hover"
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  columnGap: "10px",
                  padding: "10px 10px",
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
            ) : (
              <div
                className="contentright-hover"
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  columnGap: "10px",
                  padding: "10px 10px",
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
            )}
          </div>
        ))}
      </div>
      {openRunMessage && (
        <div style={{ marginLeft: "-350px" }}>
          <PocupMessage handleClose={handleClosePocupMessage} />
        </div>
      )}
    </div>
  );
};

export default Contact;
