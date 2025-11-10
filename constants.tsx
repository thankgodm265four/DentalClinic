import React from 'react';
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
    imageUrl: 'https://source.unsplash.com/400x400/?african,male,doctor,portrait,smile',
  },
  {
    name: 'Oluwafemi A. K. (RDTh.)',
    title: 'Principal Officer',
    bio: 'Oluwafemi is a registered dental therapist dedicated to providing top-notch preventative care and patient education.',
    imageUrl: 'https://source.unsplash.com/400x400/?african,female,dentist,portrait,smile',
  },
];

export const MAIN_SERVICES: Service[] = [
  {
    name: 'Teeth Whitening',
    description: 'Brighten your smile safely and effectively with our professional whitening services.',
    icon: <SparklesIcon />,
  },
  {
    name: 'Scaling and Polishing',
    description: 'Remove stains and plaque for a cleaner, fresher smile and improved gum health.',
    icon: <ToothIcon />,
  },
  {
    name: 'Teeth Replacement',
    description: 'Replace missing or damaged teeth with modern, natural-looking options.',
    icon: <PlusCircleIcon />,
  },
  {
    name: 'Orthodontics',
    description: 'Align and straighten teeth with advanced braces and appliances for all ages.',
    icon: <AdjustmentsIcon />,
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

export const GALLERY_IMAGES: GalleryImage[] = [
    {
        beforeUrl: 'https://source.unsplash.com/600x400/?african-woman-sad-smile',
        afterUrl: 'https://source.unsplash.com/600x400/?african-woman-perfect-smile',
        description: 'Teeth Whitening',
    },
    {
        beforeUrl: 'https://source.unsplash.com/600x400/?african-man-mouth-pain',
        afterUrl: 'https://source.unsplash.com/600x400/?african-man-healthy-smile',
        description: 'Composite Fillings',
    },
    {
        beforeUrl: 'https://source.unsplash.com/600x400/?teenager-braces-unhappy',
        afterUrl: 'https://source.unsplash.com/600x400/?african-teenager-perfect-smile',
        description: 'Orthodontics',
    },
     {
        beforeUrl: 'https://source.unsplash.com/600x400/?african-person-hiding-smile',
        afterUrl: 'https://source.unsplash.com/600x400/?african-person-confident-smile',
        description: 'Dental Crowns',
    },
];