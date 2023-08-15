import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import SwitchRightIcon from "@mui/icons-material/SwitchRight";
import "./noteend.css";

const NoteEnd = () => {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        columnGap: "2px",
        lineHeight: 1.3,
        fontSize: "13px",
        fontWeight: "600",
        color: "#9a9ca0",
        opacity: "0.7",
      }}
    >
      <div className="text-bottom">Quyền riêng tư</div>
      <div className="text-bottom">.</div>
      <div className="text-bottom">Điều khoản</div>
      <div className="text-bottom">.</div>
      <div className="text-bottom">Quảng cáo</div>
      <div className="text-bottom">.</div>
      <div className="text-bottom">Lựa chọn quảng cáo</div>
      <div className="text-bottom">.</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          columnGap: "2px",
        }}
        className="text-bottom"
      >
        Quyền riêng tư
        <SwitchRightIcon />
      </div>
      <div className="text-bottom">.</div>
      <div className="text-bottom">Cookie</div>
      <div className="text-bottom">.</div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          columnGap: "2px",
        }}
        className="text-bottom"
      >
        Xem thêm <CopyrightIcon /> 2023
      </div>
    </div>
  );
};

export default NoteEnd;
