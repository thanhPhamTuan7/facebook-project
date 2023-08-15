import React, { useState } from "react";
import { Iconfb6, Iconfb7, Iconfb8, Iconfb9 } from "../../pages/icons";
import Avatar from "@mui/material/Avatar";
import "./headercomponent.css";
import { head } from "ramda";
import SettingsIcon from "@mui/icons-material/Settings";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HelpIcon from "@mui/icons-material/Help";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import SmsFailedIcon from "@mui/icons-material/SmsFailed";
import LogoutIcon from "@mui/icons-material/Logout";
import CopyrightIcon from "@mui/icons-material/Copyright";
import SwitchRightIcon from "@mui/icons-material/SwitchRight";
import NoteEnd from "../../component/note-end/NoteEnd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";

const listHeaderRight = [
  {
    name: <Iconfb6 />,
    label: "icon6",
    id: 1,
  },
  {
    name: <Iconfb8 />,
    label: "icon8",
    id: 2,
  },
  {
    name: <Iconfb9 />,
    label: "icon9",
    id: 3,
  },
];

const listToolBar = [
  {
    icon: <SettingsIcon />,
    title: "Cài đặt và quyền riêng tư",
    iconright: <ChevronRightIcon />,
  },
  {
    icon: <HelpIcon />,
    title: "Trợ giúp & hỗ trợ",
    iconright: <ChevronRightIcon />,
  },
  {
    icon: <Brightness2Icon />,
    title: "Màn hình và trợ năng",
    iconright: <ChevronRightIcon />,
  },
  {
    icon: <SmsFailedIcon />,
    title: "Đóng góp ý kiến",
  },
  {
    icon: <LogoutIcon />,
    title: "Đăng xuất",
  },
];
const HeaderRight = () => {
  const [openPersonPage, setOpenPersonPage] = useState(false);
  const handleClickPresonPage = () => {
    setOpenPersonPage(!openPersonPage);
  };

  const [openNotification, setOpenNotification] = useState(false);
  const handleClickNotification = () => {
    setOpenNotification(!openNotification);
  };

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
        <div key={index}>
          {item.id === 1 ? (
            <div
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
          ) : item.id === 2 ? (
            <div
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
          ) : (
            item.id === 3 && (
              <div
                onClick={handleClickNotification}
                style={{
                  backgroundColor: "#e4e6eb",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {item.name}
              </div>
            )
          )}
        </div>
      ))}

      {/* //trangcanhan */}

      <div onClick={handleClickPresonPage} style={{ position: "relative" }}>
        <Avatar alt="Remy Sharp" src="/imgs/avt.jpg" />
      </div>

      {/* //trangcanhan */}

      {openPersonPage && (
        <div className="thsdnfshdghj" style={{}}>
          <div className="chilren-thdfs">
            <div
              className="testtt"
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "10px",
              }}
            >
              <Avatar alt="Remy Sharp" src="/imgs/avt.jpg" />
              <div style={{ fontWeight: "bold", fontSize: "17px" }}>
                Phạm Tuấn Thanh
              </div>
            </div>
            <div className="border-fdsf"></div>
            <div
              className="testtt"
              style={{
                marginTop: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ fontWeight: "bold", color: "#3f8df4" }}>
                Xem tất cả trang cá nhân
              </div>
              <div className="fdsfdsfdf">3</div>
            </div>
          </div>
          {/* //thanh cong cu */}
          {listToolBar.map((item, index) => (
            <div
              className="fsdfdsf-hover"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontWeight: "bold",
                padding: "6px",
                marginTop: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  columnGap: "10px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#e4e6eb",
                    borderRadius: "50%",
                    padding: "6px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {item.icon}
                </div>

                <div style={{ fontWeight: "bold" }}>{item.title}</div>
              </div>
              <div style={{}}>{item.iconright}</div>
            </div>
          ))}

          <NoteEnd />
        </div>
      )}

      {/* //noti */}

      {openNotification && (
        <div className="notifi">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontWeight: "bold", fontSize: "19px" }}>
              Thông báo
            </div>
            <div className="dsfsgd">
              <MoreHorizIcon />
            </div>
          </div>
          <div
            style={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              columnGap: "20px",
              marginTop: "10px",
            }}
          >
            <div className="thongbao-children" style={{ color: " #1b79f2" }}>
              Tất cả
            </div>
            <div className="chuadoc-children">Chưa đọc</div>
          </div>

          <div
            style={{
              marginTop: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontWeight: "bold", fontSize: "17px" }}>
              Lời mời kết bạn
            </div>
            <div className="xemtataca" style={{ color: "#1b79f2" }}>
              Xem tất cả
            </div>
          </div>

          <div>
            <Avatar
              style={{ width: "56px", height: "56px" }}
              src="/imgs/avt.jpg"
            />
            <div style={{ backgroundColor: "#fff" }}>
              <PersonAddOutlinedIcon />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderRight;
