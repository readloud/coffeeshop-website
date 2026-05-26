import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Award, Clock, Heart, Coffee } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    { icon: Award, title: 'Premium Quality', description: 'Sourced from the finest beans worldwide' },
    { icon: Clock, title: 'Fresh Daily', description: 'Roasted and brewed fresh every day' },
    { icon: Heart, title: 'Artisan Craft', description: 'Made with passion and expertise' },
    { icon: Coffee, title: 'Sustainable', description: 'Ethically sourced and eco-friendly' },
  ]

  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container-custom">
        <h2 className="section-title">Our Story</h2>
        
        <div 
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Coffee shop interior"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-brown mb-4">
              Crafting Excellence Since 2020
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Java Reserve, we believe that great coffee is more than just a beverage—it's an experience. 
              Our journey began with a simple mission: to create a space where coffee lovers can gather, 
              connect, and enjoy the perfect cup.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Every bean is carefully selected from sustainable farms, roasted to perfection, 
              and brewed by our skilled baristas who are passionate about their craft.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <feature.icon className="w-6 h-6 text-coffee-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-brown mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About