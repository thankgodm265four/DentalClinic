import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import type { TeamMember } from '../types';

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="bg-bg-primary rounded-lg shadow-lg overflow-hidden text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    {/* Professional portrait of the team member. */}
    <img src={member.imageUrl} alt={`Dr. ${member.name}`} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-text-headings">{member.name}</h3>
      <p className="text-brand-accent font-semibold mb-2">{member.title}</p>
      <p className="text-text-body text-sm">{member.bio}</p>
    </div>
  </div>
);

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-bg-primary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-headings">Meet Our Professional Team</h2>
          <p className="text-text-body mt-2 text-lg">Dedicated to providing you with the best dental care.</p>
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