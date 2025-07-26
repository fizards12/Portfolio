import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import RootElement from "./Pages/RootElement";
import Home from "./Pages/Home/Home";
import "./App.css";
import About from "./Pages/About/About";
import { action as homeAction } from "./Pages/Home/actionAndLoader";
import Skills from "./Pages/Skills/Skills";
import Portfolio from "./Pages/Portfolio/Portfolio";

function App() {
  const router = createBrowserRouter([
    {
      index: true,
      element: <Home />,
      action: homeAction,
    },
    {
      path: "*",
      element: <RootElement />,
      children: [
        {
          path: "about-me",
          element: <About />,
        },
        {
          path: "skills",
          element: <Skills />
        },
        {
          path: "portfolio",
          element: <Portfolio />
        },
        {
          path: "*",
          element: <Navigate to="/" />
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
