// src/components/Admin/Header.jsx
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white px-8 py-4 flex items-center gap-6">
      <NavLink
        to="/admin"
        className={({ isActive }) =>
          `text-lg font-medium hover:text-yellow-400 transition ${
            isActive ? "text-yellow-400 border-b-2 border-yellow-400" : ""
          }`
        }
      >
        DashBoard
      </NavLink>

      <NavLink
        to="/admin/books"
        className={({ isActive }) =>
          `text-lg font-medium hover:text-yellow-400 transition ${
            isActive ? "text-yellow-400 border-b-2 border-yellow-400" : ""
          }`
        }
      >
        ManageBooks
      </NavLink>

      <NavLink
        to="/admin/books/new"
        className={({ isActive }) =>
          `text-lg font-medium hover:text-yellow-400 transition ${
            isActive ? "text-yellow-400 border-b-2 border-yellow-400" : ""
          }`
        }
      >
        AddBooks
      </NavLink>
    </header>
  );
}
