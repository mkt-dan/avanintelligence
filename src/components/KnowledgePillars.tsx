'use client';

import { knowledgePillars } from '@/data/manifesto';

export default function KnowledgePillars() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Knowledge Pillars</span>
          </h2>
          <p className="text-xl text-gray-400">What we stand on</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {knowledgePillars.map((pillar) => (
            <div
              key={pillar.id}
              className="glass rounded-xl p-6 border border-white/10 text-center card-hover group cursor-pointer"
            >
              <div className="text-4xl mb-3">{pillar.icon}</div>
              <h3 className="font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
