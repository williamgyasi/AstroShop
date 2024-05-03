import { AppBar, Container, Toolbar } from "@mui/material";
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

  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar></Toolbar>
      </Container>
    </AppBar>
  );
}
