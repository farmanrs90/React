const SearchProduct = ({ products, setFiltered }) => {

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();

    if (!value) {
      setFiltered(products);
    } else {
      setFiltered(
        products.filter(p =>
          p.name.toLowerCase().includes(value)
        )
      );
    }
  };

  return <input placeholder="Search" onChange={handleSearch} />;
};

export default SearchProduct;
