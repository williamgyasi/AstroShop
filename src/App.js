import { HomePage, RegisterPage, LoginPage } from "./Pages";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./Routes/RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
