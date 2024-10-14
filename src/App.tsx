
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/home";
import TestimonialPage from "./pages/testimonials";
import PlayGroundPage from "./pages/playground";
import StyleLibraryPage from "./pages/style-library";
import CaseStudyPage from "./pages/case-study";
import LPFurniture from "./pages/lp-furniture";

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
        path: "/portfolio",
        element: <PlayGroundPage />
      },
      {
        path: "/case-studies",
        element: <CaseStudyPage />
      },
      {
        path: "/styles",
        element: <StyleLibraryPage />
      },
      {
        path: "/lp-furniture",
        element: <LPFurniture />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
