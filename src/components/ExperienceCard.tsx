'use client';

import { Experience } from '@/types';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const date = new Date(experience.date);
  const dateStr = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="group glass rounded-xl p-6 border border-white/10 card-hover cursor-pointer h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-white group-hover:text-neon-cyan transition-colors line-clamp-2">
          {experience.title}
        </h3>
        <p className="text-sm text-neon-cyan mt-1">
          {experience.city}, {experience.country}
        </p>
      </div>

      <p className="text-sm text-gray-300 mb-4 flex-1 line-clamp-2">{experience.description}</p>

      <div className="space-y-3">
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
            {experience.category}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
            {experience.alcoholOption}
          </span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <span className="text-xs text-gray-400">{dateStr}</span>
          <div className="flex gap-1">
            {experience.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 text-neon-cyan border border-neon-cyan/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
