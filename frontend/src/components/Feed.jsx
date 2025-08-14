import React from "react";
import PostCard from "./PostCard";
import { mockPosts } from "../data/mockData";

const Feed = () => {
  return (
    <div className="space-y-6">
      {mockPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;