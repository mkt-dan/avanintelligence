'use client';

import PaperCard from './PaperCard';
import { papers } from '@/data/papers';
import Link from 'next/link';

export default function PapersPreview() {
  const previewPapers = papers.slice(0, 3);

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex justify-between items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Research Papers Hub</span>
            </h2>
            <p className="text-xl text-gray-400">Curated papers on learning, intelligence, neuroscience, philosophy, and beyond</p>
          </div>
          <Link
            href="/papers"
            className="hidden sm:inline-block px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-bold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all"
          >
            Browse Papers
          </Link>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {['All', 'Neuroscience', 'Philosophy', 'AI', 'Learning', 'Biology'].map((filter) => (
            <button
              key={filter}
              className={`px-3 py-1 text-sm rounded-full transition-all ${
                filter === 'All'
                  ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-black'
                  : 'glass border border-white/10 text-gray-300 hover:text-neon-cyan hover:border-neon-cyan/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Papers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {previewPapers.map((paper) => (
            <PaperCard key={paper.id} paper={paper} />
          ))}
        </div>

        <Link
          href="/papers"
          className="block sm:hidden w-full px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-bold rounded-lg text-center hover:shadow-lg hover:shadow-neon-cyan/50 transition-all"
        >
          Browse Papers
        </Link>
      </div>
    </div>
  );
}
