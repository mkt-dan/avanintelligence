'use client';

import { Paper } from '@/types';

interface PaperCardProps {
  paper: Paper;
}

export default function PaperCard({ paper }: PaperCardProps) {
  return (
    <div className="group glass rounded-xl p-6 border border-white/10 card-hover cursor-pointer h-full flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white group-hover:text-neon-cyan transition-colors line-clamp-2">
            {paper.title}
          </h3>
          <p className="text-xs text-gray-400 mt-1">{paper.year}</p>
        </div>
      </div>

      <div className="mb-4 flex-1">
        <p className="text-sm text-gray-300 line-clamp-3">{paper.summary}</p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span className="px-2 py-1 rounded bg-white/5 border border-white/10">
            {paper.difficultyLevel}
          </span>
          <span className="px-2 py-1 rounded bg-white/5 border border-white/10">
            {paper.readingTime} min read
          </span>
        </div>

        <div className="flex flex-wrap gap-1">
          {paper.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 text-neon-cyan border border-neon-cyan/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="text-xs text-gray-400 pt-2 border-t border-white/10">
          <p className="line-clamp-1">By {paper.authors.join(', ')}</p>
        </div>
      </div>
    </div>
  );
}
