import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { 
  Send, 
  Phone, 
  Video, 
  Info, 
  Edit3,
  Search
} from "lucide-react";
import { mockUsers } from "../data/mockData";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState({});

  const conversations = [
    {
      id: 1,
      user: mockUsers[1],
      lastMessage: "Hey! How are you doing?",
      timestamp: "2h",
      unread: 2,
      isOnline: true
    },
    {
      id: 2,
      user: mockUsers[2],
      lastMessage: "Thanks for the photos!",
      timestamp: "5h",
      unread: 0,
      isOnline: false
    },
    {
      id: 3,
      user: mockUsers[3],
      lastMessage: "See you tomorrow 👋",
      timestamp: "1d",
      unread: 0,
      isOnline: true
    },
    {
      id: 4,
      user: mockUsers[4],
      lastMessage: "Love your latest post!",
      timestamp: "2d",
      unread: 1,
      isOnline: false
    }
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && selectedChat) {
      const chatMessages = messages[selectedChat.id] || [];
      const newMessage = {
        id: Date.now(),
        text: message,
        sender: 'me',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages({
        ...messages,
        [selectedChat.id]: [...chatMessages, newMessage]
      });
      setMessage("");
    }
  };

  const getChatMessages = (chatId) => {
    return messages[chatId] || [
      {
        id: 1,
        text: "Hey! How are you doing?",
        sender: 'them',
        timestamp: "2:30 PM"
      },
      {
        id: 2,
        text: "I'm doing great! Just posted some new photos from my trip.",
        sender: 'me',
        timestamp: "2:32 PM"
      },
      {
        id: 3,
        text: "That's awesome! Can't wait to see them.",
        sender: 'them',
        timestamp: "2:35 PM"
      }
    ];
  };

  return (
    <div className="h-screen flex">
      {/* Conversations List */}
      <div className="w-80 border-r border-gray-200 bg-white">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold">johndoe</h1>
            <Button variant="ghost" size="sm">
              <Edit3 className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search"
              className="pl-10 bg-gray-50 border-gray-200"
            />
          </div>
        </div>

        {/* Conversations */}
        <div className="overflow-y-auto">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 ${
                selectedChat?.id === conversation.id ? 'bg-gray-50' : ''
              }`}
              onClick={() => setSelectedChat(conversation)}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={conversation.user.avatar} alt={conversation.user.username} />
                    <AvatarFallback>{conversation.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {conversation.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-sm truncate">{conversation.user.username}</p>
                    <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                    {conversation.unread > 0 && (
                      <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-xs text-white">{conversation.unread}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={selectedChat.user.avatar} alt={selectedChat.user.username} />
                    <AvatarFallback>{selectedChat.user.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{selectedChat.user.username}</p>
                    <p className="text-xs text-gray-500">
                      {selectedChat.isOnline ? 'Active now' : 'Active 2h ago'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Phone className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Video className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Info className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {getChatMessages(selectedChat.id).map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-full ${
                    msg.sender === 'me' 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="text-sm">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                <Input
                  type="text"
                  placeholder="Message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1 rounded-full border-gray-200"
                />
                <Button 
                  type="submit" 
                  size="sm" 
                  className="rounded-full"
                  disabled={!message.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 border-2 border-gray-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-12 h-12 text-gray-300" />
              </div>
              <h2 className="text-2xl font-light mb-2">Your Messages</h2>
              <p className="text-gray-500 mb-4">Send private photos and messages to a friend or group.</p>
              <Button>Send message</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;