import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { 
  Heart, 
  MessageCircle, 
  Send, 
  Bookmark, 
  MoreHorizontal,
  Smile
} from "lucide-react";
import { useToast } from "../hooks/use-toast";

const PostCard = ({ post }) => {
  const [isLiked, setIsLiked] = useState(post.isLiked);
  const [isSaved, setIsSaved] = useState(post.isSaved);
  const [likes, setLikes] = useState(post.likes);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(post.comments);
  const [showAllComments, setShowAllComments] = useState(false);
  const { toast } = useToast();

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
    
    if (!isLiked) {
      toast({
        description: "Post liked! ❤️",
        duration: 2000
      });
    }
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    toast({
      description: isSaved ? "Post removed from saved" : "Post saved! 📖",
      duration: 2000
    });
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = {
        id: comments.length + 1,
        user: { username: "johndoe", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face" },
        text: comment,
        timestamp: "now"
      };
      setComments([...comments, newComment]);
      setComment("");
      toast({
        description: "Comment added! 💬",
        duration: 2000
      });
    }
  };

  const displayedComments = showAllComments ? comments : comments.slice(0, 2);

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Post Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src={post.user.avatar} alt={post.user.username} />
            <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center space-x-1">
              <span className="font-semibold text-sm">{post.user.username}</span>
              {post.user.isVerified && (
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
            </div>
            <span className="text-gray-500 text-xs">{post.timestamp}</span>
          </div>
        </div>
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="w-5 h-5" />
        </Button>
      </div>

      {/* Post Image */}
      <div className="relative">
        <img 
          src={post.image} 
          alt="Post content" 
          className="w-full h-auto object-cover"
          onDoubleClick={handleLike}
        />
      </div>

      {/* Post Actions */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLike}
              className="p-0 hover:bg-transparent"
            >
              <Heart 
                className={`w-6 h-6 transition-colors ${
                  isLiked ? 'fill-red-500 text-red-500' : 'text-gray-700 hover:text-gray-500'
                }`} 
              />
            </Button>
            <Button variant="ghost" size="sm" className="p-0 hover:bg-transparent">
              <MessageCircle className="w-6 h-6 text-gray-700 hover:text-gray-500" />
            </Button>
            <Button variant="ghost" size="sm" className="p-0 hover:bg-transparent">
              <Send className="w-6 h-6 text-gray-700 hover:text-gray-500" />
            </Button>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleSave}
            className="p-0 hover:bg-transparent"
          >
            <Bookmark 
              className={`w-6 h-6 transition-colors ${
                isSaved ? 'fill-gray-700 text-gray-700' : 'text-gray-700 hover:text-gray-500'
              }`} 
            />
          </Button>
        </div>

        {/* Likes Count */}
        <div className="mb-2">
          <span className="font-semibold text-sm">{likes.toLocaleString()} likes</span>
        </div>

        {/* Caption */}
        <div className="mb-2">
          <span className="font-semibold text-sm mr-2">{post.user.username}</span>
          <span className="text-sm">{post.caption}</span>
        </div>

        {/* Comments */}
        {comments.length > 0 && (
          <div className="space-y-1">
            {comments.length > 2 && !showAllComments && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowAllComments(true)}
                className="p-0 h-auto text-gray-500 hover:bg-transparent"
              >
                View all {comments.length} comments
              </Button>
            )}
            
            {displayedComments.map((comment) => (
              <div key={comment.id} className="flex items-start space-x-2">
                <span className="font-semibold text-sm">{comment.user.username}</span>
                <span className="text-sm flex-1">{comment.text}</span>
                <span className="text-gray-500 text-xs">{comment.timestamp}</span>
              </div>
            ))}
            
            {showAllComments && comments.length > 2 && (
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setShowAllComments(false)}
                className="p-0 h-auto text-gray-500 hover:bg-transparent"
              >
                Show less
              </Button>
            )}
          </div>
        )}

        {/* Add Comment */}
        <form onSubmit={handleComment} className="flex items-center space-x-2 mt-3 pt-3 border-t border-gray-100">
          <Smile className="w-6 h-6 text-gray-400" />
          <Input
            type="text"
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="flex-1 border-none p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          {comment.trim() && (
            <Button type="submit" variant="ghost" size="sm" className="text-blue-500 hover:text-blue-600 p-0">
              Post
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default PostCard;