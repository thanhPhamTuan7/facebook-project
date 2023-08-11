import React from "react";
import "./search.css";

const SearchIcon = () => {
  return (
    <div className="shareWrapper">
      <div className="shareTop">
        <img src="/imgs/avt.jpg" alt="" className="shareImgProfile" />
        <input
          placeholder="Thanh ơi, bạn đang nghĩ gì thế?"
          className="shareInput"
        />
      </div>
      <div className="shareBorder"></div>
      <div className="shareBottom">
        <div className="shareOptions">
          <div className="shareBoxVideo">
            <img className="tin-imgs" src="/imgs/icontin1.png" />

            <span className="shareTextVideo">Video trực tiếp</span>
          </div>
          <div className="shareBoxVideo">
            <img className="tin-imgs" src="/imgs/icontin3.png" />
            <span className="shareTextVideo">Ảnh/video</span>
          </div>
          <div className="shareBoxVideo">
            <img className="tin-imgs" src="/imgs/icontin3.png" />
            <span className="shareTextVideo">Cảm xúc/hoạt dộng</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchIcon;
