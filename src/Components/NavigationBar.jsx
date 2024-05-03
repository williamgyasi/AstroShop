import { AppBar, MenuItem, Toolbar, Typography } from "@mui/material";
import React from "react";

function NavigationBar() {
  return (
    <React.Fragment>
      <AppBar
        sx={{
          position: "fixed",
          backgroundImage: "0",
          boxShadow: "none",
          backgroundColor: "transparent",
          px: 5,
          mt: 2,
        }}
      >
        <Toolbar
          variant="regular"
          sx={{
            // backgroundColor: "rgba(255, 255, 255, 0.4)",
            backgroundColor:"red",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: 10,
            backdropFilter: "blur(24px)",
            maxHeight: 40,
          }}
        >

        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default NavigationBar;
