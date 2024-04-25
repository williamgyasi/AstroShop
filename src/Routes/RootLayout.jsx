import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Register</Link>
      <Outlet />
    </div>
  );
}
