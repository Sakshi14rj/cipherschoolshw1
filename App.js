import React from 'react';
import Product from './Product';

function App() {
  const products = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 }
  ];

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product, index) => (
        <Product key={index} name={product.name} price={product.price} />
      ))}
    </div>
  );
}

export default App;
