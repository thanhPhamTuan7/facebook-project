import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { PiHouseLineLight } from "react-icons/pi";
import { GrGroup } from "react-icons/gr";
import { PiGameControllerLight } from "react-icons/pi";
import {
  Iconfb2,
  Iconfb3,
  Iconfb4,
  Iconfb5,
  Iconfb6,
  Trochoi,
} from "../../pages/icons";
import { Card } from "flowbite-react";

const HeaderCentent = () => {
  return (
    <div
      style={{
        color: "#7a7c80",
        fontSize: "30px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Iconfb2 />
      <Iconfb3 />
      <Iconfb4 />
      <Iconfb5 />
      <Trochoi />
    </div>
  );
};

export default HeaderCentent;
