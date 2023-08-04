import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IconSearch, Iconfb1 } from "../../pages/icons";
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
        <div
          style={{
            backgroundColor: "#f0f2f5",
            padding: "8px 16px 8px 8px",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <div
            style={{
              color: "#7a7c80",
              display: "flex",
              fontWeight: "600",
              alignItems: "center",
            }}
          >
            <IconSearch />
          </div>
          <div style={{ color: "#7a7c80" }}>Tìm kiếm trên Facebook</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;
