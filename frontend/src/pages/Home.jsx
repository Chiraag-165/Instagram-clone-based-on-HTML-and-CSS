import React from "react";
import Stories from "../components/Stories";
import Feed from "../components/Feed";

const Home = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6 lg:py-8">
      {/* Stories */}
      <Stories />
      
      {/* Feed */}
      <Feed />
    </div>
  );
};

export default Home;