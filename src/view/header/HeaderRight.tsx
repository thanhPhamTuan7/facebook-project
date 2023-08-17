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
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import RadioIcon from "@mui/icons-material/Radio";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TourIcon from "@mui/icons-material/Tour";
import CampaignIcon from "@mui/icons-material/Campaign";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import EventIcon from "@mui/icons-material/Event";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Link } from "react-router-dom";

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
    label: 1,
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

const listMenuTop = [
  {
    icon: <EditCalendarIcon />,
    title: "Đăng bài",
  },
  {
    icon: <AutoStoriesIcon />,
    title: "Tin",
  },
  {
    icon: <RadioIcon />,
    title: "Thước phim",
  },
  {
    icon: <YouTubeIcon />,
    title: "Phòng họp mặt",
  },
];

const listMenuBottom = [
  {
    icon: <TourIcon />,
    title: "Trang",
  },
  {
    icon: <CampaignIcon />,
    title: "Quảng cáo",
  },
  {
    icon: <PeopleOutlineIcon />,
    title: "Nhóm",
  },
  {
    icon: <EventIcon />,
    title: "Sự kiện",
  },
  {
    icon: <ShoppingBagIcon />,
    title: "Bài niêm yết trên Marketplace",
  },
];

const listMenuLeftTop = [
  {
    imgs: "https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/XXwl2m1vjqM.png",
    title: "Sự kiện",
    label:
      " Tổ chức hoặc tìm sự kiện cùng những hoạt động khác trên mạng và ở quanh đây",
  },
  {
    imgs: "https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/-UR-mdYpyXa.png",
    title: "Bạn bè",
    label: " Tìm kiếm bạn bè hoặc những người bạn có thể biết",
  },

  {
    imgs: "https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/NCc4ln3EAaS.png",
    title: "Nhóm",
    label: " Kết nối với những người cùng chung sở thích",
  },
  {
    imgs: "https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/E__N70WXrPM.png",
    title: "Bảng tin",
    label: " Xem bài viết phù hợp của những người và Trang bạn theo dõi",
  },
  {
    imgs: "https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/3dN1QwOLden.png",
    title: "Bảng feed",
    label: " Xem bài viết gần đây nhất từ bạn bè , nhóm , Trang và hơn thế nữa",
  },
  {
    imgs: "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/2QQIoQlVGnh.png",
    title: "Trang",
    label: "Khám phá và kết nối với các doanh nghiệp trên Facebook",
  },
];

