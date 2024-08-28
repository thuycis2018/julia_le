
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import TestimonialPage from "./pages/TestimonialPage";
import PlayGroundPage from "./pages/PlayGroundPage";
import StyleLibraryPage from "./pages/StyleLibraryPage";

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
        path: "/testimonials",
        element: <TestimonialPage />
      },
      {
        path: "/playgrounds",
        element: <PlayGroundPage />
      },
      {
        path: "/styles",
        element: <StyleLibraryPage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
