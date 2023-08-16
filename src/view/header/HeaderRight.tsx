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
import GridViewIcon from "@mui/icons-material/GridView";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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

const ListThongBao = [
  {
    img: "/imgs/avt.jpg",
    title: "Vũ Việt Hoàng",
    label: "Đã chia sẻ bài viết của lang thang xã hội",
  },
  {
    img: "/imgs/avt.jpg",
    title: "Vũ Việt Hoàng",
    label: "Đã chia sẻ bài viết của lang thang xã hội",
  },
  {
    img: "/imgs/avt.jpg",
    title: "Vũ Việt Hoàng",
    label: "Đã chia sẻ bài viết của lang thang xã hội",
  },
  {
    img: "/imgs/avt.jpg",
    title: "Vũ Việt Hoàng",
    label: "Đã chia sẻ bài viết của lang thang xã hội",
  },
  {
    img: "/imgs/avt.jpg",
    title: "Vũ Việt Hoàng",
    label: "Đã chia sẻ bài viết của lang thang xã hội",
  },
  {
    img: "/imgs/avt.jpg",
    title: "Vũ Việt Hoàng",
    label: "Đã chia sẻ bài viết của lang thang xã hội",
  },
  {
    img: "/imgs/avt.jpg",
    title: "Vũ Việt Hoàng",
    label: "Đã chia sẻ bài viết của lang thang xã hội",
  },
  {
    img: "/imgs/avt.jpg",
    title: "Vũ Việt Hoàng",
    label: "Đã chia sẻ bài viết của lang thang xã hội",
  },
  {
    img: "/imgs/avt.jpg",
    title: "Vũ Việt Hoàng",
    label: "Đã chia sẻ bài viết của lang thang xã hội",
  },
  {
    img: "/imgs/avt.jpg",
    title: "Vũ Việt Hoàng",
    label: "Đã chia sẻ bài viết của lang thang xã hội",
  },
];

