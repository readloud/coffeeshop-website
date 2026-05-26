import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Coffee, Cake, Sandwich } from 'lucide-react'

const Menu = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeCategory, setActiveCategory] = useState('coffee')

  const categories = [
    { id: 'coffee', name: 'Coffee', icon: Coffee },
    { id: 'pastry', name: 'Pastry', icon: Cake },
    { id: 'sandwich', name: 'Sandwich', icon: Sandwich },
  ]

  const menuItems = {
    coffee: [
      { name: 'Espresso', price: '$3.50', description: 'Strong and bold single shot', popular: true },
      { name: 'Cappuccino', price: '$4.50', description: 'Espresso with steamed milk foam', popular: true },
      { name: 'Latte', price: '$4.50', description: 'Smooth espresso with steamed milk' },
      { name: 'Americano', price: '$3.50', description: 'Espresso with hot water' },
      { name: 'Mocha', price: '$5.00', description: 'Espresso with chocolate and milk' },
      { name: 'Cold Brew', price: '$4.50', description: 'Slow-steeped for 12 hours' },
    ],
    pastry: [
      { name: 'Croissant', price: '$3.50', description: 'Buttery, flaky French pastry', popular: true },
      { name: 'Cinnamon Roll', price: '$4.00', description: 'Warm roll with cream cheese icing' },
      { name: 'Chocolate Chip Cookie', price: '$2.50', description: 'Soft-baked with premium chocolate' },
      { name: 'Cheesecake', price: '$5.50', description: 'New York style with berry compote' },
      { name: 'Banana Bread', price: '$3.50', description: 'Moist loaf with walnuts' },
    ],
    sandwich: [
      { name: 'Turkey Avocado', price: '$8.50', description: 'Turkey, avocado, lettuce on sourdough', popular: true },
      { name: 'Veggie Delight', price: '$7.50', description: 'Roasted vegetables with hummus' },
      { name: 'Chicken Pesto', price: '$9.00', description: 'Grilled chicken with pesto and mozzarella' },
      { name: 'Breakfast Bagel', price: '$6.50', description: 'Egg, cheese, and bacon on everything bagel' },
    ],
  }

  return (
    <section id="menu" className="py-20 bg-coffee-50">
      <div className="container-custom">
        <h2 className="section-title">Our Menu</h2>
        
        {/* Category Tabs */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-coffee-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-brown hover:bg-coffee-100'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span className="font-semibold">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div 
          ref={ref}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {menuItems[activeCategory].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-brown">
                  {item.name}
                  {item.popular && (
                    <span className="ml-2 text-xs bg-coffee-100 text-coffee-700 px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </h3>
                <span className="text-2xl font-bold text-coffee-600">{item.price}</span>
              </div>
              <p className="text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu