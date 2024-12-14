import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AddProduct from './components/AddProduct';

const App = () => {
  const [products, setProducts] = useState([]); // Lifted state

  // Fetch initial product data from Fake Store API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  // Function to add a new product
  const addProduct = (newProduct) => {
    const productWithId = { ...newProduct, id: products.length + 1 }; // Assign a unique ID
    setProducts((prevProducts) => [...prevProducts, productWithId]);
  };

  return (
    <Router>
      <Navbar />
      <div style={{ padding: '1em' }}>
        <Routes>
          <Route path="/" element={<HomePage products={products} />} />
          <Route path="/add-product" element={<AddProduct addProduct={addProduct} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
