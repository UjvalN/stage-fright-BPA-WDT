import React from 'react';

export default function ContactForm() {
  return (
    <div className="max-w-3xl mx-auto">
      <form className="bg-gray-900 p-8 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-purple-600"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-purple-600"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
          <select
            id="subject"
            className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-purple-600"
            required
          >
            <option value="">Select a subject</option>
            <option value="booking">Booking Inquiry</option>
            <option value="press">Press Inquiry</option>
            <option value="support">Customer Support</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
          <textarea
            id="message"
            rows={6}
            className="w-full px-4 py-2 bg-black border border-gray-800 rounded-lg focus:outline-none focus:border-purple-600"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}