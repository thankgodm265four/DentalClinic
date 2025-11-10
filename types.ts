import type React from 'react';

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}

export interface Service {
  name: string;
  description: string;
  icon: React.ReactNode;
  detailedDescription: string;
  benefits: string[];
  imageUrl: string; // Kept for potential future use, but unused for icon-based detail pages
}

export interface FAQItem {
  question: string;
  answer: string;
}
