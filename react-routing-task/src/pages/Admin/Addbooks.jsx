import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !price) return alert("Title and price are required!");

    await fetch("https://book-store-api-liard-three.vercel.app/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, price: Number(price), description }),
    });

    navigate("/admin/manage"); // redirect to manage books
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
