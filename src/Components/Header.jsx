import React from "react";
import NavigationBar from "./NavigationBar";
import { Container } from "@mui/material";
import { globalColor } from "../theme";

function Header() {
  return (
    <Container
      maxWidth
      sx={{
        width: "100%",
        // height: "100vh",
      }}
    >
      <NavigationBar />
    </Container>
  );
}

export default Header;
