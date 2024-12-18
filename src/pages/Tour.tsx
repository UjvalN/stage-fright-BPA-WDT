import React from 'react';
import { useCart } from '../contexts/CartContext';

const tourDates = [
  {
    id: 'nyc-1',
    date: 'March 15, 2024',
    city: 'New York, NY',
    venue: 'Madison Square Garden',
    status: 'On Sale',
    price: 45,
    maxPrice: 125
  },
  {
    id: 'la-1',
    date: 'March 18, 2024',
    city: 'Los Angeles, CA',
    venue: 'The Forum',
    status: 'Almost Sold Out',
    price: 40,
    maxPrice: 110
  },
  {
    id: 'chi-1',
    date: 'March 22, 2024',
    city: 'Chicago, IL',
    venue: 'United Center',
    status: 'On Sale',
    price: 35,
    maxPrice: 100
  },
  {
    id: 'aus-1',
    date: 'March 25, 2024',
    city: 'Austin, TX',
    venue: 'Moody Theater',
    status: 'Sold Out',
    price: 30,
    maxPrice: 90
  },
  {
    id: 'sea-1',
    date: 'March 28, 2024',
    city: 'Seattle, WA',
    venue: 'Climate Pledge Arena',
    status: 'On Sale',
    price: 40,
    maxPrice: 115
  }
];

const packages = [
  {
    id: 'silver',
    name: 'Silver Package',
    price: 150,
    features: ['Early Entry', 'Exclusive Merch Item', 'Commemorative Ticket']
  },
  {
    id: 'gold',
    name: 'Gold Package',
    price: 250,
    features: ['All Silver Benefits', 'Meet & Greet', 'Photo Opportunity', 'Signed Poster']
  },
  {
    id: 'platinum',
    name: 'Platinum Package',
    price: 400,
    features: ['All Gold Benefits', 'Backstage Tour', 'Side-Stage Viewing', 'Exclusive Merch Bundle']
  }
];

export default function Tour() {
  const { dispatch } = useCart();

  const addTicketToCart = (show: typeof tourDates[0], ticketType: string, price: number) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: `${show.id}-${ticketType}`,
        name: `${show.city} - ${ticketType}`,
        price,
        quantity: 1,
        type: 'ticket',
        details: {
          date: show.date,
          venue: show.venue,
          ticketType
        }
      }
    });
    dispatch({ type: 'TOGGLE_CART' });
  };

  const addPackageToCart = (pkg: typeof packages[0], showId: string) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: `${showId}-${pkg.id}`,
        name: `${pkg.name}`,
        price: pkg.price,
        quantity: 1,
        type: 'ticket',
        details: {
          ticketType: pkg.name
        }
      }
    });
    dispatch({ type: 'TOGGLE_CART' });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section 
        className="h-[40vh] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tour Dates</h1>
          <p className="text-xl text-gray-300">Come see us live on the Midnight Echoes World Tour</p>
        </div>
      </section>

      {/* Tour Dates */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            {tourDates.map((show, index) => (
              <div 
                key={show.id}
                className={`flex flex-col md:flex-row items-center justify-between p-6 ${
                  index !== tourDates.length - 1 ? 'border-b border-gray-800' : ''
                }`}
              >
                <div className="md:w-1/4 text-center md:text-left mb-4 md:mb-0">
                  <div className="text-xl font-bold">{show.date}</div>
                </div>
                <div className="md:w-1/4 text-center md:text-left mb-4 md:mb-0">
                  <div className="font-bold">{show.city}</div>
                  <div className="text-gray-400">{show.venue}</div>
                </div>
                <div className="md:w-1/4 text-center md:text-left mb-4 md:mb-0">
                  <div className="text-purple-400">${show.price} - ${show.maxPrice}</div>
                </div>
                <div className="md:w-1/4 text-center md:text-right">
                  {show.status !== 'Sold Out' ? (
                    <div className="space-y-2">
                      <button
                        onClick={() => addTicketToCart(show, 'General Admission', show.price)}
                        className="w-full md:w-auto bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                      >
                        Buy Tickets
                      </button>
                      <button
                        onClick={() => addTicketToCart(show, 'VIP', show.maxPrice)}
                        className="w-full md:w-auto bg-purple-800 text-white px-6 py-2 rounded-lg hover:bg-purple-900 transition-colors"
                      >
                        VIP Tickets
                      </button>
                    </div>
                  ) : (
                    <span className="bg-gray-700 text-white px-6 py-2 rounded-lg cursor-not-allowed">
                      Sold Out
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP Packages */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">VIP Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div key={pkg.id} className={`bg-black p-8 rounded-lg ${
                pkg.id === 'gold' ? 'transform scale-105 border-2 border-purple-600' : ''
              }`}>
                <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>
                <p className="text-2xl font-bold text-purple-400 mb-6">${pkg.price}</p>
                <button
                  onClick={() => addPackageToCart(pkg, tourDates[0].id)}
                  className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}