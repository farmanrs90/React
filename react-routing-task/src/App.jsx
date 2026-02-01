import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Client
import BooksList from "./client/BooksList";
import BookDetails from "./client/BookDetails";

// Admin
import Dashboard from "./admin/Dashboard";
import ManageBooks from "./admin/ManageBooks";
import AddBook from "./admin/AddBook";
import EditBook from "./admin/EditBook";

const App = () => {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Client Books</Link>
        <Link to="/admin" style={{ marginRight: "10px" }}>Admin Dashboard</Link>
      </nav>

      <Routes>
        {/* Client Routes */}
        <Route path="/" element={<BooksList />} />
        <Route path="/details/:id" element={<BookDetails />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/manage" element={<ManageBooks />} />
        <Route path="/admin/add" element={<AddBook />} />
        <Route path="/admin/edit/:id" element={<EditBook />} />
      </Routes>
    </Router>
  );
};

export default App;
