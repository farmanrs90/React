import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Base_Url } from "../../constant";

export default function AdminBooksDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`${Base_Url}/${id}`).then((res) => setBook(res.data));
  }, [id]);

  if (!book) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{book.title}</h2>
      <img src={book.coverImageUrl} className="w-60 mb-4" />
      <p><b>Price:</b> ${book.price}</p>
      <p><b>Description:</b> {book.description}</p>
    </div>
  );
}
