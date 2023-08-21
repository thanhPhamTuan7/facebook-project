import { Avatar } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./search.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React, { useState } from "react";
import PopupChild from "./PopupChild";
import CloseIcon from "@mui/icons-material/Close";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

interface Props {
  handleClose: () => void;
  open: boolean;
}

const Poup = ({ handleClose, open }: Props) => {
  const [openPopupChild, setOpenPopupChild] = useState(false);

  const handleClickPopupChild = () => {
    setOpenPopupChild(true);
  };
  const handleClosePopupChild = () => {
    setOpenPopupChild(false);
  };

  return (
    <div>
      <Dialog
        sx={{ marginTop: "30px" }}
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="close-x" onClick={handleClose} style={{}}>
          <CloseIcon />
        </div>
        <DialogTitle
          sx={{ fontWeight: "bold", textAlign: "center", fontSize: "20px" }}
          id="alert-dialog-title"
        >
          Tạo bài viết
        </DialogTitle>
        <div style={{ border: "1px solid #ececec" }}></div>
        <DialogContent>
          <DialogContentText
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: "10px",
              cursor: "pointer",
            }}
            id="alert-dialog-description"
          >
            <Avatar className="fdsfdsfdsf" src="/imgs/avt.jpg" />
            <div
              onClick={handleClickPopupChild}
              style={{ fontWeight: "bold  " }}
            >
              <div style={{ fontWeight: "bold" }}>Phạm Tuấn Thanh</div>
              <div
                style={{
                  backgroundColor: "#eeeeee",
                  display: "flex",
                  alignItems: "center",
                  columnGap: "5px",
                  padding: "4px 6px 4px 6px",
                  borderRadius: "10px",
                  fontSize: "14px",
                }}
              >
                <img
                  style={{ width: "15px", height: "15px" }}
                  src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/L39Daxsxmmw.png"
                />
                <div>Công khai</div>
                <KeyboardArrowDownIcon />
              </div>
            </div>
          </DialogContentText>
          <div style={{ marginTop: "20px" }}>
            <input
              style={{
                outline: "none",
                border: "none",
                width: "100%",
                fontSize: "25px",
              }}
              placeholder="Thanh ơi , bạn đang nghĩ gì thế ?"
            />
          </div>

          {/* //upload anh */}
          <div className="hover-image-uplaod" style={{}}>
            <div className="hover-bg-img" style={{}}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div
                  className="upload-anh"
                  style={{
                    backgroundColor: "#e4e6eb",
                    padding: "12px ",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AddToPhotosIcon />
                </div>
                <div
                  style={{
                    fontWeight: "bold",
                    marginTop: "5px",
                  }}
                >
                  Thêm ảnh/video
                </div>
                <div
                  style={{
                    opacity: "0.7",
                    fontSize: "13px",
                  }}
                >
                  hoặc kéo và thả
                </div>
              </div>
            </div>

            <div className="dtdd1">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "5px",
                }}
              >
                <div
                  className="upload-anh"
                  style={{
                    backgroundColor: "#e4e6eb",
                    padding: "12px ",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <PhoneAndroidIcon />
                </div>
                <div style={{ opacity: "0.7", fontSize: "13px" }}>
                  Thêm ảnh và video từ thiết bị di động
                </div>
              </div>

              <div
                className="hover-them"
                style={{
                  backgroundColor: "#e4e6eb",
                  fontWeight: "bold",
                  padding: "8px 16px",
                  borderRadius: "5px",
                }}
              >
                Thêm
              </div>
            </div>
          </div>
          {/* //fsdfdsf */}
          <div
            style={{
              marginTop: "70px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <img
                style={{
                  width: "40px",
                  height: "40px",
                  cursor: "pointer",
                }}
                src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png"
              />
            </div>
            <div
              style={{
                width: "40px",
                height: "40px",
                cursor: "pointer",
                marginRight: "5px",
              }}
            >
              <img src="/imgs/icond.png" />
            </div>
          </div>

          <div
            style={{
              marginTop: "30px",
              border: "1px solid #CCCCCC",
              backgroundColor: "#fff",
              padding: "16px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
            }}
          >
            <div style={{ fontWeight: "bold", fontSize: "15px" }}>
              Thêm vào bài viết của bạn
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "10px",
              }}
            >
              <img
                className="fsdfsdf"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png"
              />
              <img
                className="fsdfsdf"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/MqTJr_DM3Jg.png"
              />
              <img
                className="fsdfsdf"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/yMDS19UDsWe.png"
              />
              <img
                className="fsdfsdf"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yy/r/uywzfiZad5N.png"
              />
              <img
                className="fsdfsdf"
                src="https://static.xx.fbcdn.net/rsrc.php/v3/yX/r/j0Jp-GpONWx.png"
              />
              <div className="fsdfsdf">
                <MoreHorizIcon />
              </div>
            </div>
          </div>

          <div
            onClick={handleClose}
            style={{ marginTop: "20px", marginBottom: "-15px" }}
          >
            <div
              style={{
                backgroundColor: "#e4e6eb",
                padding: "12px",
                textAlign: "center",
                borderRadius: "5px",
                cursor: "not-allowed",
              }}
            >
              <div style={{ fontWeight: "bold", color: "#bec2c6" }}>Đăng</div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
      <PopupChild open={openPopupChild} handleClose={handleClosePopupChild} />
    </div>
  );
};

export default Poup;
