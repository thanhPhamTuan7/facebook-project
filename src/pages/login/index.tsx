import React, { useState } from "react";
import "./login.css";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const Login = () => {
  const [showPassword, setShowPassword] = useState<Record<string, boolean>>({
    password: false,
    newPassword: false,
    confirmNewPassword: false,
  });
  return (
    <Box>
      <div
        style={{
          padding: "100px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          columnGap: "30px",
          background: "#f0f2f5",
        }}
      >
        <div>
          <img
            style={{ width: "190px", height: "70px" }}
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          />
          <div
            style={{ fontWeight: "700", fontSize: "35px", marginLeft: "18px" }}
          >
            Đăng nhập gần đây
          </div>
          <div style={{ marginTop: "5px", marginLeft: "18px" }}>
            Nhấp vào ảnh của bạn hoặc thêm tài khoản.
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              alignItems: "center",
              columnGap: "20px",
              marginTop: "20px",
              padding: "8px",
              cursor: "pointer",
            }}
          >
            <div className="imgs-login">
              <div style={{}}>
                <img
                  style={{
                    height: "120px",
                    width: "100%",
                    borderRadius: "5px",
                    objectFit: "cover",
                    display: "flex",
                    justifyContent: "center",
                  }}
                  src="/imgs/gai1.jpg"
                />
              </div>
              <div style={{ marginTop: "15px", textAlign: "center" }}>
                Thanh
              </div>
            </div>

            <div style={{ position: "relative" }} className="imgs-login">
              <img
                style={{
                  height: "120px",
                  width: "100%",
                  borderRadius: "5px",
                  objectFit: "cover",
                  display: "flex",
                  justifyContent: "center",
                }}
                src="/imgs/gai2.jpg"
              />
              <div style={{ marginTop: "15px", textAlign: "center" }}>Ánh</div>

              <div
                style={{
                  position: "absolute",
                  backgroundColor: "red",
                  padding: "4px 8px 4px 8px",
                  borderRadius: "50%",
                  color: "#ffff",
                  fontWeight: "bold",
                  top: "-5px",
                  right: "-5px",
                }}
              >
                2
              </div>
            </div>

            <div className="imgs-login">
              <img
                style={{
                  height: "120px",
                  width: "100%",
                  borderRadius: "5px",
                  objectFit: "cover",
                  display: "flex",
                  justifyContent: "center",
                }}
                src="/imgs/gai3.jpg"
              />
              <div style={{ marginTop: "15px", textAlign: "center" }}>
                Hoàng
              </div>
            </div>
          </div>
        </div>

        <div className="login-form">
          <Box
            sx={{
              backgroundColor: "#e8f0fe",
              border: "none",
            }}
          >
            <TextField
              fullWidth
              id="filled-hidden-label-normal"
              defaultValue="thanhbn7987@gmail.com"
            />
          </Box>
          <Box
            sx={{
              marginTop: "25px",
            }}
          >
            <TextField
              fullWidth
              name="currentPassword"
              label="Mật khẩu"
              defaultValue="12324235345"
              type={showPassword.password ? "text" : "password"}
              sx={{
                backgroundColor: "#e8f0fe",
                border: "none",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        setShowPassword({
                          ...showPassword,
                          password: !showPassword.password,
                        })
                      }
                      edge="end"
                    >
                      {showPassword.password ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Link style={{ textDecoration: "none" }} to="/">
            <Box
              sx={{
                backgroundColor: "#1877f2",
                marginTop: "25px",
                height: "56px",
                fontWeight: "bold",
                color: "#fff",
                borderRadius: "5px",
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              Đăng nhập
            </Box>
          </Link>
          <div className="quenpasssword">Quên mật khẩu?</div>
          <div style={{ border: "1px solid #DDDDDD", marginTop: "20px" }}></div>
          <div style={{ padding: "64px 120px 64px 120px" }}>
            <div className="fsadfsfcqa" style={{}}>
              <div style={{ fontSize: "20px", color: "#fff" }}>
                Tạo tài khoản mới
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              columnGap: "4px",
            }}
          >
            <div
              className="hover-taotrang"
              style={{ fontWeight: "bold", cursor: "pointer" }}
            >
              Tạo trang
            </div>
            <div>dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.</div>
          </div>
        </div>
      </div>

      {/* //bottom */}
      <Box>
        <div
          style={{
            backgroundColor: "#fff",

            padding: "16px 64px 16px 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div className="hover-bottom-tiengviet">Tiếng việt</div>
            <div className="hover-bottom-tiengviet">English (UK)</div>
            <div className="hover-bottom-tiengviet">中文(台灣)</div>
            <div className="hover-bottom-tiengviet">한국어</div>
            <div className="hover-bottom-tiengviet">日本語</div>
            <div className="hover-bottom-tiengviet">ภาษาไทย</div>
            <div className="hover-bottom-tiengviet">Español</div>
            <div className="hover-bottom-tiengviet">Português (Brasil)</div>
            <div className="hover-bottom-tiengviet">Deutsch</div>
            <div className="hover-bottom-tiengviet">Italiano</div>
            <div
              style={{ backgroundColor: "#dddddd", padding: "2px 4px 2px 4px" }}
              className="okioki"
            >
              <AddIcon />
            </div>
          </div>

          <div
            style={{
              border: "1px solid #CCCCCC",
              marginTop: "20px",
              opacity: "0.7",
            }}
          ></div>

          {/* //bottom-botom */}

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <div className="hover-bottom-tiengviet">Tiếng việt</div>
            <div className="hover-bottom-tiengviet">English (UK)</div>
            <div className="hover-bottom-tiengviet">中文(台灣)</div>
            <div className="hover-bottom-tiengviet">한국어</div>
            <div className="hover-bottom-tiengviet">日本語</div>
            <div className="hover-bottom-tiengviet">ภาษาไทย</div>
            <div className="hover-bottom-tiengviet">Español</div>
            <div className="hover-bottom-tiengviet">Português (Brasil)</div>
            <div className="hover-bottom-tiengviet">Deutsch</div>
            <div className="hover-bottom-tiengviet">Italiano</div>
          </div>

          <div
            style={{ marginTop: "30px", marginLeft: "30px" }}
            className="hover-bottom-tiengviet"
          >
            Meta.2023
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Login;
