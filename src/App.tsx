import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import type { FC } from "react";

import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  // {
  //   path: "/work",
  //   element: <WorkPage />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/about",
  //   element: <AboutPage />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/contact",
  //   element: <ContactPage />,
  //   errorElement: <ErrorPage />,
  // },
]);

const App: FC = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 3.5,
      effects: true,
    });
  }, []);
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <RouterProvider router={router} />
      </div>
    </div>
  );
};

export default App;
