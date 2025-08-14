import React from "react";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        {/* Left Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          {children}
        </main>
        
        {/* Right Sidebar */}
        <RightSidebar />
      </div>
    </div>
  );
};

export default Layout;