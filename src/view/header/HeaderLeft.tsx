import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IconSearch, Iconfb1 } from "../../pages/icons";
import SearchIcon from "@mui/icons-material/Search";
import "./headercomponent.css";
const HeaderLeft = () => {
  return (
    <div style={{ marginLeft: "20px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          columnGap: "8px",
          cursor: "pointer",
        }}
      >
        <img style={{ width: "40px", height: "39px" }} src="imgs/iconfb.png" />
        <div className="searchMessengerCard">
          <SearchIcon className="searchIcon" />
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
