import { HomePage, RegisterPage, LoginPage } from "./Pages";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(<Route />));
  return <RouterProvider router={router} />;
}

export default App;
