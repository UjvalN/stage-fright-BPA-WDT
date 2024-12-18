import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export default function OrderSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger confetti animation
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="text-center p-8">
        <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">Order Received!</h1>
        <p className="text-xl text-gray-400 mb-8">
          Thank you for your purchase. We'll send you a confirmation email shortly.
        </p>
        <button
          onClick={() => navigate('/merch')}
          className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}