import React from 'react';
// FIX: Imported GalleryImage type.
import type { TeamMember, Service, FAQItem, GalleryImage } from './types';

// Icons for services
const TeethWhiteningIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M9 3v4M7 5h4M15 3v4M13 5h4M19 3v4M17 5h4M5 21v-7a2 2 0 012-2h10a2 2 0 012 2v7M5 21a2 2 0 002 2h10a2 2 0 002-2M5 21h14" />
    </svg>
);

const ScalingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.732 4.056A9 9 0 1021 12h-3" />
    </svg>
);

const OrthodonticsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.414a1 1 0 00-1.414-1.414l-6.414 6.414a1 1 0 001.414 1.414l5.172-5.172a2 2 0 00-2.828-2.828zM4 9a2 2 0 114 0 2 2 0 01-4 0zM4 15a2 2 0 114 0 2 2 0 01-4 0zM16 9a2 2 0 114 0 2 2 0 01-4 0zM16 15a2 2 0 114 0 2 2 0 01-4 0z" />
    </svg>
);

const DentalImplantIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

const RootCanalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-3-5v5m-3-2v2m-2 4h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const CrownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 18v-5h14v5M3 8a2 2 0 012-2h14a2 2 0 012 2v2H3V8zM12 3l3 3H9l3-3z" />
    </svg>
);

const ExtractionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l-5 5m0 0l5 5m-5-5h12" />
    </svg>
);

const PediatricIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

const FillingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
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
    bio: 'Oluwafemi ensures our clinic operates smoothly, focusing on patient comfort and providing a welcoming experience for everyone.',
    imageUrl: 'https://i.ibb.co/3K3rN6x/img2.jpg',
  },
];

export const MAIN_SERVICES: Service[] = [
  {
    name: 'Teeth Whitening',
    description: 'Brighten your smile with our professional teeth whitening services, safe and effective.',
    icon: <TeethWhiteningIcon />,
    detailedDescription: 'Our professional teeth whitening treatment is a fast, easy, and effective way to brighten your smile. We use advanced technology to remove stains caused by coffee, tea, smoking, and aging, leaving you with a noticeably whiter and more confident smile in just one visit.',
    benefits: ['Quick and noticeable results', 'Safe procedure under professional supervision', 'Boosts self-confidence', 'Removes stubborn stains'],
    imageUrl: 'https://i.ibb.co/KcqBqMD4/img4.jpg',
  },
  {
    name: 'Scaling & Polishing',
    description: 'Comprehensive dental cleaning to remove plaque and tartar for healthier gums.',
    icon: <ScalingIcon />,
    detailedDescription: 'Scaling and polishing is a routine procedure that is vital for maintaining oral hygiene. It involves removing plaque and tartar deposits that have built up on your teeth over time, helping to prevent gum disease, cavities, and bad breath. Your teeth will feel smooth and clean afterward.',
    benefits: ['Prevents gum disease', 'Removes plaque and tartar buildup', 'Freshens breath', 'Helps prevent cavities'],
    imageUrl: 'https://i.ibb.co/BvsBjnM/image-1.webp',
  },
  {
    name: 'Orthodontics',
    description: 'Straighten your teeth and correct your bite with modern orthodontic solutions.',
    icon: <OrthodonticsIcon />,
    detailedDescription: 'We offer a range of orthodontic treatments, including traditional braces and modern clear aligners, to help you achieve a perfectly aligned smile. Correcting misaligned teeth not only improves your appearance but also enhances your overall oral health by making teeth easier to clean and reducing strain on your jaw.',
    benefits: ['Corrects misaligned teeth and bite', 'Improves smile aesthetics', 'Enhances oral hygiene and health', 'Boosts long-term confidence'],
    imageUrl: 'https://i.ibb.co/67YB0WbG/gettyimages-1486369860-612x612.jpg',
  },
  {
    name: 'Dental Implants',
    description: 'A permanent solution for missing teeth that looks and feels natural.',
    icon: <DentalImplantIcon />,
    detailedDescription: 'Dental implants are the gold standard for replacing missing teeth. A titanium post is surgically placed into your jawbone to act as a sturdy root for a custom-made crown. The result is a replacement tooth that is strong, stable, and indistinguishable from your natural teeth.',
    benefits: ['Permanent and durable solution', 'Looks and functions like a natural tooth', 'Prevents bone loss', 'Restores full chewing ability'],
    imageUrl: 'https://i.ibb.co/r2SYr0tC/front-page-img.jpg',
  },
];

