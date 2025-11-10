import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import type { FAQItem } from '../types';

const FaqItemComponent: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 flex justify-between items-center"
      >
        <span className="font-semibold text-lg text-text-headings">{item.question}</span>
        <span className="text-brand-accent text-2xl">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="pb-4 pr-8">
          <p className="text-text-body">{item.answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-headings">Frequently Asked Questions</h2>
          <p className="text-text-body mt-2 text-lg">Have questions? We have answers.</p>
        </div>
        <div className="max-w-3xl mx-auto">
          {FAQ_DATA.map((item, index) => (
            <FaqItemComponent key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;