import React, { useState } from "react";
import "./search.css";
import Poup from "./Poup";

const SearchIcon = () => {
  const [openPupup, setOpenPupup] = useState(false);
  const handleClickPupup = () => {
    setOpenPupup(true);
  };
  const handleClosePupup = () => {
    setOpenPupup(false);
  };
  return (
    <div className="shareWrapper">
      <div className="shareTop">
        <img src="/imgs/avt.jpg" alt="" className="shareImgProfile" />
        <input
          onClick={handleClickPupup}
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
            <img
              className="tin-imgs"
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/8L2T81pQAIa.png"
            />
            <span className="shareTextVideo">Ảnh/video</span>
          </div>
          <div className="shareBoxVideo">
            <img className="tin-imgs" src="/imgs/icontin3.png" />
            <span className="shareTextVideo">Cảm xúc/hoạt dộng</span>
          </div>
        </div>
      </div>
      <Poup handleClose={handleClosePupup} open={openPupup} />
    </div>
  );
};

export default SearchIcon;
