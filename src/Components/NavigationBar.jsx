import { StoreMallDirectoryOutlined, UploadFile } from "@mui/icons-material";
import {
  AppBar,
  Box,
  MenuItem,
  Toolbar,
  Typography,
  Button,
  Link,
} from "@mui/material";
import React from "react";

function NavigationBar() {
  const scrollToSection = () => {};
  const logoStyle = {
    width: "140px",
    height: "auto",
    cursor: "pointer",
  };

  return (
    <>
      <Toolbar
        variant="regular"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          // backgroundColor: "red",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 10,
          backdropFilter: "blur(24px)",
          flexShrink: "0",
          maxHeight: 40,
          width: "90%",
          margin: "0 auto",

          // border: "1px solid",
          // borderColor: "divider",
        }}
      >
        <Link
          href="/"
          sx={{
            display: "flex",
            alignItems: "center",
            ml: "-18px",
            px: 0,
          }}
        >
          <img
            src={
              "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg"
            }
            style={logoStyle}
            alt="logo of sitemark"
          />
        </Link>
        <Box sx={{ display: { tablet: "none"} }}>
          <MenuItem
            onClick={() => scrollToSection("features")}
            sx={{ py: "6px", px: "12px" }}
          >
            <StoreMallDirectoryOutlined />
            <Typography variant="body2" color="text.primary">
              Store
            </Typography>
          </MenuItem>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 0.5,
            alignItems: "center",
          }}
        >
          <Button
            color="primary"
            variant="text"
            size="small"
            component="a"
            href="/register"
          >
            Register
          </Button>
          <Button
            color="primary"
            variant="contained"
            size="small"
            component="a"
            href="/login"
            startIcon={<UploadFile />}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </>
  );
}

export default NavigationBar;
