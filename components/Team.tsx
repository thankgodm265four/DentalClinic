import React from 'react';
import { TEAM_MEMBERS } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-text-headings">Meet Our Expert Team</h2>
          <p className="text-text-body mt-2 text-lg">Our dedicated professionals are here to provide you with the best care.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow-lg p-6 text-center">
              <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-xl font-bold text-text-headings">{member.name}</h3>
              <p className="text-brand-accent font-semibold mb-2">{member.title}</p>
              <p className="text-text-body">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;