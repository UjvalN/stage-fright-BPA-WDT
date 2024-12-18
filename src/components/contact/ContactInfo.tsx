import React from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

const contactOptions = [
  {
    icon: Mail,
    title: 'Email Us',
    info: 'info@stagefright.com'
  },
  {
    icon: Phone,
    title: 'Call Us',
    info: '(555) 123-4567'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    info: '123 Rock Street\nLos Angeles, CA 90001'
  },
  {
    icon: Calendar,
    title: 'Book Us',
    info: 'For booking inquiries'
  }
];

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
      {contactOptions.map((option, index) => (
        <div key={index} className="bg-gray-900 p-6 rounded-lg text-center">
          <option.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">{option.title}</h3>
          <p className="text-gray-400 whitespace-pre-line">{option.info}</p>
        </div>
      ))}
    </div>
  );
}