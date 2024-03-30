import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="flex text-lg gap-7 font-medium items-center gap-20 justify-center font-semibold py-4 fixed left-1/4 w-1/2 z-20 rounded-full border-white border-2 backdrop-blur opacity-40 hover:opacity-100 transition-all shadow-black my-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-[color:var(--dark-yellow)] to-[color:var(--light-yellow)] bg-clip-text text-transparent"
              : "text-[color:var(--light-purple)]"
          }
        >
          <div className="hover:text-[color:var(--dark-purple)] transition-all">
            Home
          </div>
        </NavLink>

        <NavLink
          to="/team"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-[color:var(--dark-yellow)] to-[color:var(--light-yellow)] bg-clip-text text-transparent"
              : "text-[color:var(--light-purple)]"
          }
        >
          <div className="hover:text-[color:var(--dark-purple)] transition-all">
            Team
          </div>
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-[color:var(--dark-yellow)] to-[color:var(--light-yellow)] bg-clip-text text-transparent"
              : "text-[color:var(--light-purple)]"
          }
        >
          <div className="hover:text-[color:var(--dark-purple)] transition-all">
            Projects
          </div>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "bg-gradient-to-r from-[color:var(--dark-yellow)] to-[color:var(--light-yellow)] bg-clip-text text-transparent"
              : "text-[color:var(--light-purple)]"
          }
        >
          <div className="hover:text-[color:var(--dark-purple)] transition-all">
            Contact Us
          </div>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
