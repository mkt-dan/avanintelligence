'use client';

import FeedPostCard from './FeedPostCard';
import { feedPosts } from '@/data/feed';

export default function FeedPreview() {
  const previewPosts = feedPosts.slice(0, 3);

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex justify-between items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="gradient-text">Social Knowledge Feed</span>
            </h2>
            <p className="text-xl text-gray-400">Papers shared, findings discovered, questions asked, experiences lived</p>
          </div>
          <a
            href="/feed"
            className="hidden sm:inline-block px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-green text-white font-bold rounded-lg hover:shadow-lg hover:shadow-neon-blue/50 transition-all"
          >
            View Feed
          </a>
        </div>

        {/* Feed Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {[
            'Paper Shared',
            'Finding',
            'Question',
            'Field Note',
            'Scientific Experience',
            'Philosophy Prompt',
          ].map((type) => (
            <button
              key={type}
              className="px-3 py-1 text-sm rounded-full glass border border-white/10 text-gray-300 hover:text-neon-blue hover:border-neon-blue/50 transition-all"
            >
              {type}
            </button>
          ))}
        </div>

        {/* Feed Posts Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {previewPosts.map((post) => (
            <FeedPostCard key={post.id} post={post} />
          ))}
        </div>

        <a
          href="/feed"
          className="block sm:hidden w-full px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-green text-white font-bold rounded-lg text-center hover:shadow-lg hover:shadow-neon-blue/50 transition-all"
        >
          View Feed
        </a>
      </div>
    </div>
  );
}
