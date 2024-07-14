
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import MapPage from './pages/MapPage';
import ChartPage from "./pages/ChartPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/map",
        element: <MapPage />
      },
      {
        path: "/charts",
        element: <ChartPage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
