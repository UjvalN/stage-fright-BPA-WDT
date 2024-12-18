import React from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

type CartItemProps = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  details?: {
    size?: string;
    date?: string;
    venue?: string;
    ticketType?: string;
  };
};

export default function CartItem({ id, name, price, quantity, details }: CartItemProps) {
  const { dispatch } = useCart();

  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-800">
      <div className="flex-1">
        <h3 className="font-semibold">{name}</h3>
        {details?.size && <p className="text-sm text-gray-400">Size: {details.size}</p>}
        {details?.date && (
          <p className="text-sm text-gray-400">
            {details.date} - {details.venue}
          </p>
        )}
        {details?.ticketType && (
          <p className="text-sm text-gray-400">Type: {details.ticketType}</p>
        )}
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => dispatch({ 
              type: 'UPDATE_QUANTITY', 
              payload: { id, quantity: Math.max(0, quantity - 1) }
            })}
            className="p-1 hover:bg-gray-800 rounded"
          >
            <Minus size={16} />
          </button>
          <span className="w-8 text-center">{quantity}</span>
          <button
            onClick={() => dispatch({ 
              type: 'UPDATE_QUANTITY', 
              payload: { id, quantity: quantity + 1 }
            })}
            className="p-1 hover:bg-gray-800 rounded"
          >
            <Plus size={16} />
          </button>
        </div>
        <span className="w-20 text-right">${(price * quantity).toFixed(2)}</span>
        <button
          onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: id })}
          className="p-1 hover:bg-gray-800 rounded"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}