'use client';

import { manifestoPrinciples, knowledgePillars } from '@/data/manifesto';

export default function ManifestoPage() {
  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Avan Intelligence Manifesto</span>
          </h1>
          <p className="text-xl text-gray-400">
            A declaration of principles for rediscovering intelligence together
          </p>
        </div>

        {/* Intro */}
        <div className="glass rounded-xl p-8 border border-neon-blue/20 mb-16">
          <p className="text-lg text-gray-300 leading-relaxed">
            Avan Intelligence exists because we believe intelligence is not what you already know, but how fast you can learn, adapt, question and act. We are building a platform that recognizes this truth and creates spaces for curious humans to evolve together.
          </p>
        </div>

        {/* Principles */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-12">
            <span className="gradient-text">Six Principles</span>
          </h2>

          <div className="space-y-8">
            {manifestoPrinciples.map((principle, idx) => (
              <div key={principle.id} className="glass rounded-xl p-8 border border-white/10">
                <div className="flex gap-4 mb-4">
                  <div className="text-3xl font-bold text-neon-blue w-8 flex-shrink-0">
                    {idx + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{principle.title}</h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed ml-12">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Knowledge Pillars */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-12">
            <span className="gradient-text">Knowledge Pillars</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {knowledgePillars.map((pillar) => (
              <div key={pillar.id} className="glass rounded-xl p-6 border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{pillar.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                    <p className="text-gray-300">{pillar.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="glass rounded-xl p-8 border border-neon-blue/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">This is a Living Manifesto</h2>
          <p className="text-gray-300 mb-6">
            We don't pretend to have all the answers. This manifesto evolves as our community grows and learns. If you believe in these principles and want to help shape the future of intelligent learning, join us.
          </p>
          <a
            href="/#join"
            className="inline-block px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-green text-white font-bold rounded-lg hover:shadow-lg hover:shadow-neon-blue/50 transition-all"
          >
            Join the Experiment
          </a>
        </div>
      </div>
    </div>
  );
}
