import React from "react";
import { Search } from "lucide-react";
import { Input } from "../components/ui/input";
import { mockPosts } from "../data/mockData";

const Explore = () => {
  // Create a more varied grid by duplicating and shuffling posts
  const exploreImages = [
    ...mockPosts,
    ...mockPosts.map(post => ({ ...post, id: post.id + 100 })),
    ...mockPosts.slice(0, 3).map(post => ({ ...post, id: post.id + 200 }))
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search"
            className="pl-10 bg-gray-50 border-gray-200 focus:bg-white"
          />
        </div>
      </div>

      {/* Explore Grid */}
      <div className="grid grid-cols-3 gap-1">
        {exploreImages.map((post, index) => {
          // Create varied sizes for some posts
          const isWide = index % 7 === 0;
          const isTall = index % 11 === 0;
          
          return (
            <div 
              key={`${post.id}-${index}`} 
              className={`relative group cursor-pointer ${
                isWide ? 'col-span-2' : ''
              } ${isTall ? 'row-span-2' : ''} aspect-square`}
            >
              <img 
                src={post.image} 
                alt="Explore post" 
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span className="font-semibold">{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M21,6H3A1,1 0 0,0 2,7V17A1,1 0 0,0 3,18H21A1,1 0 0,0 22,17V7A1,1 0 0,0 21,6M13.03,12.03L16.5,15.5C16.89,15.89 16.89,16.56 16.5,16.95C16.11,17.34 15.44,17.34 15.05,16.95L11.58,13.48L8.11,16.95C7.72,17.34 7.05,17.34 6.66,16.95C6.27,16.56 6.27,15.89 6.66,15.5L10.13,12.03L6.66,8.56C6.27,8.17 6.27,7.5 6.66,7.11C7.05,6.72 7.72,6.72 8.11,7.11L11.58,10.58L15.05,7.11C15.44,6.72 16.11,6.72 16.5,7.11C16.89,7.5 16.89,8.17 16.5,8.56L13.03,12.03Z"/>
                    </svg>
                    <span className="font-semibold">{post.comments.length}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Explore;