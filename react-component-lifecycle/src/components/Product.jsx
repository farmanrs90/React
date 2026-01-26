import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import SearchProduct from "./SearchProduct";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then(res => {
        setProducts(res.data);
        setFiltered(res.data);
      });
  }, []);

  return (
    <>
      <AddProduct products={products} setProducts={setProducts} />
      <SearchProduct products={products} setFiltered={setFiltered} />
      <ProductList products={filtered} setProducts={setProducts} />
    </>
  );
};

export default Product;
