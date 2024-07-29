import React from 'react';
import ProductCard from './ProductCard';
import ProductDetails from './ProductDetails';
import ReviewList from './ReviewList';
import './ProductPage.css';

const ProductPage = () => {
  const product = {
    id: 1,
    name: 'Iphone 15 Pro Max',
    image: 'https://d3cd3hu9wl72jo.cloudfront.net/2.d/preview/e/9/e957229f_94253d70_SGMY_iPhone_15_Pro_Max_Natural_Titanium_PDP_Image_Position-2_Design.jpg',
    price: 6000,
    description: 'Detailed product description',
    reviews: [
      { user: 'Nihmath', rating: 4, text: 'Great product!' },
      { user: 'Ihshan', rating: 5, text: 'Excellent!' }
    ]
  };

  return (
    <div className="product-page">
      <ProductCard product={product} />
      <ProductDetails description={product.description} />
      <ReviewList reviews={product.reviews} />
    </div>
  );
};

export default ProductPage;