export const OTHER_SERVICES_DETAILED: Service[] = [
    {
      name: 'Root Canal Treatment',
      description: 'Save an infected tooth from extraction with our gentle root canal therapy.',
      icon: <RootCanalIcon />,
      detailedDescription: 'Root canal therapy is a treatment to repair and save a badly damaged or infected tooth instead of removing it. The procedure involves removing the damaged area of the tooth (the pulp), cleaning and disinfecting it, and then filling and sealing it. The common causes affecting the pulp are a cracked tooth, a deep cavity, repeated dental treatment to the tooth or trauma.',
      benefits: ['Relieves tooth pain', 'Saves the natural tooth', 'Prevents spread of infection', 'Visually appealing restoration'],
      imageUrl: '',
    },
    {
      name: 'Dental Crowns & Bridges',
      description: 'Restore the function and appearance of damaged or missing teeth.',
      icon: <CrownIcon />,
      detailedDescription: 'Dental crowns are caps placed over a damaged tooth to restore its shape, size, strength, and appearance. Bridges are used to fill the gap created by one or more missing teeth. Both are custom-made to match your natural teeth and provide a long-lasting solution for a healthy smile.',
      benefits: ['Strengthens damaged teeth', 'Replaces missing teeth', 'Improves chewing and speaking', 'Maintains facial shape'],
      imageUrl: '',
    },
    {
      name: 'Tooth Extractions',
      description: 'Gentle and safe removal of teeth that are beyond repair.',
      icon: <ExtractionIcon />,
      detailedDescription: 'A tooth extraction is the removal of a tooth from its socket in the bone. We perform extractions for various reasons, including severe decay, advanced periodontal disease, or a broken tooth that cannot be repaired. Our priority is to ensure the procedure is as comfortable and pain-free as possible.',
      benefits: ['Removes source of pain or infection', 'Prevents further oral health problems', 'Creates space for orthodontic treatment', 'Safe and effective procedure'],
      imageUrl: '',
    },
     {
      name: 'Pediatric Dentistry',
      description: 'Specialized dental care for infants, children, and adolescents.',
      icon: <PediatricIcon />,
      detailedDescription: 'Our pediatric dentistry services are designed to address the unique dental needs of children, from infancy through their teenage years. We focus on creating a positive and fun environment to build a foundation of trust and good oral hygiene habits that will last a lifetime.',
      benefits: ['Child-friendly environment', 'Focus on preventive care', 'Early detection of dental issues', 'Education for lifelong oral health'],
      imageUrl: '',
    },
    {
      name: 'Cosmetic Fillings',
      description: 'Repair cavities with tooth-colored fillings for a natural look.',
      icon: <FillingIcon />,
      detailedDescription: 'Cosmetic or composite fillings are made of a tooth-colored resin material that is matched to the shade of your natural teeth. They are used to repair teeth affected by decay, cracks, or fractures. Unlike traditional silver fillings, they are virtually invisible, providing a strong and aesthetically pleasing restoration.',
      benefits: ['Natural, tooth-colored appearance', 'Bonds directly to the tooth for strength', 'Repairs cavities and chips effectively', 'Mercury-free material'],
      imageUrl: '',
    },
];

// FIX: Added GALLERY_IMAGES data to be consumed by the Gallery component.
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    beforeUrl: 'https://i.ibb.co/b3s4C5f/before1.jpg',
    afterUrl: 'https://i.ibb.co/GWCF1r1/after1.jpg',
    description: 'Teeth Whitening Result',
  },
  {
    beforeUrl: 'https://i.ibb.co/2Z5W4xM/before2.jpg',
    afterUrl: 'https://i.ibb.co/T1W7bQc/after2.jpg',
    description: 'Orthodontic Alignment',
  },
  {
    beforeUrl: 'https://i.ibb.co/yQJ4c7p/before3.jpg',
    afterUrl: 'https://i.ibb.co/pwnX1qC/after3.jpg',
    description: 'Dental Implant Restoration',
  },
  {
    beforeUrl: 'https://i.ibb.co/3s3g9yP/before4.jpg',
    afterUrl: 'https://i.ibb.co/x7S5Cq7/after4.jpg',
    description: 'Smile Makeover with Veneers',
  },
];


export const FAQ_DATA: FAQItem[] = [
  {
    question: 'How often should I visit the dentist?',
    answer: 'We recommend a routine check-up and cleaning every six months. This allows us to catch any potential issues early and keep your teeth and gums healthy.',
  },
  {
    question: 'Is teeth whitening safe?',
    answer: 'Yes, professional teeth whitening under a dentist\'s supervision is a safe and effective procedure. We use approved materials and techniques to protect your teeth and gums.',
  },
  {
    question: 'What should I do in a dental emergency?',
    answer: 'If you have a dental emergency, such as a severe toothache, knocked-out tooth, or broken jaw, please contact us immediately. We offer emergency appointments to provide prompt care.',
  },
  {
    question: 'At what age should my child first see a dentist?',
    answer: 'The American Academy of Pediatric Dentistry recommends that a child should see a dentist by their first birthday or within six months after their first tooth erupts.',
  },
];