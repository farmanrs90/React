// src/layout/Admin/index.jsx
import { Outlet } from "react-router-dom";
import Header from "../Admin/Header";

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
