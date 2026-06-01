'use client';

import PaperCard from '@/components/PaperCard';
import { papers } from '@/data/papers';
import { useState } from 'react';

const DISCIPLINES = [
  'All',
  'Neuroscience',
  'Cognitive Science',
  'Biology',
  'Philosophy',
  'Psychology',
];

const DIFFICULTY_LEVELS = ['All', 'Beginner', 'Intermediate', 'Advanced'];

export default function PapersPage() {
  const [selectedDiscipline, setSelectedDiscipline] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  const filteredPapers = papers.filter((paper) => {
    const disciplineMatch =
      selectedDiscipline === 'All' || paper.discipline === selectedDiscipline;
    const difficultyMatch =
      selectedDifficulty === 'All' ||
      paper.difficultyLevel === selectedDifficulty;
    return disciplineMatch && difficultyMatch;
  });

  const allTags = Array.from(new Set(papers.flatMap((p) => p.tags)));

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Research Papers Hub</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            A curated collection of papers on learning, intelligence, neuroscience, philosophy, biology, and the nature of knowledge itself.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-6">
          {/* Discipline Filter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-3">DISCIPLINE</h3>
            <div className="flex flex-wrap gap-2">
              {DISCIPLINES.map((discipline) => (
                <button
                  key={discipline}
                  onClick={() => setSelectedDiscipline(discipline)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedDiscipline === discipline
                      ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-semibold'
                      : 'glass border border-white/10 text-gray-300 hover:border-neon-cyan/50'
                  }`}
                >
                  {discipline}
                </button>
              ))}
            </div>
          </div>

          {/* Difficulty Filter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-3">DIFFICULTY</h3>
            <div className="flex flex-wrap gap-2">
              {DIFFICULTY_LEVELS.map((level) => (
                <button
                  key={level}
                  onClick={() => setSelectedDifficulty(level)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedDifficulty === level
                      ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-semibold'
                      : 'glass border border-white/10 text-gray-300 hover:border-neon-cyan/50'
                  }`}
                >
                  {level}
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
            {filteredPapers.length} paper{filteredPapers.length !== 1 ? 's' : ''} found
          </p>
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPapers.map((paper) => (
            <PaperCard key={paper.id} paper={paper} />
          ))}
        </div>

        {/* Info Banner */}
        <div className="glass rounded-xl p-6 border border-neon-cyan/20">
          <div className="flex gap-4">
            <div className="text-3xl">📚</div>
            <div>
              <h3 className="font-bold text-white mb-2">Papers with Mock Data</h3>
              <p className="text-gray-300">
                These are sample papers to demonstrate the platform. Once live, researchers can share and discover real papers, with full citations, abstracts, and links to research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
