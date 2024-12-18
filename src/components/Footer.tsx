import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Music } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '/images/logo_ghost_only.png';

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com' },
    { icon: Twitter, href: 'https://twitter.com' },
    { icon: Instagram, href: 'https://instagram.com' },
    { icon: Youtube, href: 'https://youtube.com' }
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="logo" width="40" height="40"></img>
              <span className="text-xl font-bold">Stage Fright</span>
            </Link>
            <p className="text-gray-400">
              Experience the raw energy of rock with Stage Fright. Join us on our musical journey.
            </p>
          </div>

          {/*BPA Info*/}
          <div>
            <h3 className="text-lg font-bold mb-4">BPA Information</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Chapter Name: Liberty High School BPA (Chapter 02-0891)</li>
              <li>Team Member Names: Ujval, Toyeshh, Kailash</li>
              <li>Theme: Stage Fright Band</li>
              <li>School: Liberty High School</li>
              <li>City & State: Frisco, TX</li>
              <li>Year: 2024</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@stagefright.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Rock Street</li>
              <li>Los Angeles, CA 90001</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Join Our Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-400"
              />
              <button
                type="submit"
                className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Stage Fright. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}