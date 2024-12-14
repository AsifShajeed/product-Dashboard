import React from 'react';

const HomePage = ({ products }) => {
  return (
    <div>
      <h1>Product Dashboard</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px' }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%', height: '150px', objectFit: 'contain' }}
              />
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>Category: {product.category}</p>
            </div>
          ))
        ) : (
          <p>No products available. Add some products!</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
