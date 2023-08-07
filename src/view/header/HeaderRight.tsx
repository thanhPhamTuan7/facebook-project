import React from "react";
import { Iconfb6, Iconfb7, Iconfb8, Iconfb9 } from "../../pages/icons";
import Avatar from "@mui/material/Avatar";
import "./headercomponent.css";
const listHeaderRight = [
  {
    name: <Iconfb6 />,
    label: "icon6",
  },
  {
    name: <Iconfb8 />,
    label: "icon8",
  },
  {
    name: <Iconfb9 />,
    label: "icon9",
  },
];

const HeaderRight = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        marginRight: "10px",
        columnGap: "12px",
        cursor: "pointer",
      }}
    >
      {listHeaderRight.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#e4e6eb",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {item.name}
        </div>
      ))}

      <Avatar alt="Remy Sharp" src="/imgs/avt.jpg" />
    </div>
  );
};

export default HeaderRight;
