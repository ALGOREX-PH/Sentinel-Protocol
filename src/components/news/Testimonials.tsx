import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "I avoided a $5k loss thanks to your rug pull alert.",
    author: "Retail Trader",
    location: "Philippines",
  },
  {
    quote: "This is the Bloomberg Terminal for crypto fraud intelligence.",
    author: "Institutional Analyst",
    location: "Singapore",
  },
  {
    quote: "Finally, a tool that helps me sleep better at night.",
    author: "NFT Project Manager",
    location: "USA",
  },
];

export default function Testimonials() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl text-sentinel-white font-bold mb-4">What Our Users Are Saying</h2>
          <p className="text-sentinel-white/60 max-w-2xl mx-auto">
            Join thousands of users who trust our platform for crypto security
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.quote}
              className="bg-sentinel-dark-800/50 rounded-xl p-6 border border-sentinel-dark-700"
            >
              <Quote className="h-8 w-8 text-sentinel-cyan mb-4" />
              <p className="text-lg text-sentinel-white mb-6">{testimonial.quote}</p>
              <div>
                <div className="font-medium text-sentinel-white">{testimonial.author}</div>
                <div className="text-sentinel-white/40">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}