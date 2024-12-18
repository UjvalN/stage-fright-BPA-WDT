import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="h-screen bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Stage Fright</h1>
          <p className="text-xl md:text-2xl mb-8">Experience the raw energy of rock</p>
          <Link
            to="/tour"
            className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            View Tour Dates
          </Link>
        </div>
      </section>

      {/* Latest Release */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Latest Release</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <img
              src="src/images/midnight_echoes.png"
              alt="Album Cover"
              className="w-64 h-64 object-cover rounded-lg shadow-lg"
            />
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Midnight Echoes</h3>
              <p className="text-gray-400 mb-6">
                Our latest album featuring 12 tracks of pure rock energy.
                Available now on all major streaming platforms.
              </p>
              <Link to="/merch">
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Listen Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Shows */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Upcoming Shows</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                date: 'MAR 15',
                city: 'New York, NY',
                venue: 'Madison Square Garden'
              },
              {
                date: 'MAR 18',
                city: 'Los Angeles, CA',
                venue: 'The Forum'
              },
              {
                date: 'MAR 22',
                city: 'Chicago, IL',
                venue: 'United Center'
              }
            ].map((show, index) => (
              <div key={index} className="bg-black p-6 rounded-lg">
                <div className="text-purple-400 text-xl font-bold mb-2">{show.date}</div>
                <div className="text-xl font-bold mb-1">{show.city}</div>
                <div className="text-gray-400 mb-4">{show.venue}</div>
                <Link
                  to="/tour"
                  className="inline-block bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
                >
                  Get Tickets
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}