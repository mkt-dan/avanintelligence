'use client';

import FeedPostCard from '@/components/FeedPostCard';
import { feedPosts } from '@/data/feed';
import { useState } from 'react';

const POST_TYPES = [
  'Paper Shared',
  'Finding',
  'Question',
  'Field Note',
  'Reflection',
  'Data Visualization',
  'Scientific Experience',
  'Biology Observation',
  'AI Experiment',
  'Philosophy Prompt',
];

export default function FeedPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredPosts = selectedType
    ? feedPosts.filter((p) => p.type === selectedType)
    : feedPosts;

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Social Knowledge Feed</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Papers shared, findings discovered, questions asked, and experiences lived. A living stream of human curiosity and collective learning.
          </p>
        </div>

        {/* Sort/Filter Options */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedType(null)}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedType === null
                  ? 'bg-gradient-to-r from-neon-blue to-neon-green text-white font-semibold'
                  : 'glass border border-white/10 text-gray-300 hover:border-neon-blue/50'
              }`}
            >
              All Posts
            </button>
          </div>
        </div>

        {/* Type Filter */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-400 mb-3">FILTER BY TYPE</h3>
          <div className="flex flex-wrap gap-2">
            {POST_TYPES.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(selectedType === type ? null : type)}
                className={`px-3 py-1 text-sm rounded-full transition-all ${
                  selectedType === type
                    ? 'bg-gradient-to-r from-neon-blue to-neon-green text-white font-semibold'
                    : 'glass border border-white/10 text-gray-300 hover:border-neon-blue/50'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Feed Posts */}
        <div className="space-y-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <FeedPostCard key={post.id} post={post} />
            ))
          ) : (
            <div className="glass rounded-xl p-12 border border-white/10 text-center">
              <p className="text-gray-400">No posts found for this filter.</p>
            </div>
          )}
        </div>

        {/* Info Banner */}
        <div className="mt-12 glass rounded-xl p-6 border border-neon-blue/20">
          <div className="flex gap-4">
            <div className="text-3xl">📡</div>
            <div>
              <h3 className="font-bold text-white mb-2">Feed is Live with Mock Data</h3>
              <p className="text-gray-300">
                This is the social knowledge feed with sample posts from curious researchers and learners. Once live, you'll be able to share papers, findings, and experiences with the community, and engage in discussions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
