import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import ErrorPage from "./ErrorPage";
import PortfolioDescription from "./Portfolio/PortfolioDescripton";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />
    },
    {
      path: "/portfolio",
      element: <Portfolio />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "project/:title",
          element: <PortfolioDescription />,
          errorElement: <ErrorPage />,
        },
      ],
    },
    {
      path: "/contact",
      element: <Contact />,
      errorElement: <ErrorPage />
    },
    
  ]);

  return <RouterProvider router={router} />;
};

export default Router;