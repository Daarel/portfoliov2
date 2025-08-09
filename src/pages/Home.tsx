import type { FC } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Project from "../components/Project";

const HomePage: FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Project />
    </>
  );
};

export default HomePage;
