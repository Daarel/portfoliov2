import type { FC } from "react";
import { NavLink } from "react-router";

const Navbar: FC = () => {
  return (
    <nav className="mx-11 flex h-20 items-center">
      <ul className="flex w-full flex-row items-center justify-between">
        <li>
          <NavLink to="/">&copy; Code by Daarel</NavLink>
        </li>
        <li className="flex gap-8">
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
