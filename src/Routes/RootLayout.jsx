import { Link, Outlet } from "react-router-dom";
import Header from "../Components/Header";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../Firebase/getFirebase";
import { LOG_OUT_CLIENT } from "../Firebase/firebaseAuthFunctions";

export default function RootLayout() {
  useEffect(() => {

    // LOG_OUT_CLIENT()
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(user)
        // ...
      } else {
        // User is signed out
        // ...
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
