import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard</h2>
      <Link to="/admin/manage">Manage Books</Link>
    </div>
  );
};

export default Dashboard;
