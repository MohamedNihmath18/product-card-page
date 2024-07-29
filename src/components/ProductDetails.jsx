import React from 'react';
import './ProductDetails.css'

const ProductDetails = ({ description }) => {
  return (
    <div className="product-details">
      <p>{description}</p>
      {/* Add more details like specifications, features here */}
    </div>
  );
};

export default ProductDetails;
