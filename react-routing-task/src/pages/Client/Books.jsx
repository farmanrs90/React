import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BooksList = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    fetch("https://book-store-api-liard-three.vercel.app/books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  const handleSort = (type) => {
    setSortType(type);
    let sorted = [...books];
    if (type === "a-z") sorted.sort((a, b) => a.title.localeCompare(b.title));
    if (type === "price") sorted.sort((a, b) => a.price - b.price);
    setBooks(sorted);
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Books</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => handleSort("a-z")}>Sort A-Z</button>
      <button onClick={() => handleSort("price")}>Sort Price</button>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "15px" }}>
        {filteredBooks.map(book => (
          <div key={book.id} style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}>
            <h3>{book.title}</h3>
            <p>${book.price}</p>
            <Link to={`/details/${book.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksList;
