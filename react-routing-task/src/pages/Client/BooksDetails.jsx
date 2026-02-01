import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://book-store-api-liard-three.vercel.app/books/${id}`)
      .then(res => res.json())
      .then(data => setBook(data));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{book.title}</h2>
      <p>Price: ${book.price}</p>
      <p>Description: {book.description || "No description"}</p>
      <Link to="/">Back to Books</Link>
    </div>
  );
};

export default BookDetails;
