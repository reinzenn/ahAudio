import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import LoginLayout from "./layout/LoginLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Productos from "./pages/Productos";
import SobreNosotros from "./pages/SobreNosotros";
import Promociones from "./pages/Promociones";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/", element: <Home /> },
      { path: "productos", element: <Productos /> },
      { path: "sobre-nosotros", element: <SobreNosotros /> },
      { path: "promociones", element: <Promociones /> },
    ],
  },
  {
    path: "/login",
    element: <LoginLayout />,
    children: [{ path: "/login", element: <Login /> }],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
