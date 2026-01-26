import { useState } from "react";
import axios from "axios";

const AddProduct = ({ products, setProducts }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [isDiscounted, setIsDiscounted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price) return;

    const newProduct = {
      name,
      price: Number(price),
      isDiscounted
    };

    axios.post("http://localhost:3000/products", newProduct)
      .then(res => {
        setProducts([...products, res.data]);
        setName("");
        setPrice("");
        setIsDiscounted(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input required value={name} onChange={e => setName(e.target.value)} />
      <input required type="number" value={price} onChange={e => setPrice(e.target.value)} />
      <label>
        Discount
        <input
          type="checkbox"
          checked={isDiscounted}
          onChange={e => setIsDiscounted(e.target.checked)}
        />
      </label>
      <button>Add</button>
    </form>
  );
};

export default AddProduct;
