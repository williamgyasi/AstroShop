import { Link, Outlet } from "react-router-dom";
import Header from "../Components/Header";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../Firebase/getFirebase";
import { LOG_OUT_CLIENT } from "../Firebase/firebaseAuthFunctions";
import { Box, CircularProgress } from "@mui/material";

export default function RootLayout() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(user);
        // ...
      } else {
        setLoading(true);
      }
    });
  }, []);
  return (
    <>
      {/* <Header /> */}

      <Outlet />
    </>
  );
}
