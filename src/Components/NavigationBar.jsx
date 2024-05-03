import {
  AppBar,
  Box,
  Button,
  Container,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

export default function NavigationBar({ mode, toggleColor }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const logoStyle = {
    width: "140px",
    height: "auto",
    cursor: "pointer",
  };

  const scrollToSection = (id) => {};

  return (
    <AppBar
      position="fixed"
      sx={{
        boxShadow: 0,
        bgcolor: "pink",
        backgroundImage: "none",
      }}
    >
      <Container
        disableGutters
        maxWidth="lg"
        // sx={{ backgroundColor: "yellow" }}
      >
        <Toolbar
          variant="regular"
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            borderRadius: "999px",
            bgcolor:
              theme.palette.mode === "light"
                ? "rgba(255, 255, 255, 0.4)"
                : "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(24px)",
            maxHeight: 40,
            border: "1px solid",
            borderColor: "divider",
            boxShadow:
              theme.palette.mode === "light"
                ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                : "0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)",
          })}
        >
          <Box
            sx={{
              // flexGrow: 1,
              display: "flex",
              alignItems: "center",
              ml: "-18px",
              px: 0,
              // backgroundColor:"red"
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
      </Container>
    </AppBar>
  );
}
