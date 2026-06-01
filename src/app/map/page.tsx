'use client';

import { mapPoints, mapCategories } from '@/data/map';
import { useState } from 'react';

export default function MapPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPoints = selectedCategory
    ? mapPoints.filter((p) => p.category === selectedCategory)
    : mapPoints;

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Global Knowledge Map</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            A living map of scientific experiences, research communities, and learning events across the world. Filter by category to discover events near you.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-400 mb-4">FILTER BY CATEGORY</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedCategory === null
                  ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-semibold'
                  : 'glass border border-white/10 text-gray-300 hover:border-neon-cyan/50'
              }`}
            >
              All Categories
            </button>
            {mapCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-black font-semibold'
                    : 'glass border border-white/10 text-gray-300 hover:border-neon-cyan/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Map Visualization and Points */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="glass rounded-xl p-8 border border-neon-cyan/20 h-96 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                {filteredPoints.map((point) => (
                  <div
                    key={point.id}
                    className="absolute w-3 h-3 bg-neon-cyan rounded-full cursor-pointer hover:scale-150 transition-transform"
                    title={point.title}
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
                <div className="text-6xl mb-3">🌍</div>
                <p className="text-gray-300 font-semibold">{filteredPoints.length} Locations</p>
                <p className="text-sm text-gray-400 mt-2">
                  {selectedCategory || 'All categories'}
                </p>
              </div>
            </div>
          </div>

          {/* Points List */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-4 text-white">Locations ({filteredPoints.length})</h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {filteredPoints.map((point) => (
                <div
                  key={point.id}
                  className="glass rounded-lg p-4 border border-white/10 card-hover cursor-pointer"
                >
                  <h4 className="font-semibold text-white mb-1">{point.title}</h4>
                  <p className="text-xs text-neon-cyan mb-2">{point.category}</p>
                  <p className="text-sm text-gray-400">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="mt-12 glass rounded-xl p-6 border border-neon-cyan/20">
          <div className="flex gap-4">
            <div className="text-3xl">💡</div>
            <div>
              <h3 className="font-bold text-white mb-2">This is a Living Map</h3>
              <p className="text-gray-300">
                The locations and events shown are mock data for the MVP. Once you join the platform, you'll be able to add your own experiences, discover real events near you, and connect with fellow learners worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
