'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-4">
            <span className="gradient-text">About Avan Intelligence</span>
          </h1>
        </div>

        {/* Mission */}
        <div className="glass rounded-xl p-8 border border-neon-cyan/20 mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Avan Intelligence is a living social experiment under constant construction. We are building a platform that redefines what intelligence means in the 21st century. We believe intelligence is not what you know, but how fast you can learn, adapt, question, and act.
          </p>
        </div>

        {/* Vision */}
        <div className="glass rounded-xl p-8 border border-white/10 mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            We envision a world where curious minds across disciplines and geographies can:
          </p>
          <ul className="space-y-3">
            {[
              'Share research papers and findings across scientific disciplines',
              'Discover and organize scientific experiences and learning events',
              'Build knowledge networks based on genuine intellectual curiosity',
              'Question existing paradigms and co-create new understanding',
              'Learn from each other in real-time through a living social feed',
              'Map global research communities and adaptive learning initiatives',
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-neon-cyan font-bold flex-shrink-0">•</span>
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why Now */}
        <div className="glass rounded-xl p-8 border border-white/10 mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Now?</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            We live in an age of information overload. Yet true understanding—the ability to synthesize, question, and adapt—remains rare. Avan Intelligence addresses this gap by creating a space where quality learning is prioritized over content consumption, where philosophical inquiry is valued alongside empirical research, and where community learning shapes how we define intelligence itself.
          </p>
        </div>

        {/* What Makes Us Different */}
        <div className="glass rounded-xl p-8 border border-white/10 mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">What Makes Us Different</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-neon-cyan mb-2">🚀 Not a Finished Product</h3>
              <p className="text-gray-300">
                We're building Avan Intelligence in public. You'll see our experiments, iterations, and even our failures. This is intentional—we believe the best platforms evolve with their communities.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-neon-cyan mb-2">🧠 Multidisciplinary</h3>
              <p className="text-gray-300">
                We embrace research from neuroscience, philosophy, biology, AI, psychology, and beyond. Knowledge doesn't live in silos, and neither should we.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-neon-cyan mb-2">🌍 Global & Local</h3>
              <p className="text-gray-300">
                Our map connects global research communities while honoring local learning experiences and cultural contexts.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-neon-cyan mb-2">📚 Community-Driven</h3>
              <p className="text-gray-300">
                Users shape the platform's direction. Your feedback, ideas, and experiences directly influence how Avan evolves.
              </p>
            </div>
          </div>
        </div>

        {/* Current Status */}
        <div className="glass rounded-xl p-8 border border-neon-cyan/20">
          <h2 className="text-3xl font-bold text-white mb-4">Current Status</h2>
          <p className="text-gray-300 mb-4">
            This is the MVP (Minimum Viable Product) template. It includes:
          </p>
          <ul className="space-y-2 text-gray-300 mb-6">
            <li>✓ Next.js with TypeScript</li>
            <li>✓ Responsive design with Tailwind CSS</li>
            <li>✓ Mock data for demonstration</li>
            <li>✓ Component-based architecture</li>
            <li>✓ No backend, authentication, or payments yet</li>
          </ul>
          <p className="text-gray-400 text-sm">
            Future releases will include user accounts, real paper submissions, event creation, and AI-powered recommendations.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#join"
            className="inline-block px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-bold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all text-lg"
          >
            Join the Experiment
          </a>
        </div>
      </div>
    </div>
  );
}
