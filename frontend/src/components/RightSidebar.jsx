import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { mockUsers } from "../data/mockData";

const RightSidebar = () => {
  const currentUser = mockUsers[0];
  const suggestedUsers = mockUsers.slice(1, 6);

  return (
    <div className="fixed right-0 top-0 h-full w-80 bg-white p-6 hidden xl:block">
      {/* Current User */}
      <div className="flex items-center space-x-3 mb-6">
        <Avatar className="w-12 h-12">
          <AvatarImage src={currentUser.avatar} alt={currentUser.username} />
          <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="font-semibold text-sm">{currentUser.username}</p>
          <p className="text-gray-500 text-sm">{currentUser.name}</p>
        </div>
        <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-600">
          Switch
        </Button>
      </div>

      {/* Suggested for you */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-500 font-semibold text-sm">Suggested for you</span>
          <Button variant="ghost" size="sm" className="text-xs">
            See All
          </Button>
        </div>

        <div className="space-y-3">
          {suggestedUsers.map((user) => (
            <div key={user.id} className="flex items-center space-x-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src={user.avatar} alt={user.username} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-semibold text-sm">{user.username}</p>
                <p className="text-gray-500 text-xs">Suggested for you</p>
              </div>
              <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-600 text-xs">
                Follow
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-400 space-y-1">
        <div className="flex flex-wrap gap-2">
          <span>About</span>
          <span>Help</span>
          <span>Press</span>
          <span>API</span>
          <span>Jobs</span>
          <span>Privacy</span>
          <span>Terms</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <span>Locations</span>
          <span>Language</span>
          <span>Meta Verified</span>
        </div>
        <p className="mt-4">© 2025 Instagram Clone</p>
      </div>
    </div>
  );
};

export default RightSidebar;