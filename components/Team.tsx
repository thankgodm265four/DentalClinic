import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import type { TeamMember } from '../types';

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="bg-white rounded-lg shadow-xl overflow-hidden text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
    {/* Professional portrait of the team member. */}
    <img src={member.imageUrl} alt={`Dr. ${member.name}`} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
      <p className="text-brand-red font-semibold mb-2">{member.title}</p>
      <p className="text-gray-600 text-sm">{member.bio}</p>
    </div>
  </div>
);

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-blue-dark">Meet Our Professional Team</h2>
          <p className="text-gray-600 mt-2 text-lg">Dedicated to providing you with the best dental care.</p>
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