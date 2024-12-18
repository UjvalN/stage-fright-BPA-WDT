import React from 'react';
import band_practice from '/images/band_practice.jpg';
import midnight_echoes_extended from '/images/midnight_echoes_extended.png';
import first_light_extended from '/images/first_light_extended.png';

const bandMembers = [
  {
    name: 'Alex Rivers',
    role: 'Lead Vocals',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'Alex found his voice in his parents\' garage at 15 and never looked back. His powerful vocals and magnetic stage presence define Stage Fright\'s sound.'
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Guitar',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'A classically trained musician turned rock guitarist, Sarah\'s innovative riffs and solos bring a unique edge to the band\'s music.'
  },
  {
    name: 'Marcus Thompson',
    role: 'Bass',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'The backbone of Stage Fright\'s rhythm section, Marcus started playing bass at 12 and has been laying down grooves ever since.'
  },
  {
    name: 'Luna Rodriguez',
    role: 'Drums',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'Luna\'s explosive drumming style and intricate rhythms drive the band\'s high-energy performances.'
  }
];

export default function About() {
  return (
    <div className="bg-black text-white">
      {/* Band Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Story</h1>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img
                src={band_practice}
                alt="Band performing"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-6">
                Stage Fright formed in 2020 when four musicians from different backgrounds came together
                with a shared vision: to create authentic, powerful rock music that speaks to the soul.
              </p>
              <p className="text-lg mb-6">
                What started as jam sessions in a cramped garage has evolved into one of the most
                exciting new forces in rock music. Our sound blends classic rock energy with modern
                innovation, creating something entirely our own.
              </p>
              <p className="text-lg">
                With two successful albums and countless electrifying live shows under our belt,
                we're just getting started. Stage Fright isn't just a band - it's a movement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Band Members */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Meet the Band</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bandMembers.map((member, index) => (
              <div key={index} className="bg-black rounded-lg overflow-hidden shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discography */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Music</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-lg p-6">
              <img
                src={midnight_echoes_extended}
                alt="Midnight Echoes Album"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Midnight Echoes (2024)</h3>
              <p className="text-gray-400">Our latest album featuring hits like "Electric Dreams" and "Neon Nights"</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6">
              <img
                src={first_light_extended}
                alt="First Light Album"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">First Light (2022)</h3>
              <p className="text-gray-400">Our debut album that put us on the map with "Midnight Run" and "City Lights"</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}