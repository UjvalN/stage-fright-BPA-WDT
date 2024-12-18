import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/cart/CartItem';

type CheckoutForm = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  cardNumber: string;
  cardExpiry: string;
  cardCvc: string;
};

export default function Checkout() {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState<CheckoutForm>({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
  });

  const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      dispatch({ type: 'CLEAR_CART' });
      navigate('/order-success');
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <button
          onClick={() => navigate('/merch')}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold mb-12">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="bg-gray-900 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-purple-400"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      required
                      className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-purple-400"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      required
                      className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-purple-400"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-gray-900 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    required
                    className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-purple-400"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="city"
                      placeholder="City"
                      required
                      className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-purple-400"
                      value={formData.city}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="state"
                      placeholder="State"
                      required
                      className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-purple-400"
                      value={formData.state}
                      onChange={handleInputChange}
                    />
                  </div>
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP Code"
                    required
                    className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-purple-400"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-gray-900 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Payment Information</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    required
                    className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-purple-400"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="cardExpiry"
                      placeholder="MM/YY"
                      required
                      className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-purple-400"
                      value={formData.cardExpiry}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      name="cardCvc"
                      placeholder="CVC"
                      required
                      className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-purple-400"
                      value={formData.cardCvc}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:bg-gray-600"
              >
                {isProcessing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-900 p-6 rounded-lg h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4">
              {state.items.map(item => (
                <CartItem key={item.id} {...item} />
              ))}
              <div className="border-t border-gray-800 pt-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}