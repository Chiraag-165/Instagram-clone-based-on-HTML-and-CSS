import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { mockUsers } from "../data/mockData";
import { useToast } from "../hooks/use-toast";

const CreatePostModal = ({ isOpen, onClose }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [dragActive, setDragActive] = useState(false);
  const currentUser = mockUsers[0];
  const { toast } = useToast();

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (file) => {
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handlePost = () => {
    if (selectedImage || caption.trim()) {
      toast({
        description: "Post created successfully! 📸",
        duration: 3000
      });
      setSelectedImage(null);
      setCaption("");
      onClose();
    }
  };

  const handleClose = () => {
    setSelectedImage(null);
    setCaption("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Create new post</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Image Upload Area */}
          <div
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            {selectedImage ? (
              <div className="relative">
                <img 
                  src={selectedImage} 
                  alt="Selected" 
                  className="max-h-64 w-full object-cover rounded-lg"
                />
                <Button
                  variant="destructive"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ) : (
              <div className="space-y-3">
                <ImageIcon className="w-12 h-12 text-gray-400 mx-auto" />
                <div>
                  <p className="text-lg font-medium">Drag photos here</p>
                  <p className="text-sm text-gray-500">or</p>
                </div>
                <label htmlFor="image-upload">
                  <Button variant="outline" className="cursor-pointer">
                    <Upload className="w-4 h-4 mr-2" />
                    Select from computer
                  </Button>
                  <Input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              </div>
            )}
          </div>

          {/* Caption */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src={currentUser.avatar} alt={currentUser.username} />
                <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="font-semibold text-sm">{currentUser.username}</span>
            </div>
            
            <Textarea
              placeholder="Write a caption..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="resize-none border-none p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              rows={4}
            />
          </div>

          {/* Post Button */}
          <Button 
            onClick={handlePost} 
            className="w-full"
            disabled={!selectedImage && !caption.trim()}
          >
            Share post
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostModal;