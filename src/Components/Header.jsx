import React from "react";
import NavigationBar from "./NavigationBar";
import { Container, Typography } from "@mui/material";
import { globalColor } from "../theme";

function Header() {
  return (
    <Container
      maxWidth
      disableGutters
      sx={{
        width: "100%",
        height: "100vh",
        pt: { xs: 15 },
        backgroundImage: "linear-gradient(180deg, #CEE5FD, #ebe6e6)",
        // backgroundColor: "red",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <NavigationBar />
      <Typography sx={{ width: "100%", backgroundColor: "red" }}>
        I am after the header
      </Typography>
    </Container>
  );
}

export default Header;
