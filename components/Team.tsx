import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import type { TeamMember } from '../types';

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="bg-bg-primary rounded-2xl shadow-lg border border-border-color overflow-hidden text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
    {/* Image container */}
    <div className="bg-bg-secondary p-4 flex items-center justify-center">
      <img 
        src={member.imageUrl} 
        alt={`Professional portrait of ${member.name}`} 
        className="h-72 w-auto object-contain" 
      />
    </div>
    {/* Text container */}
    <div className="p-8">
      <h3 className="text-xl font-bold text-text-headings">{member.name}</h3>
      <p className="text-brand-accent font-semibold mb-3">{member.title}</p>
      <p className="text-text-body text-sm leading-relaxed">{member.bio}</p>
    </div>
  </div>
);

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-text-headings">Meet Our Professional Team</h2>
          <p className="text-text-body mt-4 text-lg max-w-2xl mx-auto">Dedicated to providing you with the best dental care.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;