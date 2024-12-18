import React from 'react';

const faqs = [
  {
    question: 'How can I book Stage Fright for a private event?',
    answer: 'Please use our contact form and select "Booking Inquiry" as the subject. Our team will get back to you with availability and pricing information.'
  },
  {
    question: 'Do you offer meet and greet packages?',
    answer: 'Yes! We offer VIP packages that include meet and greet opportunities. Check our Tour page for available packages.'
  },
  {
    question: 'How can I get updates about new music and tours?',
    answer: 'Subscribe to our newsletter in the footer section of the website to stay updated with all the latest news and announcements.'
  },
  {
    question: 'What is your refund policy for merchandise?',
    answer: 'We offer full refunds on unworn/unused merchandise within 30 days of purchase. Please contact our support team for return instructions.'
  }
];

export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-black p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
          <p className="text-gray-400">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}