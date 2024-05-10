import { useState } from 'react';
import Blog from '../components/Blog';

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen p-8 font-noto-sans">
      <div className="mb-0 py-20 mx-auto max-w-7xl bg-white/50 shadow-xl">
        <div className="mx-auto max-w-7xl px-8 lg:px-24">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Explore</h2>
          <p className="mt-2 text-md sm:text-lg leading-8 text-gray-600">
            Learn how to grow your project with our expert advice.
          </p>
          <div className="border-t-2 border-gray-200 pt-10">
            <div className="container mx-auto p-4">
              <div className="flex flex-row justify-end">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border border-gray-300 rounded-md p-2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <Blog searchQuery={searchQuery} />
          </div>
        </div>
      </div>
    </div>
  );
}
