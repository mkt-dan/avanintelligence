'use client';

export default function LivingSocialExperiment() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-8 sm:p-12 border border-neon-cyan/20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="gradient-text">A Living Social Experiment</span>
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Avan Intelligence is under constant construction — and that is the point. We are building this platform as a living social experiment: a place to observe how people learn, share, question, adapt and redefine intelligence together.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-3xl mb-2">🔄</div>
              <h3 className="font-semibold text-white mb-2">Constantly Evolving</h3>
              <p className="text-sm text-gray-400">Features, design, and community guidelines change as we learn.</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-3xl mb-2">🤝</div>
              <h3 className="font-semibold text-white mb-2">Community Driven</h3>
              <p className="text-sm text-gray-400">Your feedback shapes our direction and philosophy.</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10">
              <div className="text-3xl mb-2">🧠</div>
              <h3 className="font-semibold text-white mb-2">Learning Lab</h3>
              <p className="text-sm text-gray-400">We experiment, fail, and iterate to understand intelligence.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
