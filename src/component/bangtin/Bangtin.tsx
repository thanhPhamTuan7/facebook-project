import React from "react";
import "./bangtin.css";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Avatar from "@mui/material/Avatar";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PublicIcon from "@mui/icons-material/Public";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ClearIcon from "@mui/icons-material/Clear";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { IconBangTin } from "../../pages/icons";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const listNews = [
  {
    avatar: "/imgs/avt.jpg",
    title: "Phạm Tuấn Thanh",
    time: "13 giờ trước",
    content:
      "Có lẽ tới cuối cùng, cũng chỉ mong yêu một người, một tình yêu thật bình thường…Sẽ chẳng phải là cả ngày kè kè bên nhau vì cuộc sống ai cũng sẽ có những mối bận tâm riêng, cái ta cần là bình dị bên những câu hỏi thăm, bên những cử chỉ ân cần. Và đôi khi chỉ là,Ngày hôm nay của em thế nào?",
    image: "/imgs/bv1.jpg",
    like: "232423",
    comment: "254320",
    share: "304230",
  },
  {
    avatar: "/imgs/avt.jpg",
    title: "Phạm Tuấn Thanh",
    time: "1 giờ trước",
    content: "=))",
    image: "/imgs/bv2.jpg",
    like: "223",
    comment: "25450",
    share: "900",
  },
  // {
  //   avatar: "/imgs/i2.jpg",
  //   title: "Phạm Tuấn Thanh",
  //   time: "13 giờ trước",
  //   content: "There are many bat products as smartphones.",
  //   image: "/imgs/i3.jpg",
  //   like: "223",
  //   comment: "250",
  //   share: "300",
  // },
  // {
  //   avatar: "/imgs/i2.jpg",
  //   title: "Phạm Tuấn Thanh",
  //   time: "13 giờ trước",
  //   content: "There are many bat products as smartphones.",
  //   image: "/imgs/i3.jpg",
  //   like: "223",
  //   comment: "250",
  //   share: "300",
  // },
];

