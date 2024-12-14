import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1em', backgroundColor: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '1em' }}>Home</Link>
      <Link to="/add-product">Add Product</Link>
    </nav>
  );
};

export default Navbar;
