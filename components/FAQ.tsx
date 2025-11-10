import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import type { FAQItem as FAQItemType } from '../types';

const AccordionItem: React.FC<{ item: FAQItemType }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border-color">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-5 px-2 focus:outline-none"
      >
        <span className="text-lg font-medium text-text-headings">{item.question}</span>
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-brand-accent-light flex-shrink-0">
            <span className={`transform transition-transform duration-300 text-brand-accent font-bold ${isOpen ? 'rotate-45' : ''}`}>
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
            </span>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="pb-5 px-2 text-text-body">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-headings">Frequently Asked Questions</h2>
          <p className="text-text-body mt-2 text-lg">Answers to common questions about dental care.</p>
        </div>
        <div className="max-w-3xl mx-auto bg-bg-primary rounded-lg p-4 border border-border-color">
          {FAQ_DATA.map((item) => (
            <AccordionItem key={item.question} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;