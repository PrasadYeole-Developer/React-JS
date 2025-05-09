let ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Phone",
      price: "$699",
    },
    {
      id: 2,
      name: "Laptop",
      price: "$1200",
    },
    {
      id: 3,
      name: "Headphones",
      price: "$199",
    },
  ];

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
