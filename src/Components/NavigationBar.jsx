import { AppBar, Box, MenuItem, Toolbar, Typography,Button } from "@mui/material";
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
      <AppBar
        sx={{
          position: "fixed",
          backgroundImage: "0",
          boxShadow: "none",
          // backgroundColor: "yellow",
          px: 5,
          mt: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Toolbar
          variant="regular"
          sx={{
            // backgroundColor: "rgba(255, 255, 255, 0.4)",
            // backgroundColor: "red",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 10,
            backdropFilter: "blur(24px)",
            flexShrink: "0",
            maxHeight: 40,
            width: "90%",
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <Box
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
            
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <MenuItem
                onClick={() => scrollToSection("features")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography variant="body2" color="text.primary">
                  Features
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("testimonials")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography variant="body2" color="text.primary">
                  Testimonials
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("highlights")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography variant="body2" color="text.primary">
                  Highlights
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("pricing")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography variant="body2" color="text.primary">
                  Pricing
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={() => scrollToSection("faq")}
                sx={{ py: "6px", px: "12px" }}
              >
                <Typography variant="body2" color="text.primary">
                  FAQ
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
            {/* <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} /> */}
            <Button
              color="primary"
              variant="text"
              size="small"
              component="a"
              href="/material-ui/getting-started/templates/sign-in/"
              target="_blank"
            >
              Sign in
            </Button>
            <Button
              color="primary"
              variant="contained"
              size="small"
              component="a"
              href="/material-ui/getting-started/templates/sign-up/"
              target="_blank"
            >
              Sign up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavigationBar;
