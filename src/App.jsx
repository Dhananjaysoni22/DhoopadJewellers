import Gallery from "./pages/Gallery";
import Landing from "./pages/Landing";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
