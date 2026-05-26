import React, { useState } from 'react'
import { X } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Cozy Interior',
    },
    {
      url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Pour Over Coffee',
    },
    {
      url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Fresh Brew',
    },
    {
      url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Coffee Art',
    },
    {
      url: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Outdoor Seating',
    },
    {
      url: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Pastry Selection',
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-cream">
      <div className="container-custom">
        <h2 className="section-title">Our Gallery</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Take a glimpse into our cozy space and the moments we create every day
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg transform transition-all duration-300 hover:scale-105"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-xl font-semibold">{image.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-coffee-400 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold">
              {selectedImage.title}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery