import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-brand-teal-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-teal-dark">Our Smile Gallery</h2>
          <p className="text-gray-600 mt-2">See the amazing transformations we've created.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {GALLERY_IMAGES.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-2">
                <div>
                  {/* "Before" photo of a patient's smile. */}
                  <img src={image.beforeUrl} alt={`Before ${image.description}`} className="w-full h-64 object-cover" />
                  <p className="text-center font-semibold bg-gray-200 py-2">Before</p>
                </div>
                <div>
                  {/* "After" photo showcasing the treatment result. */}
                  <img src={image.afterUrl} alt={`After ${image.description}`} className="w-full h-64 object-cover" />
                  <p className="text-center font-semibold bg-brand-teal text-white py-2">After</p>
                </div>
              </div>
              <p className="text-center font-bold text-lg py-3 text-gray-700">{image.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;