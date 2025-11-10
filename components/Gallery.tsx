import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-headings">Our Smile Gallery</h2>
          <p className="text-text-body mt-2 text-lg">See the amazing transformations we've created.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {GALLERY_IMAGES.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg border border-border-color overflow-hidden group">
              <div className="grid grid-cols-2">
                <div className="overflow-hidden">
                  <img src={image.beforeUrl} alt={`Before ${image.description}`} className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                  <p className="text-center font-semibold bg-gray-200 py-2 text-text-body">Before</p>
                </div>
                <div className="overflow-hidden">
                  <img src={image.afterUrl} alt={`After ${image.description}`} className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                  <p className="text-center font-semibold bg-brand-accent text-white py-2">After</p>
                </div>
              </div>
              <p className="text-center font-bold text-lg py-3 text-text-headings">{image.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;