import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <Outlet />
      <p>I AM PART OF THE PROBLEM</p>
    </div>
  );
}
