import { Link, Outlet } from "react-router-dom";
import Header from "../Components/Header";

export default function RootLayout() {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
    </>
  );
}
