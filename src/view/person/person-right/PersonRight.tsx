import React from "react";
import "./personRight.css";
import SearchIcon from "../../../component/search-icon/SearchIcon";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import DehazeIcon from "@mui/icons-material/Dehaze";
import WindowIcon from "@mui/icons-material/Window";
import Bangtin from "../../../component/bangtin/Bangtin";

const PersonRight = () => {
  return (
    <div style={{ flex: 3 }}>
      <div>
        <div className="content-person-right">
          <div>
            <SearchIcon />
          </div>
        </div>
      </div>

      <div className="conatinenf">
        <div className="content-baiviet">
          <div
            style={{ fontWeight: "bold", fontSize: "18px", marginTop: "3px" }}
          >
            Bài viết
          </div>
          <div
            style={{ display: "flex", alignItems: "center", columnGap: "10px" }}
          >
            <div className="boloc-quanli">
              <SyncAltIcon />
              Bộ lọc
            </div>
            <div className="boloc-quanli">
              <SettingsIcon />
              Quản lí bài viết
            </div>
          </div>
        </div>

        <div style={{ border: "1px solid #e4e6eb", marginTop: "10px" }}></div>

        <div className="ds-bannbe">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "5px",
              fontWeight: "bold",
              opacity: "0.8",
            }}
          >
            <DehazeIcon />
            Xem theo danh sách
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "5px",
              fontWeight: "bold",
              opacity: "0.8",
            }}
          >
            <WindowIcon />
            Chế độ lưới
          </div>
        </div>
      </div>

      {/* //fsdfds */}

      <div>
        {" "}
        <Bangtin />
      </div>
    </div>
  );
};

export default PersonRight;
