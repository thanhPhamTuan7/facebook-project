import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IconSearch, Iconfb1 } from "../../pages/icons";
import SearchIcon from "@mui/icons-material/Search";
import "./headercomponent.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const HeaderLeft = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(!isLoading);
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
            onClick={handleClick}
            style={{ width: "40px", height: "40px", marginTop: "3px" }}
            src="/imgs/iconfb.png"
          />
        </Link>

        <div className="searchMessengerCard">
          <SearchIcon className="searchIcon" />
          {isLoading && (
            <div style={{}}>
              <div
                className="loading"
                style={{
                  display: "flex",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "50%",
                  padding: "4px",
                  position: "absolute",
                  top: "60px",
                  left: "590px",
                }}
              >
                <CircularProgress />
              </div>
            </div>
          )}
          <input
            style={{ height: "30px" }}
            placeholder="Tìm kiếm trên facebook"
            className="searchInput"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;
