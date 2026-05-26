import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Veren Fellisca',
      role: 'Coffee Enthusiast',
      rating: 5,
      text: 'The best coffee I\'ve ever had! The atmosphere is incredibly cozy, and the staff is so friendly. I love coming here every morning.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Anisa Naila Qodah',
      role: 'Freelancer',
      rating: 5,
      text: 'Perfect spot for working remotely. Great WiFi, amazing coffee, and plenty of power outlets. The pastries are delicious too!',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
    {
      name: 'Indra Saputra',
      role: 'Food Blogger',
      rating: 5,
      text: 'Java Reserve is a hidden gem! Their latte art is Instagram-worthy and the flavors are exceptional. Highly recommend!',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    },
  ];

  return (
    <section className="py-20 bg-coffee-50">
      <div className="container-custom">
        <h2 className="section-title">What Our Customers Say</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <Quote className="w-10 h-10 text-coffee-400" stroke="currentColor" />
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" stroke="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-brown">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