const listMenuLeftTop2 = [
  {
    imgs: "https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/eVgQ0NIygAW.png",
    title: "Video chơi game",
    label:
      " Xem và kết nối vói những game và người phát trực tiếp mà bạn yêu thích",
  },
  {
    imgs: "https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/Tvf-JvODx7o.png",
    title: "Chơi game",
    label: " Chơi game mà bạn yêu thích",
  },

  {
    imgs: "https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/8L2T81pQAIa.png",
    title: "Video",
    label:
      " Đích đến của video phù hợp với sở thích và quan hệ kết nối của bạn",
  },
];
const listMenuLeftTop3 = [
  {
    imgs: "https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/xH4w-lk44we.png",
    title: "Đơn đặt hàng và thanh toán",
    label:
      " Một cách dễ dàng và bảo mật để thanh toán trên các ứng dụng bạn đang dùng",
  },
  {
    imgs: "https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/rEk7fp0z5AA.png",
    title: "Marketplace",
    label: " Mua bán trong cộng đồng của bạn",
  },
];
const listMenuLeftTop4 = [
  {
    imgs: "https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/VaQGECnx1Us.png",
    title: "Hoạt động quảng cáo gần đây",
    label: " Xem toàn bộ quảng cáo mà người dùng đã tương tác trên facebook",
  },
  {
    imgs: "https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/AYj2837MmgX.png",
    title: "Kỷ niệm",
    label: " Lướt xem ảnh video và bài viết cũ của bạn trên facebook",
  },

  {
    imgs: "https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/X1wwBNSCk5F.png",
    title: "Đã lưu",
    label: " Tìm bài viết , ảnh và video mà bạn lưu vào xem sau",
  },
];
const listMenuLeftTop5 = [
  {
    imgs: "https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/tx2VFwUKc-K.png",
    title: "Trình quản lý quảng cáo",
    label: " Tạo quảng cáo và theo dõi hiệu quả quảng cáo",
  },
  {
    imgs: "https://static.xx.fbcdn.net/rsrc.php/v3/yl/r/_JPdPzLmp9j.png",
    title: "Trung tâm quảng cáo",
    label:
      " Dùng các tính năng đơn giản hơn để quản lý mọi quảng cáo của bạn trên trang",
  },
];
const listMenuLeftTop6 = [
  {
    imgs: "https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/9LIH24rbn9J.png",
    title: "Hiến máu",
    label: " Cập nhật thông tin và hoạt động hiến máu ở gần bạn",
  },
  {
    imgs: "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/tKwWVioirmj.png",
    title: "Trung tâm khoa học khí hậu",
    label: "Tìm hiểu về vấn đề biến đổi khí hậu và tác động của hiện tượng này",
  },

  {
    imgs: "https://static.xx.fbcdn.net/rsrc.php/v3/yi/r/eChFgZ345zp.png",
    title: "Ứng phó khẩn cấp",
    label:
      "Tìm thông tin mới nhất về các cuộc khủng hoảng đang diễn ra trên thế giới",
  },
  {
    imgs: "https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/E_ZpLgQOkZb.png",
    title: "Chiến dịch gây quỹ",
    label: "Quyên góp và gây quỹ cho tổ chức phi lợi nhuận và mục đích cá nhân",
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
              onClick={handleClickMenu}
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
                className="fasfsdfdsf"
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

      <div
        className="trangcanhanclick"
        onClick={handleClickPresonPage}
        style={{ position: "relative" }}
      >
        <Avatar alt="Remy Sharp" src="/imgs/avt.jpg" />
      </div>

      {/* //trangcanhan */}

      {openPersonPage && (
        <div className="thsdnfshdghj" style={{}}>
          <div className="chilren-thdfs">
            <Link style={{ textDecoration: "none" }} to="/about">
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
            </Link>
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
              <div className="fdsfdsfdf">
                <div style={{ color: "#fff", padding: "2px 4px 2px 4px" }}>
                  3
                </div>
              </div>
            </div>
          </div>
          {/* //thanh cong cu */}
          {listToolBar.map((item, index) => (
            <div>
              {item.label === 1 ? (
                <Link
                  style={{
                    textDecoration: "none",
                  }}
                  to="/login"
                >
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
                </Link>
              ) : (
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
              )}
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

          <div style={{ marginTop: "5px" }} className="searchMessengerCard">
            <SearchIcon className="searchIcon" />
            <input
              style={{ height: "30px" }}
              placeholder="Tìm kiếm trên facebook"
              className="searchInput"
            />
          </div>

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

      {/* //menu */}

      {openMenu && (
        <div className="thanhthanh-cotaner">
          <div style={{ fontWeight: "bold", fontSize: "20px" }}>Menu</div>

          <div className="menu-container">
            <div className="menu-left">
              <div className="searchMessengerCard">
                <SearchIcon className="searchIcon" />
                <input
                  style={{ height: "30px" }}
                  placeholder="Tìm kiếm trong menu"
                  className="searchInput"
                />
              </div>
              <div
                style={{ marginTop: "20px", fontSize: "19px" }}
                className="dang"
              >
                Xã hội
              </div>
              {listMenuLeftTop.map((item, index) => (
                <div
                  key={index}
                  className="hover-menu-left"
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    columnGap: "10px",
                  }}
                >
                  <div>
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src={item.imgs}
                    />
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold" }}>{item.title}</div>
                    <div style={{ opacity: "0.7", fontSize: "14px" }}>
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
              <div className="border"></div>
              <div
                style={{ marginTop: "20px", fontSize: "19px" }}
                className="dang"
              >
                Giải trí
              </div>
              {listMenuLeftTop2.map((item, index) => (
                <div
                  key={index}
                  className="hover-menu-left"
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    columnGap: "10px",
                  }}
                >
                  <div>
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src={item.imgs}
                    />
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold" }}>{item.title}</div>
                    <div style={{ opacity: "0.7", fontSize: "14px" }}>
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
              {/* //fdsfsdf */}
              <div className="border"></div>
              <div
                style={{ marginTop: "20px", fontSize: "19px" }}
                className="dang"
              >
                Mua sắm
              </div>
              {listMenuLeftTop3.map((item, index) => (
                <div
                  key={index}
                  className="hover-menu-left"
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    columnGap: "10px",
                  }}
                >
                  <div>
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src={item.imgs}
                    />
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold" }}>{item.title}</div>
                    <div style={{ opacity: "0.7", fontSize: "14px" }}>
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
              {/* /fsdfsdfdsf */}
              <div className="border"></div>
              <div
                style={{ marginTop: "20px", fontSize: "19px" }}
                className="dang"
              >
                Cá nhân
              </div>
              {listMenuLeftTop4.map((item, index) => (
                <div
                  key={index}
                  className="hover-menu-left"
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    columnGap: "10px",
                  }}
                >
                  <div>
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src={item.imgs}
                    />
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold" }}>{item.title}</div>
                    <div style={{ opacity: "0.7", fontSize: "14px" }}>
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
              {/* //sdfsdfd */}
              <div className="border"></div>
              <div
                style={{ marginTop: "20px", fontSize: "19px" }}
                className="dang"
              >
                Chuyên nghiệp
              </div>
              {listMenuLeftTop5.map((item, index) => (
                <div
                  key={index}
                  className="hover-menu-left"
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    columnGap: "10px",
                  }}
                >
                  <div>
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src={item.imgs}
                    />
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold" }}>{item.title}</div>
                    <div style={{ opacity: "0.7", fontSize: "14px" }}>
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
              {/* //fsdfsdfsdfd */}
              <div className="border"></div>
              <div
                style={{ marginTop: "20px", fontSize: "19px" }}
                className="dang"
              >
                Nguồn lực cho cộng đồng
              </div>
              {listMenuLeftTop6.map((item, index) => (
                <div
                  key={index}
                  className="hover-menu-left"
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    columnGap: "10px",
                  }}
                >
                  <div>
                    <img
                      style={{ width: "40px", height: "40px" }}
                      src={item.imgs}
                    />
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold" }}>{item.title}</div>
                    <div style={{ opacity: "0.7", fontSize: "14px" }}>
                      {item.label}
                    </div>
                  </div>
                </div>
              ))}
              <div className="border"></div>
              <div
                style={{ marginTop: "20px", fontSize: "19px" }}
                className="dang"
              >
                Sản phẩm khác của Meta
              </div>
              <div
                className="hover-menu-left"
                style={{
                  marginTop: "10px",
                  display: "flex",
                  columnGap: "10px",
                }}
              >
                <div>
                  <img
                    style={{ width: "40px", height: "40px" }}
                    src="https://static.xx.fbcdn.net/rsrc.php/v3/yL/r/-ZRs50L5kHA.png"
                  />
                </div>
                <div>
                  <div style={{ fontWeight: "bold" }}>Messager nhí</div>
                  <div style={{ opacity: "0.7", fontSize: "14px" }}>
                    Cho phép bé nhắn tin với bạn thân và gia đình
                  </div>
                </div>
              </div>
              <div style={{ marginTop: "50px" }}>
                <div></div>
              </div>
            </div>

            <div className="menu-right">
              <div style={{ fontWeight: "bold", fontSize: "18px" }}>Tạo</div>
              {listMenuTop.map((item, index) => (
                <div key={index} className="menu-right-child">
                  <div className="backgrond-menu-right-child">{item.icon}</div>
                  <div className="dang">{item.title}</div>
                </div>
              ))}
              <div className="border"></div>
              {listMenuBottom.map((item, index) => (
                <div key={index} className="menu-right-child">
                  <div className="backgrond-menu-right-child">{item.icon}</div>
                  <div className="dang">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderRight;
