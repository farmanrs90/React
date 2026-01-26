import axios from "axios";

const ProductItem = ({ product, setProducts }) => {

  const deleteProduct = () => {
    axios.delete(`http://localhost:3000/products/${product.id}`)
      .then(() => {
        setProducts(prev =>
          prev.filter(p => p.id !== product.id)
        );
      });
  };

  return (
    <li style={{ color: product.isDiscounted ? "green" : "black" }}>
      {product.name} - ${product.price}
      <button onClick={deleteProduct}>Delete</button>
    </li>
  );
};

export default ProductItem;
