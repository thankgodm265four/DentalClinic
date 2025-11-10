import React from 'react';
// FIX: Import the GalleryImage type.
import type { TeamMember, Service, FAQItem, GalleryImage } from './types';

// Icons for Services
const ToothIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg>
);

const SparklesIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
);

const PlusCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const AdjustmentsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
    </svg>
);

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Dr. Ogunwande A. T.',
    title: 'Director, Consultant Surgeon',
    bio: 'With over 15 years of experience, Dr. Ogunwande leads our team with a passion for surgical excellence and patient-centered care.',
    imageUrl: 'https://i.ibb.co/zhGhXR8N/img1.jpg',
  },
  {
    name: 'Oluwafemi A. K. (RDTh.)',
    title: 'Principal Officer',
    bio: 'Oluwafemi is a registered dental therapist dedicated to providing top-notch preventative care and patient education.',
    imageUrl: 'https://i.ibb.co/GQWt0xGQ/img6.jpg',
  },
];

export const MAIN_SERVICES: Service[] = [
  {
    name: 'Teeth Whitening',
    description: 'Brighten your smile safely and effectively with our professional whitening services.',
    icon: <SparklesIcon />,
    detailedDescription: 'Our professional teeth whitening service is one of the quickest and most effective ways to enhance your smile. We use advanced, safe whitening agents to remove stubborn stains caused by coffee, tea, tobacco, and aging, revealing a brighter, more youthful smile in just one visit.',
    benefits: ['Dramatically whiter teeth', 'Boosted self-confidence', 'Fast and noticeable results', 'Safe procedure under professional supervision'],
    imageUrl: 'https://i.ibb.co/3YP6YMfm/whitening-smile.png',
  },
  {
    name: 'Scaling and Polishing',
    description: 'Remove stains and plaque for a cleaner, fresher smile and improved gum health.',
    icon: <ToothIcon />,
    detailedDescription: 'Scaling and polishing is a routine dental cleaning procedure that forms the foundation of good oral hygiene. Our therapists meticulously remove hardened plaque (tartar) and surface stains, then polish your teeth to a smooth, shiny finish. This treatment not only makes your smile look great but is crucial for preventing gum disease.',
    benefits: ['Prevents cavities and gum disease', 'Removes tartar and plaque buildup', 'Freshens breath', 'Results in a brighter, cleaner-feeling smile'],
    imageUrl: 'https://i.ibb.co/mNyqRzV/dapp-3.png',
  },
  {
    name: 'Teeth Replacement',
    description: 'Replace missing or damaged teeth with modern, natural-looking options.',
    icon: <PlusCircleIcon />,
    detailedDescription: 'Losing a tooth can affect your confidence, speech, and ability to chew. We offer a range of modern teeth replacement solutions, including dental implants, bridges, and dentures. Our experts will help you choose the best option to restore your smile’s function and appearance seamlessly.',
    benefits: ['Restores chewing ability and speech', 'Prevents adjacent teeth from shifting', 'Provides a natural and long-lasting look', 'Improves facial structure and confidence'],
    imageUrl: 'https://i.ibb.co/kfcvZrr/Image4.webp',
  },
  {
    name: 'Orthodontics',
    description: 'Align and straighten teeth with advanced braces and appliances for all ages.',
    icon: <AdjustmentsIcon />,
    detailedDescription: 'Orthodontic treatment goes beyond aesthetics; it improves the alignment of your teeth and jaw for better oral health. We provide solutions for both children and adults, including traditional braces and modern clear aligners, to correct issues like crooked teeth, overbites, and underbites, giving you a perfectly aligned and functional smile.',
    benefits: ['Straighter, more attractive smile', 'Easier cleaning and better oral hygiene', 'Corrects bite and jaw alignment issues', 'Reduces wear and tear on teeth'],
    imageUrl: 'https://i.ibb.co/b3D03tQ/dapp-4.png',
  },
];

export const OTHER_SERVICES: string[] = [
  'Dental Implants', 'Dental Veneers', 'Dental Crowns', 'Tooth Extraction', 
  'Teeth Cleaning', 'Scaling & Root Planing', 'Composite Fillings', 'Teeth Bonding', 'Root Canal'
];

export const FAQ_DATA: FAQItem[] = [
    {
        question: 'How often should I visit the dentist?',
        answer: 'For most people, a dental check-up and cleaning every six months is recommended. However, your dentist might suggest a different schedule based on your personal oral health needs.',
    },
    {
        question: 'What is plaque and why is it harmful?',
        answer: 'Plaque is a sticky film of bacteria that constantly forms on your teeth. If not removed by regular brushing and flossing, it can harden into tartar, lead to cavities, gum disease (gingivitis), and other dental problems.',
    },
    {
        question: 'How can I prevent cavities?',
        answer: 'Preventing cavities involves brushing twice a day with fluoride toothpaste, flossing daily, eating a balanced diet low in sugar, and visiting your dentist regularly for check-ups and cleanings.',
    },
    {
        question: 'What causes bleeding gums?',
        answer: 'Bleeding gums are often the first sign of gum disease (gingivitis), caused by plaque buildup along the gumline. It can also be caused by brushing too hard. It’s important to see a dentist to determine the cause and get treatment.',
    },
    {
        question: 'What are the options for teeth whitening?',
        answer: 'We offer professional in-office whitening for immediate results and custom take-home whitening kits for your convenience. Your dentist can help you decide which option is best for your smile and lifestyle.',
    },
    {
        question: 'When should my child first see a dentist?',
        answer: 'The Nigerian Dental Association recommends that a child should see a dentist within six months of their first tooth erupting, or by their first birthday. Early visits help establish a positive relationship with dental care.',
    },
    {
        question: 'What should I do in a dental emergency?',
        answer: 'In a dental emergency, such as a knocked-out tooth or severe toothache, please call our clinic immediately at +234 810 5001 567. We will provide instructions and arrange to see you as soon as possible.',
    },
];

// FIX: Add and export GALLERY_IMAGES to resolve the import error in Gallery.tsx.
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    beforeUrl: 'https://source.unsplash.com/600x600/?yellow-teeth,sad-smile',
    afterUrl: 'https://i.ibb.co/1J400VcW/image2.webp',
    description: 'Teeth Whitening Transformation',
  },
  {
    beforeUrl: 'https://source.unsplash.com/600x600/?crooked-teeth,unhappy',
    afterUrl: 'https://i.ibb.co/3K3rN6x/img2.jpg',
    description: 'Orthodontic Alignment',
  },
  {
    beforeUrl: 'https://source.unsplash.com/600x600/?missing-tooth,smile-gap',
    afterUrl: 'https://i.ibb.co/hFS93z5F/img7.jpg',
    description: 'Dental Implant Restoration',
  },
  {
    beforeUrl: 'https://source.unsplash.com/600x600/?chipped-tooth,closeup',
    afterUrl: 'https://i.ibb.co/dsPMzGLj/img17.jpg',
    description: 'Veneers for a Flawless Finish',
  },
];