import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
    
      <Link>Home</Link>
      <Link>Data</Link>
      <Outlet />
    </>
  );
}
