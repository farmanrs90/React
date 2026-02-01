import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch(`https://book-store-api-liard-three.vercel.app/books/${id}`)
      .then(res => res.json())
      .then(data => {
        setTitle(data.title);
        setPrice(data.price);
        setDescription(data.description || "");
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !price) return alert("Title and price are required!");

    await fetch(`https://book-store-api-liard-three.vercel.app/books/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, price: Number(price), description }),
    });

    navigate("/admin/manage"); // redirect to manage books
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Book</h2>
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
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditBook;
