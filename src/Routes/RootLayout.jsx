import { Link, Outlet } from "react-router-dom";
import Header from "../Components/Header";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../Firebase/getFirebase";

export default function RootLayout() {
  useEffect(() => {
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
