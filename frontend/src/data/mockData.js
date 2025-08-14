export const mockUsers = [
  {
    id: 1,
    username: "johndoe",
    name: "John Doe",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
    followers: 1250,
    following: 890,
    posts: 42,
    bio: "📸 Photography enthusiast | 🌍 Travel lover | ☕ Coffee addict",
    isVerified: false,
    isFollowing: false
  },
  {
    id: 2,
    username: "jane_smith",
    name: "Jane Smith",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612d4c3?w=100&h=100&fit=crop&crop=face",
    followers: 2100,
    following: 456,
    posts: 67,
    bio: "🎨 Digital artist | 🌟 Creating magic daily",
    isVerified: true,
    isFollowing: true
  },
  {
    id: 3,
    username: "mike_photo",
    name: "Mike Johnson",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=face",
    followers: 856,
    following: 234,
    posts: 123,
    bio: "📷 Professional photographer | 🎯 Capturing moments",
    isVerified: false,
    isFollowing: false
  },
  {
    id: 4,
    username: "sarah_travels",
    name: "Sarah Wilson",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    followers: 3200,
    following: 678,
    posts: 89,
    bio: "✈️ Travel blogger | 🌎 Exploring the world",
    isVerified: true,
    isFollowing: false
  },
  {
    id: 5,
    username: "alex_design",
    name: "Alex Thompson",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    followers: 1890,
    following: 345,
    posts: 156,
    bio: "🎨 UI/UX Designer | 💻 Creative solutions",
    isVerified: false,
    isFollowing: true
  },
  {
    id: 6,
    username: "lisa_fitness",
    name: "Lisa Brown",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    followers: 4500,
    following: 234,
    posts: 234,
    bio: "💪 Fitness coach | 🥗 Healthy lifestyle advocate",
    isVerified: true,
    isFollowing: false
  }
];

export const mockPosts = [
  {
    id: 1,
    user: mockUsers[1],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
    caption: "Beautiful sunset at the beach 🌅 Nothing beats this view! #sunset #beach #photography",
    likes: 342,
    comments: [
      {
        id: 1,
        user: mockUsers[2],
        text: "Absolutely stunning! 😍",
        timestamp: "2h"
      },
      {
        id: 2,
        user: mockUsers[3],
        text: "This makes me want to travel again!",
        timestamp: "1h"
      }
    ],
    timestamp: "3 hours ago",
    isLiked: false,
    isSaved: false
  },
  {
    id: 2,
    user: mockUsers[2],
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop",
    caption: "Morning coffee and good vibes ☕️ Starting the day right! #coffee #morning #goodvibes",
    likes: 189,
    comments: [
      {
        id: 3,
        user: mockUsers[0],
        text: "Best way to start the day!",
        timestamp: "4h"
      }
    ],
    timestamp: "5 hours ago",
    isLiked: true,
    isSaved: false
  },
  {
    id: 3,
    user: mockUsers[3],
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=600&fit=crop",
    caption: "Adventure awaits! 🏔️ Just finished an amazing hike. The view from the top was incredible! #hiking #adventure #nature",
    likes: 567,
    comments: [
      {
        id: 4,
        user: mockUsers[1],
        text: "So jealous! This looks amazing",
        timestamp: "6h"
      },
      {
        id: 5,
        user: mockUsers[4],
        text: "Which trail is this? I need to go!",
        timestamp: "5h"
      }
    ],
    timestamp: "8 hours ago",
    isLiked: false,
    isSaved: true
  },
  {
    id: 4,
    user: mockUsers[4],
    image: "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?w=600&h=600&fit=crop",
    caption: "New design project coming along nicely! 🎨 Love working with these colors. #design #ui #creativity",
    likes: 234,
    comments: [
      {
        id: 6,
        user: mockUsers[0],
        text: "The color palette is perfect!",
        timestamp: "12h"
      }
    ],
    timestamp: "1 day ago",
    isLiked: true,
    isSaved: false
  },
  {
    id: 5,
    user: mockUsers[5],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
    caption: "Workout complete! 💪 Remember, consistency is key. Every day is a chance to get stronger! #fitness #motivation #workout",
    likes: 445,
    comments: [
      {
        id: 7,
        user: mockUsers[2],
        text: "You're so inspiring! 💪",
        timestamp: "1d"
      },
      {
        id: 8,
        user: mockUsers[3],
        text: "Needed this motivation today!",
        timestamp: "1d"
      }
    ],
    timestamp: "1 day ago",
    isLiked: false,
    isSaved: true
  }
];

export const mockStories = [
  {
    id: 1,
    user: mockUsers[0],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop",
    isViewed: false
  },
  {
    id: 2,
    user: mockUsers[1],
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=100&h=100&fit=crop",
    isViewed: true
  },
  {
    id: 3,
    user: mockUsers[2],
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=100&h=100&fit=crop",
    isViewed: false
  },
  {
    id: 4,
    user: mockUsers[3],
    image: "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?w=100&h=100&fit=crop",
    isViewed: true
  },
  {
    id: 5,
    user: mockUsers[4],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
    isViewed: false
  }
];