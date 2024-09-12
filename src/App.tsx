
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/home";
import TestimonialPage from "./pages/testimonials";
import PlayGroundPage from "./pages/playground";
import StyleLibraryPage from "./pages/style-library";
import CaseStudyPage from "./pages/case-study";

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
        path: "/case-studies",
        element: <CaseStudyPage />
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
