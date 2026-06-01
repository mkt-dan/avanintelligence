'use client';

import ExperienceCard from '@/components/ExperienceCard';
import { experiences } from '@/data/experiences';
import { useState } from 'react';

const CATEGORIES = [
  'All',
  'Astronomy Nights',
  'Biology Walks',
  'Philosophy Salons',
  'Science Cafés',
  'Museums',
  'Research Events',
  'Scientific Experiences',
  'Citizen Science',
];

const ALCOHOL_OPTIONS = ['All', 'With Alcohol', 'Alcohol-Free', 'Optional'];

export default function ExperiencesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAlcohol, setSelectedAlcohol] = useState('All');

  const filteredExperiences = experiences.filter((exp) => {
    const categoryMatch =
      selectedCategory === 'All' || exp.category === selectedCategory;
    const alcoholMatch =
      selectedAlcohol === 'All' || exp.alcoholOption === selectedAlcohol;
    return categoryMatch && alcoholMatch;
  });

  const allTags = Array.from(new Set(experiences.flatMap((e) => e.tags)));

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Scientific Experiences</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Global events, meetups, and experiences for curious learners. From astronomy nights to philosophy salons, find your community.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-6">
          {/* Category Filter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-3">CATEGORY</h3>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-semibold'
                      : 'glass border border-white/10 text-gray-300 hover:border-neon-cyan/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Alcohol Filter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-3">ALCOHOL OPTION</h3>
            <div className="flex flex-wrap gap-2">
              {ALCOHOL_OPTIONS.map((option) => (
                <button
                  key={option}
                  onClick={() => setSelectedAlcohol(option)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedAlcohol === option
                      ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-semibold'
                      : 'glass border border-white/10 text-gray-300 hover:border-neon-cyan/50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Tag Cloud */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-3">TAGS</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full glass border border-neon-cyan/20 text-neon-cyan hover:border-neon-cyan/50 transition-all"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-8">
          <p className="text-sm text-gray-400">
            {filteredExperiences.length} event{filteredExperiences.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>

        {/* Info Banner */}
        <div className="glass rounded-xl p-6 border border-neon-cyan/20">
          <div className="flex gap-4">
            <div className="text-3xl">🌍</div>
            <div>
              <h3 className="font-bold text-white mb-2">Events with Mock Data</h3>
              <p className="text-gray-300">
                These are sample events showing the platform's potential. When live, organizers can create events, learners can RSVP, and communities can discover each other through shared interests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
