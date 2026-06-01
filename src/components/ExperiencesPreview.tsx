'use client';

import ExperienceCard from './ExperienceCard';
import { experiences } from '@/data/experiences';
import Link from 'next/link';

export default function ExperiencesPreview() {
  const previewExperiences = experiences.slice(0, 3);

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex justify-between items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Scientific Experiences</span>
            </h2>
            <p className="text-xl text-gray-400">Global events, meetups, and experiences for curious learners</p>
          </div>
          <Link
            href="/experiences"
            className="hidden sm:inline-block px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-green text-white font-bold rounded-lg hover:shadow-lg hover:shadow-neon-blue/50 transition-all"
          >
            View Events
          </Link>
        </div>

        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {[
            'Astronomy Nights',
            'Biology Walks',
            'Philosophy Salons',
            'Science Cafés',
            'Research Events',
            'Museums',
          ].map((category) => (
            <button
              key={category}
              className="px-3 py-1 text-sm rounded-full glass border border-white/10 text-gray-300 hover:text-neon-blue hover:border-neon-blue/50 transition-all"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {previewExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>

        <Link
          href="/experiences"
          className="block sm:hidden w-full px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-green text-white font-bold rounded-lg text-center hover:shadow-lg hover:shadow-neon-blue/50 transition-all"
        >
          View Events
        </Link>
      </div>
    </div>
  );
}
