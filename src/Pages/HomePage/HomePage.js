import { Grid3x3, MenuBookOutlined } from "@mui/icons-material";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import PropTypes from "prop-types";

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
        pt: { xs: 10, sm: 20 },
        pb: { xs: 8, sm: 12 },
      }}
    >
      <Typography variant="h3">This is the homepage</Typography>
    </Box>
  );
}

export default HomePage;
