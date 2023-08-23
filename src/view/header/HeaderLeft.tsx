import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./headercomponent.css";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
import WestIcon from "@mui/icons-material/West";
import { Avatar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const listSearchInput = [
  {
    image: "/imgs/gai1.jpg",
    title: "Minh Ánh",
  },
  {
    image: "/imgs/gai4.jpg",
    title: "Shop quần áo nam - nữ",
  },
  {
    image: "/imgs/gai2.jpg",
    title: "Shop thú cưng",
  },
  {
    image: "/imgs/gai5.jpg",
    title: "Lê Minh Khôi",
  },
  {
    image: "/imgs/gai7.jpg",
    title: "Vũ Việt Hoàng",
  },
  {
    image: "/imgs/gai9.jpg",
    title: "Đảo chó mèo",
  },
];

const HeaderLeft = () => {
  const [openInputSearch, setOpenInputSearch] = useState(false);

  const handleClickInputSearch = () => {
    setOpenInputSearch(true);
  };
  const handleCloseInputSearch = () => {
    setOpenInputSearch(false);
  };

  return (
    <div style={{ marginLeft: "20px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          columnGap: "8px",
          cursor: "pointer",
          position: "relative",
        }}
      >
        <Link to="/">
          <img
            style={{ width: "40px", height: "40px", marginTop: "3px" }}
            src="/imgs/iconfb.png"
          />
        </Link>
        <div onClick={handleClickInputSearch} className="searchMessengerCard">
          <SearchIcon className="searchIcon" />

          <input
            style={{ height: "30px" }}
            placeholder="Tìm kiếm trên facebook"
            className="searchInput"
          />
        </div>

        {/* //pupup search */}

        {openInputSearch && (
          <div className="input-search-container">
            <div className="input-x">
              <div
                className="hover-input-quyalij"
                onClick={handleCloseInputSearch}
              >
                <WestIcon />
              </div>
              <div className="searchMessengerCard">
                <SearchIcon className="searchIcon" />

                <input
                  onClick={handleClickInputSearch}
                  style={{ height: "30px" }}
                  placeholder="Tìm kiếm trên facebook"
                  className="searchInput"
                />
              </div>
            </div>
            <div className="ganday-cs">
              <div style={{ fontWeight: "bold" }}>Gần đây</div>
              <div
                className="hover-ganday-cs"
                style={{
                  color: "#0e8df1",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                Chỉnh sửa
              </div>
            </div>
            {listSearchInput.map((item, index) => (
              <div key={index} className="avt-title-x">
                <div className="avt-title-chlid">
                  <Avatar alt="Remy Sharp" src={item.image} />
                  <div>{item.title}</div>
                </div>
                <div className="x-child">
                  <CloseIcon style={{ fontSize: "17px", opacity: "0.8" }} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderLeft;
