import { Grid3x3, MenuBookOutlined } from "@mui/icons-material";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import PropTypes from "prop-types";
import Header from "../../Components/Header";

function HomePage() {
  const logoStyle = {
    width: "50px",
    height: "50px",
    cursor: "pointer",
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "secondary.main",
      }}
    >
      <Header/>
      <Typography variant="h3">This is the homepage</Typography>
    </Box>
  );
}

export default HomePage;
