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
import "./headercomponent.css";

const HeaderCentent = () => {
  return (
    <div>
      <div
        style={{
          color: "#7a7c80",
          fontSize: "30px",
          display: "flex",
          width: "100%",
          height: "56px",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div className="heder-center-container">
          <div className="header-center">
            <Iconfb2 />
          </div>
        </div>
        <div className="heder-center-container">
          <div className="header-center">
            <Iconfb3 />
          </div>
        </div>
        <div className="heder-center-container">
          <div className="header-center">
            <Iconfb4 />
          </div>
        </div>
        <div className="heder-center-container">
          <div className="header-center">
            <Iconfb5 />
          </div>
        </div>
        <div className="heder-center-container">
          <div className="header-center">
            <Trochoi />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCentent;
