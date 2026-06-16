'use client';

export default function FinalCTA() {
  return (
    <div id="join" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-12 border border-neon-blue/20 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">Join the Experiment</span>
          </h2>

          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            We're building a platform for adaptive minds. A place where the fastest learners share insights, collaborate on discoveries, and question everything. If you believe intelligence is about how fast you can learn and adapt, you belong here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="/#join"
              className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-green text-white font-bold rounded-lg hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300"
            >
              Get Early Access
            </a>
            <a
              href="/about"
              className="px-8 py-4 glass border border-neon-blue/30 text-neon-blue font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          <p className="text-sm text-gray-500">
            No email required yet. Just a commitment to curiosity. 🧠
          </p>
        </div>
      </div>
    </div>
  );
}
