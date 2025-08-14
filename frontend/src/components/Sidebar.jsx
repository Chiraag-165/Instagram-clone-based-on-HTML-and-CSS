import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Search, 
  Compass, 
  Film, 
  MessageCircle, 
  Heart, 
  PlusSquare, 
  User,
  Menu,
  Instagram
} from "lucide-react";
import { Button } from "./ui/button";
import CreatePostModal from "./CreatePostModal";

const Sidebar = () => {
  const location = useLocation();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Search, label: "Search", path: "/search" },
    { icon: Compass, label: "Explore", path: "/explore" },
    { icon: Film, label: "Reels", path: "/reels" },
    { icon: MessageCircle, label: "Messages", path: "/messages" },
    { icon: Heart, label: "Notifications", path: "/notifications" },
    { icon: PlusSquare, label: "Create", action: () => setIsCreateModalOpen(true) },
    { icon: User, label: "Profile", path: "/profile/johndoe" },
  ];

  return (
    <>
      <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-6 hidden lg:block">
        {/* Logo */}
        <div className="mb-8">
          <Link to="/" className="flex items-center space-x-2">
            <Instagram className="w-8 h-8" />
            <span className="text-2xl font-bold">Instagram</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            if (item.action) {
              return (
                <Button
                  key={item.label}
                  variant="ghost"
                  className={`w-full justify-start h-12 px-3 text-base hover:bg-gray-100 transition-colors`}
                  onClick={item.action}
                >
                  <Icon className="w-6 h-6 mr-4" />
                  {item.label}
                </Button>
              );
            }

            return (
              <Link key={item.label} to={item.path}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start h-12 px-3 text-base hover:bg-gray-100 transition-colors ${
                    isActive ? "font-bold" : ""
                  }`}
                >
                  <Icon className={`w-6 h-6 mr-4 ${isActive ? "fill-current" : ""}`} />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>

        {/* Menu Button */}
        <div className="absolute bottom-6 left-6 right-6">
          <Button variant="ghost" className="w-full justify-start h-12 px-3 text-base hover:bg-gray-100">
            <Menu className="w-6 h-6 mr-4" />
            More
          </Button>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 lg:hidden z-50">
        <div className="flex justify-around">
          {navItems.slice(0, 5).map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            if (item.action) {
              return (
                <Button
                  key={item.label}
                  variant="ghost"
                  size="sm"
                  className="flex-1"
                  onClick={item.action}
                >
                  <Icon className="w-6 h-6" />
                </Button>
              );
            }

            return (
              <Link key={item.label} to={item.path} className="flex-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full"
                >
                  <Icon className={`w-6 h-6 ${isActive ? "fill-current" : ""}`} />
                </Button>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Spacer for sidebar */}
      <div className="w-64 hidden lg:block"></div>

      <CreatePostModal 
        isOpen={isCreateModalOpen} 
        onClose={() => setIsCreateModalOpen(false)} 
      />
    </>
  );
};

export default Sidebar;