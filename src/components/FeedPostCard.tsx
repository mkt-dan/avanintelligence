'use client';

import { FeedPost } from '@/types';

interface FeedPostCardProps {
  post: FeedPost;
}

export default function FeedPostCard({ post }: FeedPostCardProps) {
  const typeColors: { [key: string]: string } = {
    'Paper Shared': 'from-blue-600 to-blue-400',
    'Finding': 'from-green-600 to-green-400',
    'Question': 'from-purple-600 to-purple-400',
    'Field Note': 'from-amber-600 to-amber-400',
    'Reflection': 'from-pink-600 to-pink-400',
    'Data Visualization': 'from-cyan-600 to-cyan-400',
    'Scientific Experience': 'from-red-600 to-red-400',
    'Biology Observation': 'from-green-600 to-green-400',
    'AI Experiment': 'from-violet-600 to-violet-400',
    'Philosophy Prompt': 'from-indigo-600 to-indigo-400',
  };

  const bgColor = typeColors[post.type] || 'from-gray-600 to-gray-400';

  return (
    <div className="glass rounded-xl p-6 border border-white/10 card-hover cursor-pointer flex flex-col h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start gap-3 flex-1">
          <div className="text-2xl">{post.avatar}</div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-white">{post.author}</h4>
            <p className="text-xs text-gray-400">{post.timestamp}</p>
          </div>
        </div>
      </div>

      <div className={`inline-block w-fit px-2 py-1 rounded text-xs font-semibold mb-3 bg-gradient-to-r ${bgColor} text-white`}>
        {post.type}
      </div>

      <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{post.title}</h3>

      <p className="text-sm text-gray-300 mb-4 flex-1 line-clamp-3">{post.content}</p>

      <div className="flex flex-wrap gap-1 mb-4">
        {post.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 text-neon-cyan border border-neon-cyan/20"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4 text-xs text-gray-400 border-t border-white/10 pt-4">
        <button className="hover:text-neon-cyan transition-colors flex items-center gap-1">
          ❤️ {post.likes}
        </button>
        <button className="hover:text-neon-cyan transition-colors flex items-center gap-1">
          💬 {post.comments}
        </button>
      </div>
    </div>
  );
}