const ListMessage = [
  {
    imgs: "/imgs/gai1.jpg",
    title: "Minh Ánh",
    label: "Hello . Are you really ?",
    time: "2 ngày trước",
    test: 1,
  },
  {
    imgs: "/imgs/gai2.jpg",
    title: "Vũ Việt Hoàng",
    label: "Hello . Are you really ?",
    time: "2 ngày trước",
    test: 1,
  },
  {
    imgs: "/imgs/gai3.jpg",
    title: "Long Văn Chu",
    label: "Hello . Are you really ?",
    time: "2 ngày trước",
  },
  {
    imgs: "/imgs/gai4.jpg",
    title: "Lê Chiến",
    label: "Hello . Are you really ?",
    time: "2 ngày trước",
  },
  {
    imgs: "/imgs/gai5.jpg",
    title: "Nguyễn Phương Thảo",
    label: "Hello . Are you really ?",
    time: "2 ngày trước",
    test: 1,
  },
  {
    imgs: "/imgs/gai6.jpg",
    title: "Đặng Minh Quân",
    label: "Hello . Are you really ?",
    time: "2 ngày trước",
  },
  {
    imgs: "/imgs/gai7.jpg",
    title: "Vũ Văn Phước",
    label: "Hello . Are you really ?",
    time: "2 ngày trước",
    test: 1,
  },
  {
    imgs: "/imgs/gai8.jpg",
    title: "Phạm Tuấn Đạt",
    label: "Hello . Are you really ?",
    time: "2 ngày trước",
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

  const [openMessage, setOpenMessage] = useState(false);
  const handleClickMessage = () => {
    setOpenMessage(!openMessage);
  };

  const [openMenu, setOpenMenu] = useState(false);
  const handleClickMenu = () => {
    setOpenMenu(!openMenu);
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
              onClick={handleClickMessage}
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

          <div
            className="hover-thongbao"
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              columnGap: "15px",
            }}
          >
            <div>
              <Avatar
                style={{ width: "56px", height: "56px" }}
                src="/imgs/avt.jpg"
              />
              <div
                style={{
                  position: "absolute",
                  right: "330px",
                  top: "40px",
                  color: "#fff",
                }}
                className="coppy-cat"
              >
                😂
              </div>
            </div>
            <div style={{ lineHeight: "1.3" }}>
              <div>
                <div className="ten">Nguyễn Quang Anh</div>
                <div className="sauten">đã gửi cho bạn lời mời kết bạn.</div>
              </div>
              <div className="opa">6 ngày trước</div>
            </div>
          </div>

          {/* //thongbao */}

          <div
            style={{
              marginTop: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontWeight: "bold", fontSize: "17px" }}>Trước đó</div>
            <div className="xemtataca" style={{ color: "#1b79f2" }}>
              Xem tất cả
            </div>
          </div>

          {ListThongBao.map((item, index) => (
            <div
              className="hover-thongbao"
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                columnGap: "15px",
              }}
            >
              <div>
                <Avatar
                  style={{ width: "56px", height: "56px" }}
                  src="/imgs/avt.jpg"
                />
                <div
                  style={{
                    position: "absolute",
                    right: "330px",
                    top: "40px",
                    color: "#fff",
                    fontSize: "25px",
                  }}
                >
                  💝
                </div>
              </div>
              <div>
                <div>
                  <div className="ten">Long Văn Chu</div>
                  <div className="sauten">
                    đã chia sẻ bài viết của lang thang xã hội
                  </div>
                </div>
                <div
                  style={{
                    color: "#2f83f3",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  6 ngày trước
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#1876f2",
                  borderRadius: "50%",
                  width: "12px",
                  height: "12px",
                }}
              ></div>
            </div>
          ))}

          {/* ///ádfasdasd */}
        </div>
      )}

      {/* //tinnhan */}

      {openMessage && (
        <div className="message-container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontWeight: "bold", fontSize: "19px" }}>Chat</div>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                columnGap: "10px",
              }}
            >
              <div className="dsfsgd">
                <MoreHorizIcon />
              </div>
              <div className="dsfsgd">
                <GridViewIcon />
              </div>
              <div className="dsfsgd">
                <ForwardToInboxIcon />
              </div>
            </Box>
          </div>

          {/* //dfdsf */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: "10px",
              opacity: "0.8",
              backgroundColor: "#f0f2f5",
              padding: "8px 16px 8px 16px",
              marginTop: "10px",
              borderRadius: "20px",
            }}
          >
            <SearchIcon />
            Tìm Kiếm Trên Message
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: "20px",
              marginTop: "20px",
              fontWeight: "bold",
            }}
          >
            <div
              className="hover-hopthu"
              style={{
                padding: "8px 16px 8px 16px",
                backgroundColor: "#e7f3ff",
                color: "#1877f2",
                borderRadius: "15px",
              }}
            >
              Hộp thư
            </div>

            <div
              style={{
                padding: "8px 16px 8px 16px",
                borderRadius: "15px",
              }}
              className="hover-message"
            >
              Cộng đồng
            </div>
          </Box>

          {/* //mess */}
          {ListMessage.map((item, index) => (
            <div
              key={index}
              className="box-mess"
              style={{
                marginTop: "5px",
                display: "flex",
                alignItems: "center",
                columnGap: "10px",
                position: "relative",
                lineHeight: "1.5",
              }}
            >
              <Avatar
                style={{ width: "56px", height: "56px" }}
                src={item.imgs}
              />
              {item.test === 1 && (
                <div
                  style={{
                    position: "absolute",
                    backgroundColor: "#31a24c",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    border: "2px solid #fff",
                    top: "50px",
                    right: "280px",
                  }}
                ></div>
              )}
              <Box>
                <div style={{ fontWeight: "bold" }}>{item.title}</div>
                <div
                  style={{
                    fontSize: "14px",
                    opacity: "0.8",
                    display: "flex",
                    alignItems: "center",
                    columnGap: "5px",
                  }}
                >
                  {item.label}
                  <div>{item.time}</div>
                </div>
              </Box>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderRight;