const Bangtin = () => {
  return (
    <div>
      {listNews.map((item, index) => (
        <div key={index} className="post">
          <div style={{ marginTop: "10px" }}>
            <div className="postWrapper">
              <div className="postTop">
                <div className="postTopLeft">
                  <img className="postImg" src={item.avatar} />
                  <div className="boxTextPostTopLeft">
                    <span className="postUserName">{item.title}</span>
                    <div className="boxDatePost">
                      <span className="postDate">{item.time}</span>
                      <div className="containetDot">
                        <span className="dot"></span>
                      </div>
                      <Box component="span" className="iconPostDate">
                        <IconBangTin />
                      </Box>
                    </div>
                  </div>
                </div>
                <div className="boxIconPostTop">
                  <div className="postTopRight">
                    <MoreHorizIcon />
                  </div>
                  <div className="iconPostBoxRight">
                    <ClearIcon />
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "-2px" }} className="postcenter">
              <span className="postText">{item.content}</span>
            </div>
            {/* //bai-da-dang */}
            <img
              style={{ marginTop: "-2px" }}
              className="postImg2"
              src={item.image}
              alt=""
            />
            <div className="postBotttom">
              <div className="postBottomLeft">
                <div className="boxLikeIcon">
                  <img
                    src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
                    alt=""
                    className="likeIcon"
                  />
                  <img
                    src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='10.25%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FEEA70'/%3e%3cstop offset='100%25' stop-color='%23F69B30'/%3e%3c/linearGradient%3e%3clinearGradient id='d' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23472315'/%3e%3cstop offset='100%25' stop-color='%238B3A0E'/%3e%3c/linearGradient%3e%3clinearGradient id='e' x1='50%25' x2='50%25' y1='0%25' y2='81.902%25'%3e%3cstop offset='0%25' stop-color='%23FC607C'/%3e%3cstop offset='100%25' stop-color='%23D91F3A'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.921365489 0 0 0 0 0.460682745 0 0 0 0 0 0 0 0 0.35 0'/%3e%3c/filter%3e%3cpath id='b' d='M16 8A8 8 0 110 8a8 8 0 0116 0'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='url(%23d)' d='M3 8.008C3 10.023 4.006 14 8 14c3.993 0 5-3.977 5-5.992C13 7.849 11.39 7 8 7c-3.39 0-5 .849-5 1.008'/%3e%3cpath fill='url(%23e)' d='M4.541 12.5c.804.995 1.907 1.5 3.469 1.5 1.563 0 2.655-.505 3.459-1.5-.551-.588-1.599-1.5-3.459-1.5s-2.917.912-3.469 1.5'/%3e%3cpath fill='%232A3755' d='M6.213 4.144c.263.188.502.455.41.788-.071.254-.194.369-.422.371-.78.011-1.708.255-2.506.612-.065.029-.197.088-.332.085-.124-.003-.251-.058-.327-.237-.067-.157-.073-.388.276-.598.545-.33 1.257-.48 1.909-.604a7.077 7.077 0 00-1.315-.768c-.427-.194-.38-.457-.323-.6.127-.317.609-.196 1.078.026a9 9 0 011.552.925zm3.577 0a8.953 8.953 0 011.55-.925c.47-.222.95-.343 1.078-.026.057.143.104.406-.323.6a7.029 7.029 0 00-1.313.768c.65.123 1.363.274 1.907.604.349.21.342.44.276.598-.077.18-.203.234-.327.237-.135.003-.267-.056-.332-.085-.797-.357-1.725-.6-2.504-.612-.228-.002-.351-.117-.422-.37-.091-.333.147-.6.41-.788z'/%3e%3c/g%3e%3c/svg%3e"
                    alt=""
                    className="likeIcon"
                  />
                </div>
                <span className="postLikeCounter">{item.like}</span>
              </div>
              <div className="postBottomRight">
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "2px",
                  }}
                  className="postCommentText"
                >
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: "bold",
                      opacity: "0.7",
                    }}
                  >
                    {item.comment}
                  </span>
                  <img
                    className="img-bangtin"
                    src="/imgs/binhluan.png"
                    alt="bình luận"
                  />
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                  className="postShareText"
                >
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: "bold",
                      opacity: "0.7",
                    }}
                  >
                    {item.share}
                  </span>
                  <img
                    className="img-bangtin"
                    src="/imgs/chiase.png"
                    alt="chia se"
                  />
                </span>
              </div>
            </div>

            <div className="borderPost"></div>
            <div className="postBottomCenter">
              <div className="boxPostLeft">
                <img
                  src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
                  alt=""
                  className="likeIcon"
                />
                <span
                  style={{
                    color: "#39393a ",
                    fontWeight: "bold",
                    opacity: "0.7",
                  }}
                  className="textLike"
                >
                  Thích
                </span>
              </div>
              <div className="boxPostCenter">
                <img
                  className="img-bangtin"
                  src="/imgs/binhluan.png"
                  alt="bình luận"
                />
                <span
                  style={{
                    color: "#39393a ",
                    fontWeight: "bold",
                    opacity: "0.7",
                  }}
                  className="textComment"
                >
                  Bình luận
                </span>
              </div>
              <div className="boxPostRight">
                <img
                  className="img-bangtin"
                  src="/imgs/chiase.png"
                  alt="chia se"
                />
                <span
                  style={{
                    color: "#39393a ",
                    fontWeight: "bold",
                    opacity: "0.7",
                  }}
                  className="textShare"
                >
                  Chia sẻ
                </span>
              </div>
            </div>
            <div style={{ paddingLeft: "16px" }} className="borderPost"></div>

            <div
              style={{
                padding: "4px 16px 4px 16px",
                display: "flex",
                alignItems: "center",
                columnGap: "10px",
                paddingBottom: "10px",
              }}
            >
              <div
                style={{ position: "relative" }}
                className="trangcanhanclick"
              >
                <Avatar
                  style={{ width: "35px", height: "35px" }}
                  alt="Remy Sharp"
                  src="/imgs/avt.jpg"
                />
              </div>
              <div
                style={{
                  backgroundColor: "#eeeeee",
                  padding: "4px",
                  borderRadius: "50%",
                  width: "10px",
                  height: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "absolute",
                  top: "2000px",
                  left: "560px",
                }}
              >
                <KeyboardArrowDownIcon />
              </div>

              <div
                style={{ paddingLeft: "16px", paddingRight: "16px" }}
                className="searchMessengerCard"
              >
                <input
                  style={{ height: "30px" }}
                  placeholder="Viết bình luận...."
                  className="searchInput"
                />
                <div
                  style={{
                    fontSize: "5px",
                    opacity: "0.7",
                    fontWeight: "bold",
                  }}
                >
                  <SendIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bangtin;
