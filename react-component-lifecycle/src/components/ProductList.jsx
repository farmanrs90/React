import ProductItem from "./ProductItem";

const ProductList = ({ products, setProducts }) => {
  return (
    <ul>
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          setProducts={setProducts}
        />
      ))}
    </ul>
  );
};

export default ProductList;
