import React, { useState } from "react";
import { REGISTER__CLIENT } from "../../Firebase/firebaseAuthFunctions";
import {
  Alert,
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Snackbar,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { EmailOutlined, LinkOffOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Register = () => {
  // REGISTER__CLIENT("williamac@gmail.com", "william");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errorControl, setErrorControl] = useState({
    emailHasError: false,
    emailErrorMessage: "",
    passwordHasError: false,
    passwordErrorMessage: "",
  });
  const [loading, setLoading] = useState(false);
  const [tabValue, setTabValue] = useState(0);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  const handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackBar(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    REGISTER__CLIENT(userData.email, userData.password)
      .then((value) => {
        if (value?.accessToken) {
          setCurrentUser(value);
          setOpenSnackBar(true);
          setUserData({ email: "", password: "" });
        }
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
          navigate("/");
        }, 5000);
      });

    // event.target.reset();

    // setUserData({ email: "", password: "" });
  };

  const handleOnChange = (event) => {
    setUserData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));

    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$"/;

    if (regex.test(userData.email)) {
      setErrorControl((prevErrorControl) => ({
        ...prevErrorControl,
        emailHasError: false,
        emailErrorMessage: "",
      }));
    } else {
      setErrorControl((prevErrorControl) => ({
        ...prevErrorControl,
        emailHasError: true,
        emailErrorMessage: "Invalid Email",
      }));
    }
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
        <Typography textAlign={"center"} component="h1" variant="h5">
          Register For AstroShop
        </Typography>

        <Box
          sx={{
            width: "90%",
            mt: 1,
          }}
        >
          <Tabs
            value={tabValue}
            variant="fullWidth"
            onChange={(event, newValue) => {
              setTabValue(newValue);
            }}
            aria-label="basic tabs example"
          >
            <Tab
              icon={<LinkOffOutlined />}
              iconPosition="start"
              label="Register With Link"
              {...a11yProps(0)}
            />
            <Tab
              icon={<EmailOutlined />}
              iconPosition="start"
              label="Register With Email"
              {...a11yProps(1)}
            />
          </Tabs>

          <CustomTabPanel value={tabValue} index={0}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ width: "100%" }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                value={userData.email}
                onChange={handleOnChange}
                id="email"
                color={errorControl.emailHasError ? "info" : "success"}
                error={errorControl.emailHasError}
                helperText={errorControl.emailErrorMessage}
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <LoadingButton
                loading={loading}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mb: 2 }}
              >
                {" "}
                Sign In
              </LoadingButton>
            </Box>
          </CustomTabPanel>

          <CustomTabPanel value={tabValue} index={1}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
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
                  color={errorControl.emailHasError ? "info" : "success"}
                  error={errorControl.emailHasError}
                  helperText={errorControl.emailErrorMessage}
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
                <LoadingButton
                  loading={loading}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </LoadingButton>
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
              </Box>
            </Box>
          </CustomTabPanel>
        </Box>
      </Grid>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={handleSnackBarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackBarClose}
          severity="success"
          variant="filled"
          sx={{ mt: 3 }}
        >
          You have been successfully signed in
          {currentUser?.email}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default Register;
