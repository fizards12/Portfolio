import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootElement from "./Pages/RootElement";
import Home from "./Pages/Home/Home";
import "./App.css";
import About from "./Pages/About/About";
import { action as homeAction } from "./Pages/Home/actionAndLoader";
import Skills from "./Pages/Skills/Skills";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootElement />,
      children: [
        { index: true, element: <Home />,action: homeAction},
        {
          path: "about-me",
          element: <About />,
        },
        {
          path:"skills",
          element:<Skills/>
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
