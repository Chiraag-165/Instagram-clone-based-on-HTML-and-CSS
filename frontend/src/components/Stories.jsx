import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Plus } from "lucide-react";
import { mockStories, mockUsers } from "../data/mockData";

const Stories = () => {
  const currentUser = mockUsers[0];

  return (
    <div className="mb-8 overflow-hidden">
      <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
        {/* Add Your Story */}
        <div className="flex flex-col items-center space-y-2 flex-shrink-0 cursor-pointer group">
          <div className="relative">
            <Avatar className="w-16 h-16 ring-2 ring-gray-200">
              <AvatarImage src={currentUser.avatar} alt={currentUser.username} />
              <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center ring-2 ring-white">
              <Plus className="w-3 h-3 text-white" />
            </div>
          </div>
          <span className="text-xs text-center max-w-[64px] truncate">Your story</span>
        </div>

        {/* Stories */}
        {mockStories.map((story) => (
          <div key={story.id} className="flex flex-col items-center space-y-2 flex-shrink-0 cursor-pointer group">
            <div className="relative">
              <div className={`w-16 h-16 rounded-full p-0.5 ${
                story.isViewed 
                  ? 'bg-gray-300' 
                  : 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500'
              }`}>
                <Avatar className="w-full h-full ring-2 ring-white">
                  <AvatarImage src={story.user.avatar} alt={story.user.username} />
                  <AvatarFallback>{story.user.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <span className="text-xs text-center max-w-[64px] truncate">
              {story.user.username}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;