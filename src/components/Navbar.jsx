import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-purple-800" : "text-black"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/team"
          className={({ isActive }) =>
            isActive ? "text-purple-800" : "text-black"
          }
        >
          Team
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-purple-800" : "text-black"
          }
        >
          Projects
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-purple-800" : "text-black"
          }
        >
          Contact Us
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
