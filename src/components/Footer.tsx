'use client';

import { siteConfig } from '@/config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold gradient-text mb-3">Avan Intelligence</h3>
            <p className="text-sm text-gray-400">
              A living social experiment for rediscovering knowledge together.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Platform</h4>
            <ul className="space-y-2">
              <li>
                <a href="/map" className="text-sm text-gray-400 hover:text-neon-blue transition-colors">
                  Map
                </a>
              </li>
              <li>
                <a href="/feed" className="text-sm text-gray-400 hover:text-neon-blue transition-colors">
                  Feed
                </a>
              </li>
              <li>
                <a href="/papers" className="text-sm text-gray-400 hover:text-neon-blue transition-colors">
                  Papers
                </a>
              </li>
              <li>
                <a href="/experiences" className="text-sm text-gray-400 hover:text-neon-blue transition-colors">
                  Experiences
                </a>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Learn</h4>
            <ul className="space-y-2">
              <li>
                <a href="/manifesto" className="text-sm text-gray-400 hover:text-neon-blue transition-colors">
                  Manifesto
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm text-gray-400 hover:text-neon-blue transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-neon-blue transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-neon-blue transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href={siteConfig.links.discord} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-neon-blue transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-neon-blue transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-4">
              ⚠️ <span className="text-neon-blue font-semibold">Living Experiment</span>: Avan Intelligence is under constant construction. This is an MVP template with mock data.
            </p>
            <p className="text-xs text-gray-600">
              &copy; {currentYear} Avan Intelligence. Built with curiosity, philosophy, and code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
