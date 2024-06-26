import React from "react";
import NavigationBar from "./NavigationBar";
import { Container, Typography } from "@mui/material";
import { globalColor } from "../theme";

function Header() {
  return (
    <Container
      maxWidth="lg"
      disableGutters
      sx={{
        width: "100%",
        // backgroundImage: "linear-gradient(180deg, #CEE5FD, #ebe6e6)",
        backgroundColor: "white",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        py: 2,
      }}
    >
      <NavigationBar />
    </Container>
  );
}

export default Header;
