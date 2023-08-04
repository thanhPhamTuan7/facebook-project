import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./contentcontent.css";

const ContentContent = () => {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div
      className="contentcontent"
      style={{
        backgroundColor: "#fff",
        width: "100%",
        borderRadius: "10px",
      }}
    >
      {/* //content tin  */}

      <div style={{ padding: "16px 16px 16px 16px" }}>
        <Box
          sx={{
            width: "100%",
            typography: "body1",
          }}
        >
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
              }}
            >
              <TabList
                sx={{
                  width: "100%",
                }}
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab style={{ fontWeight: "bold" }} label="Tin " value="1" />
                <Tab style={{ fontWeight: "bold" }} label="Reels" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">Item One</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
};

export default ContentContent;
