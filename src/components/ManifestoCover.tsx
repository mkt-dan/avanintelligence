'use client';

import { manifestoPrinciples } from '@/data/manifesto';
import Link from 'next/link';

export default function ManifestoCover() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Principles</span>
          </h2>
          <p className="text-xl text-gray-400">The philosophy guiding Avan Intelligence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {manifestoPrinciples.slice(0, 6).map((principle, idx) => (
            <div
              key={principle.id}
              className="group glass rounded-xl p-6 border border-white/10 card-hover"
              style={{
                animationDelay: `${idx * 100}ms`,
              }}
            >
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                {principle.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/manifesto"
            className="inline-block px-8 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-bold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all"
          >
            Read Full Manifesto
          </Link>
        </div>
      </div>
    </div>
  );
}
