import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ManageBooks = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://book-store-api-liard-three.vercel.app/books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await fetch(`https://book-store-api-liard-three.vercel.app/books/${id}`, {
        method: "DELETE",
      });
      setBooks(books.filter(b => b.id !== id));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Manage Books</h2>
      <Link to="/admin/add">Add New Book</Link>
      <div style={{ marginTop: "15px" }}>
        {books.map(book => (
          <div key={book.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            <h3>{book.title}</h3>
            <p>${book.price}</p>
            <Link to={`/admin/edit/${book.id}`} style={{ marginRight: "10px" }}>Edit</Link>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageBooks;
