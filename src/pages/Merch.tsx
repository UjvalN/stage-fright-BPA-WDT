import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { merchItems } from '../data/merchItems';

export default function Merch() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { dispatch } = useCart();
  const categories = ['All', 'Apparel', 'Music', 'Accessories'];

  const filteredItems = selectedCategory === 'All'
    ? merchItems
    : merchItems.filter(item => item.category === selectedCategory);

  const addToCart = (e: React.MouseEvent, item: typeof merchItems[0], size?: string) => {
    e.preventDefault(); // Prevent navigation when clicking the add to cart button
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: size ? `${item.id}-${size}` : item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
        type: 'merch',
        details: size ? { size } : undefined
      }
    });
    dispatch({ type: 'TOGGLE_CART' });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Official Merch</h1>
          <p className="text-xl text-gray-300 mb-8">Show your support with our exclusive merchandise</p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Merch Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Link
                key={item.id}
                to={`/merch/${item.id}`}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
              >
                <div className="relative group">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {'sizes' in item ? (
                      <div className="space-y-2">
                        {item.sizes.map(size => (
                          <button
                            key={size}
                            onClick={(e) => addToCart(e, item, size)}
                            className="w-full bg-purple-600 text-white px-6 py-2 rounded-lg flex items-center justify-center space-x-2 hover:bg-purple-700 transition-colors"
                          >
                            <span>Add {size} to Cart</span>
                          </button>
                        ))}
                      </div>
                    ) : (
                      <button
                        onClick={(e) => addToCart(e, item)}
                        className="bg-purple-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-purple-700 transition-colors"
                      >
                        <ShoppingCart size={20} />
                        <span>Add to Cart</span>
                      </button>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-400 text-lg font-bold">${item.price}</span>
                    <span className="text-gray-400">{item.category}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}