

import { NavLink, Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-400 to-blue-400"
        >
          HR Portal
        </Link>

        <div className="flex items-center space-x-3">
          <NavLink
            to="/HR-Portal"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition ${
                isActive
                  ? "bg-lime-500/20 text-lime-300"
                  : "text-gray-300 hover:text-lime-300 hover:bg-gray-800"
              }`
            }
          >
            HR Page
          </NavLink>

          <NavLink
            to="/Employee-Portal"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md text-sm font-medium transition ${
                isActive
                  ? "bg-blue-500/20 text-blue-300"
                  : "text-gray-300 hover:text-blue-300 hover:bg-gray-800"
              }`
            }
          >
            Employee Page
          </NavLink>

          <button
            onClick={handleLogout}
            className="ml-2 px-3 py-2 rounded-md text-sm font-semibold bg-gradient-to-r from-lime-400 to-blue-400 text-gray-900 hover:shadow-lg transform hover:scale-105 transition"
            aria-label="Logout"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;