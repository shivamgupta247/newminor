import { Badge } from "@/types/gamification";

// All available badges in the system
export const BADGES: Badge[] = [
  // Achievement Badges
  {
    id: "first_quiz",
    name: "First Steps",
    description: "Complete your first quiz",
    category: "achievement",
    rarity: "common",
    icon: "🎯",
    requirement: "Complete 1 quiz",
    target: 1,
    color: "bg-blue-500",
  },
  {
    id: "quiz_10",
    name: "Getting Started",
    description: "Complete 10 quizzes",
    category: "achievement",
    rarity: "common",
    icon: "📚",
    requirement: "Complete 10 quizzes",
    target: 10,
    color: "bg-green-500",
  },
  {
    id: "quiz_50",
    name: "Dedicated Learner",
    description: "Complete 50 quizzes",
    category: "achievement",
    rarity: "rare",
    icon: "🏆",
    requirement: "Complete 50 quizzes",
    target: 50,
    color: "bg-purple-500",
  },
  {
    id: "quiz_100",
    name: "Century",
    description: "Complete 100 quizzes",
    category: "achievement",
    rarity: "epic",
    icon: "💯",
    requirement: "Complete 100 quizzes",
    target: 100,
    color: "bg-orange-500",
  },
  {
    id: "perfect_score",
    name: "Perfectionist",
    description: "Score 100% in a quiz",
    category: "achievement",
    rarity: "rare",
    icon: "⭐",
    requirement: "Score 100% in any quiz",
    target: 1,
    color: "bg-yellow-500",
  },
  {
    id: "week_warrior",
    name: "Week Warrior",
    description: "Maintain a 7-day streak",
    category: "achievement",
    rarity: "rare",
    icon: "🔥",
    requirement: "Study for 7 consecutive days",
    target: 7,
    color: "bg-red-500",
  },
  {
    id: "month_master",
    name: "Month Master",
    description: "Maintain a 30-day streak",
    category: "achievement",
    rarity: "epic",
    icon: "🌟",
    requirement: "Study for 30 consecutive days",
    target: 30,
    color: "bg-pink-500",
  },
  {
    id: "year_champion",
    name: "Year Champion",
    description: "Maintain a 365-day streak",
    category: "achievement",
    rarity: "legendary",
    icon: "👑",
    requirement: "Study for 365 consecutive days",
    target: 365,
    color: "bg-amber-500",
  },

  // Social Badges
  {
    id: "rating_1000",
    name: "Intermediate",
    description: "Reach 1000 rating",
    category: "social",
    rarity: "common",
    icon: "📊",
    requirement: "Achieve 1000 rating",
    target: 1000,
    color: "bg-blue-600",
  },
  {
    id: "rating_1500",
    name: "Advanced",
    description: "Reach 1500 rating",
    category: "social",
    rarity: "rare",
    icon: "📈",
    requirement: "Achieve 1500 rating",
    target: 1500,
    color: "bg-purple-600",
  },
  {
    id: "rating_2000",
    name: "Expert",
    description: "Reach 2000 rating",
    category: "social",
    rarity: "epic",
    icon: "🚀",
    requirement: "Achieve 2000 rating",
    target: 2000,
    color: "bg-red-600",
  },
  {
    id: "rating_2500",
    name: "Master",
    description: "Reach 2500 rating",
    category: "social",
    rarity: "legendary",
    icon: "💎",
    requirement: "Achieve 2500 rating",
    target: 2500,
    color: "bg-pink-600",
  },
];

// Get badge by ID
export const getBadgeById = (id: string): Badge | undefined => {
  return BADGES.find((badge) => badge.id === id);
};

// Get badges by category
export const getBadgesByCategory = (category: string): Badge[] => {
  return BADGES.filter((badge) => badge.category === category);
};

// Get badges by rarity
export const getBadgesByRarity = (rarity: string): Badge[] => {
  return BADGES.filter((badge) => badge.rarity === rarity);
};
