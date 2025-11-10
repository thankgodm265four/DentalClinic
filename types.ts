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
  // FIX: Replaced JSX.Element with React.ReactNode to resolve "Cannot find namespace 'JSX'" error. This requires importing React types.
  icon: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface GalleryImage {
  beforeUrl: string;
  afterUrl: string;
  description: string;
}
