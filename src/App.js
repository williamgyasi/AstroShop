import { HomePage, RegisterPage, LoginPage } from "./Pages";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./Routes/RootLayout";
import { catLoader } from "./Pages/LoginPage/dataLoader";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} loader={catLoader} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
