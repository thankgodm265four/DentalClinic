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
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// FIX: Add GalleryImage interface for the smile gallery data.
export interface GalleryImage {
  beforeUrl: string;
  afterUrl: string;
  description: string;
}
