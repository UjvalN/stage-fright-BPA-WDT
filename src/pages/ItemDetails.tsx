import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { ShoppingCart } from 'lucide-react';
import { merchItems } from '../data/merchItems';

export default function ItemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  
  const item = merchItems.find(item => item.id === id);
  
  if (!item) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Item not found</h1>
        <button
          onClick={() => navigate('/merch')}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Back to Merch
        </button>
      </div>
    );
  }

  const addToCart = (size?: string) => {
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
    navigate('/checkout');
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={item.image}
              alt={item.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Details */}
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
            <p className="text-2xl text-purple-400 font-bold mb-6">${item.price}</p>
            <p className="text-gray-400 mb-6">
              Official Stage Fright merchandise. High-quality materials and premium design.
            </p>

            {'sizes' in item ? (
              <div className="space-y-4">
                <h3 className="font-semibold">Select Size:</h3>
                <div className="grid grid-cols-2 gap-4">
                  {item.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => addToCart(size)}
                      className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={20} />
                      <span>Add {size} to Cart</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <button
                onClick={() => addToCart()}
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                <span>Add to Cart</span>
              </button>
            )}

            {/* Additional Info */}
            <div className="mt-12 space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-gray-400">
                  Premium quality {item.category.toLowerCase()} featuring the iconic Stage Fright design.
                  Each piece is carefully crafted to ensure maximum comfort and durability.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Shipping</h3>
                <p className="text-gray-400">
                  Free shipping on orders over $50. Standard delivery takes 3-5 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}