import React from 'react';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import FAQ from '../components/contact/FAQ';

export default function Contact() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-300">We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <FAQ />
        </div>
      </section>
    </div>
  );
}