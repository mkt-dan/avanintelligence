'use client';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-neon-blue/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-neon-green/15 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <div className="inline-block mb-6">
          <div className="px-4 py-2 rounded-full glass border border-neon-blue/30 text-sm text-neon-blue font-medium">
            🚀 Living Social Experiment
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Redefining Intelligence,</span>
          <br />
          <span className="text-white">Together.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Avan Intelligence is a living social experiment where curious humans share papers, findings, questions and scientific experiences to rediscover knowledge as a society.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/#join"
            className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-green text-white font-bold rounded-lg hover:shadow-lg hover:shadow-neon-blue/50 transition-all duration-300 text-lg"
          >
            Join the Knowledge Network
          </a>
          <a
            href="/map"
            className="px-8 py-4 glass border border-neon-blue/30 text-neon-blue font-bold rounded-lg hover:bg-white/10 transition-all duration-300 text-lg"
          >
            Explore the Map
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-neon-blue rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
