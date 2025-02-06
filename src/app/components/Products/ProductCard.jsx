import React from 'react';

const ProductCard = ({ product }) => {
  const { name, image, price, description, category, quantity } = product;

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 max-w-xs">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-lg mb-3" />
      <h2 className="text-lg font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600 text-sm">{category}</p>
      <p className="text-gray-700 text-sm mt-2">{description.slice(0, 60)}...</p>
      <div className="flex justify-between items-center mt-3">
        <span className="text-lg font-semibold text-orange-500">${price}</span>
        <span className="text-sm text-gray-500">In stock: {quantity}</span>
      </div>
      <button className="mt-3 w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
