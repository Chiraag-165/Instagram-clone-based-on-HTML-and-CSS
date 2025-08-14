import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Grid, Bookmark, UserCheck, Settings, MoreHorizontal } from "lucide-react";
import { mockUsers, mockPosts } from "../data/mockData";
import { useToast } from "../hooks/use-toast";

const Profile = () => {
  const { username } = useParams();
  const user = mockUsers.find(u => u.username === username) || mockUsers[0];
  const userPosts = mockPosts.filter(post => post.user.id === user.id);
  const [isFollowing, setIsFollowing] = useState(user.isFollowing);
  const [followersCount, setFollowersCount] = useState(user.followers);
  const { toast } = useToast();

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    setFollowersCount(isFollowing ? followersCount - 1 : followersCount + 1);
    
    toast({
      description: isFollowing ? `Unfollowed ${user.username}` : `Following ${user.username}! 🎉`,
      duration: 2000
    });
  };

  const isOwnProfile = username === "johndoe";

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Profile Picture */}
        <div className="flex justify-center md:justify-start">
          <Avatar className="w-32 h-32 md:w-40 md:h-40">
            <AvatarImage src={user.avatar} alt={user.username} />
            <AvatarFallback className="text-4xl">{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>

        {/* Profile Info */}
        <div className="flex-1 space-y-4">
          {/* Username and Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-light">{user.username}</h1>
              {user.isVerified && (
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
            </div>
            
            <div className="flex space-x-2">
              {isOwnProfile ? (
                <>
                  <Button variant="outline" size="sm">
                    Edit profile
                  </Button>
                  <Button variant="outline" size="sm">
                    <Settings className="w-4 h-4" />
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    variant={isFollowing ? "outline" : "default"} 
                    size="sm"
                    onClick={handleFollow}
                  >
                    {isFollowing ? "Following" : "Follow"}
                  </Button>
                  <Button variant="outline" size="sm">
                    Message
                  </Button>
                  <Button variant="outline" size="sm">
                    <UserCheck className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="flex space-x-8">
            <div className="text-center">
              <span className="font-semibold text-lg">{user.posts}</span>
              <p className="text-sm text-gray-600">posts</p>
            </div>
            <div className="text-center cursor-pointer hover:text-gray-600">
              <span className="font-semibold text-lg">{followersCount.toLocaleString()}</span>
              <p className="text-sm text-gray-600">followers</p>
            </div>
            <div className="text-center cursor-pointer hover:text-gray-600">
              <span className="font-semibold text-lg">{user.following}</span>
              <p className="text-sm text-gray-600">following</p>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="font-semibold">{user.name}</h2>
            <p className="text-sm whitespace-pre-line">{user.bio}</p>
          </div>
        </div>
      </div>

      {/* Posts Tabs */}
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="posts" className="flex items-center space-x-2">
            <Grid className="w-4 h-4" />
            <span className="hidden sm:inline">POSTS</span>
          </TabsTrigger>
          <TabsTrigger value="saved" className="flex items-center space-x-2">
            <Bookmark className="w-4 h-4" />
            <span className="hidden sm:inline">SAVED</span>
          </TabsTrigger>
          <TabsTrigger value="tagged" className="flex items-center space-x-2">
            <UserCheck className="w-4 h-4" />
            <span className="hidden sm:inline">TAGGED</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="space-y-1">
          {userPosts.length > 0 ? (
            <div className="grid grid-cols-3 gap-1">
              {userPosts.map((post) => (
                <div key={post.id} className="aspect-square relative group cursor-pointer">
                  <img 
                    src={post.image} 
                    alt="Post" 
                    className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <span className="font-semibold">{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="font-semibold">{post.comments.length}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 border-2 border-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Grid className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-2xl font-light mb-2">No Posts Yet</h3>
              <p className="text-gray-500">When {isOwnProfile ? 'you' : user.username} posts, you'll see their photos and videos here.</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="saved" className="space-y-1">
          <div className="text-center py-12">
            <div className="w-16 h-16 border-2 border-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bookmark className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-2xl font-light mb-2">No Saved Posts</h3>
            <p className="text-gray-500">Save posts to see them here.</p>
          </div>
        </TabsContent>

        <TabsContent value="tagged" className="space-y-1">
          <div className="text-center py-12">
            <div className="w-16 h-16 border-2 border-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserCheck className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-2xl font-light mb-2">No Tagged Posts</h3>
            <p className="text-gray-500">When {isOwnProfile ? 'you' : user.username} gets tagged in photos and videos, they'll appear here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;