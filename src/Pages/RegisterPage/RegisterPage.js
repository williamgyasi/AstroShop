import React, { useState } from "react";
import { REGISTER__CLIENT } from "../../Firebase/firebaseAuthFunctions";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Copyright, ShoppingBag } from "@mui/icons-material";
const Register = () => {
  // REGISTER__CLIENT("williamac@gmail.com", "william");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errorControl, setErrorControl] = useState({
    emailError: false,
    emailErrorMessage: "",
    passwordError: false,
    passwordErrorMessage: "",
  });

  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Acr");
    console.log(userData);
    //FORM DATA OPTION -- UNCONTROLLED INPUT
    // const data = new FormData(event.currentTarget);
    // console.log(data)
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });

    //CONTROLLED INPUT
  };

  const handleOnChange = (event) => {
    setUserData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));

    

    checkErrors();
  };

  const checkErrors = () => {
    
  };


  return (
    <Grid
      container
      component="main"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        item
        sx={{
          backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
          backgroundRepeat: "no-repeat",
          height: "100%",
          display: "flex",
          flex: "0 0 50%",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Grid
        item
        display={"flex"}
        flex={1}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Typography component="h1" variant="h5">
          Register For AstroShop
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#fff",
            mx: 2,
            px: 2,
            borderRadius: 5,
          }}
        >
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              value={userData.email}
              onChange={handleOnChange}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={userData.password}
              onChange={handleOnChange}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent={"space-between"}>
              <Grid item>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Register;
