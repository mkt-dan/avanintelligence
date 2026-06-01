'use client';

import { mapPoints, mapCategories } from '@/data/map';
import Link from 'next/link';

export default function MapPreview() {
  const randomPoints = mapPoints.slice(0, 6);

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex justify-between items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Global Knowledge Map</span>
            </h2>
            <p className="text-xl text-gray-400">Scientific experiences, research communities, and learning events worldwide</p>
          </div>
          <Link
            href="/map"
            className="hidden sm:inline-block px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-bold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all"
          >
            Explore Map
          </Link>
        </div>

        {/* Map Categories */}
        <div className="mb-8 flex flex-wrap gap-2">
          {mapCategories.slice(0, 6).map((category) => (
            <button
              key={category}
              className="px-3 py-1 text-sm rounded-full glass border border-white/10 text-gray-300 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Map Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Visual Map Placeholder */}
          <div className="glass rounded-xl p-6 border border-neon-cyan/20 h-80 flex items-center justify-center relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity">
              {randomPoints.map((point) => (
                <div
                  key={point.id}
                  className="absolute w-2 h-2 bg-neon-cyan rounded-full"
                  style={{
                    left: `${((point.longitude + 180) / 360) * 100}%`,
                    top: `${((90 - point.latitude) / 180) * 100}%`,
                  }}
                >
                  <div className="absolute inset-0 bg-neon-cyan rounded-full animate-ping opacity-75"></div>
                </div>
              ))}
            </div>
            <div className="relative z-10 text-center">
              <div className="text-4xl mb-3">🌍</div>
              <p className="text-gray-300">Interactive Global Map</p>
              <p className="text-sm text-gray-400 mt-2">{randomPoints.length} locations featured</p>
            </div>
          </div>

          {/* Points List */}
          <div className="space-y-3">
            {randomPoints.map((point) => (
              <div key={point.id} className="glass rounded-lg p-4 border border-white/10 card-hover cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-white">{point.title}</h4>
                  <span className="text-xs px-2 py-1 rounded bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/20">
                    {point.category}
                  </span>
                </div>
                <p className="text-sm text-gray-400">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/map"
          className="block sm:hidden w-full px-6 py-3 bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-bold rounded-lg text-center hover:shadow-lg hover:shadow-neon-cyan/50 transition-all"
        >
          Explore Map
        </Link>
      </div>
    </div>
  );
}
