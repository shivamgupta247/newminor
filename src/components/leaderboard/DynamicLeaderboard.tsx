import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Medal, Award, TrendingUp, Target, Zap } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';

interface LeaderboardUser {
  userId: string;
  userName: string;
  email: string;
  rating: number;
  totalQuizzes: number;
  accuracy: number;
  activeDays: number;
  rank: number;
}

export const DynamicLeaderboard = () => {
  const { user } = useAuth();
  const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([]);
  const [sortBy, setSortBy] = useState<'rating' | 'quizzes' | 'accuracy'>('rating');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadLeaderboard();
    
    // Refresh every 30 seconds
    const interval = setInterval(loadLeaderboard, 30000);
    return () => clearInterval(interval);
  }, [sortBy]);

  const loadLeaderboard = async () => {
    try {
      setLoading(true);
      setError(null);
      const usersRef = collection(db, 'users');
      const snapshot = await getDocs(usersRef);
      
      const users: LeaderboardUser[] = [];
      
      snapshot.forEach((doc) => {
        const data = doc.data();
        
        // Calculate accuracy
        const accuracy = data.totalQuestionsAttempted > 0
          ? (data.totalCorrectAnswers / data.totalQuestionsAttempted) * 100
          : 0;
        
        users.push({
          userId: doc.id,
          userName: data.name || data.email || 'User',
          email: data.email || '',
          rating: data.currentRating || 1000,
          totalQuizzes: data.totalQuizzes || 0,
          accuracy: Math.round(accuracy * 10) / 10,
          activeDays: data.totalQuizzes || 0,
          rank: 0,
        });
      });
      
      // Filter out teachers
      const authorizedTeachers = [
        "rajesh.kumar@edusmart.edu",
        "priya.sharma@edusmart.edu",
        "amit.patel@edusmart.edu",
        "sneha.gupta@edusmart.edu",
        "vikram.singh@edusmart.edu",
      ];
      
      const studentUsers = users.filter(u => 
        !authorizedTeachers.some(t => t.toLowerCase() === u.email.toLowerCase())
      );
      
      // Sort based on selected criteria
      if (sortBy === 'quizzes') {
        studentUsers.sort((a, b) => b.totalQuizzes - a.totalQuizzes);
      } else if (sortBy === 'accuracy') {
        studentUsers.sort((a, b) => b.accuracy - a.accuracy);
      } else {
        studentUsers.sort((a, b) => b.rating - a.rating);
      }
      
      // Assign ranks
      studentUsers.forEach((u, index) => {
        u.rank = index + 1;
      });
      
      setLeaderboard(studentUsers);
    } catch (err: any) {
      console.error('Error loading leaderboard:', err);
      setError(err.message || 'Failed to load leaderboard');
    } finally {
      setLoading(false);
    }
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-6 h-6 text-gray-400" />;
    if (rank === 3) return <Award className="w-6 h-6 text-amber-600" />;
    return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
  };

  const getRankBadgeColor = (rank: number) => {
    if (rank === 1) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    if (rank === 2) return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    if (rank === 3) return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200';
    return 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300';
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 2100) return 'text-red-600 dark:text-red-400';
    if (rating >= 1800) return 'text-purple-600 dark:text-purple-400';
    if (rating >= 1500) return 'text-blue-600 dark:text-blue-400';
    if (rating >= 1300) return 'text-green-600 dark:text-green-400';
    return 'text-gray-600 dark:text-gray-400';
  };

  if (loading) {
    return (
      <Card className="p-12 text-center">
        <div className="animate-pulse">
          <Trophy className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Loading Leaderboard...</h3>
          <p className="text-muted-foreground">Fetching rankings from Firebase</p>
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="p-12 text-center border-red-200 dark:border-red-800">
        <Trophy className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-red-600 dark:text-red-400">Permission Error</h3>
        <p className="text-muted-foreground mb-4">
          Unable to load leaderboard. Firebase security rules need to be updated.
        </p>
        <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg text-left text-sm">
          <p className="font-semibold mb-2">To fix this, update Firebase Firestore Rules:</p>
          <pre className="bg-black text-green-400 p-3 rounded text-xs overflow-x-auto max-h-96 overflow-y-auto">
{`rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection - readable by all, writable by owner
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null 
                   && request.auth.uid == userId;
      
      // User subcollections - owner only
      match /quizSessions/{sessionId} {
        allow read, write: if request.auth != null 
                           && request.auth.uid == userId;
      }
      match /activities/{activityId} {
        allow read, write: if request.auth != null 
                           && request.auth.uid == userId;
      }
      match /adaptiveRatings/{ratingId} {
        allow read, write: if request.auth != null 
                           && request.auth.uid == userId;
      }
      match /quizCategories/{categoryId} {
        allow read, write: if request.auth != null 
                           && request.auth.uid == userId;
      }
    }
    
    // Quiz attempts - all authenticated users
    match /quizAttempts/{attemptId} {
      allow read, write: if request.auth != null;
    }
    
    // Blogs - public read, authenticated create
    match /blogs/{blogId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null 
                            && request.auth.uid == resource.data.authorId;
    }
    
    // Plagiarism system
    match /plagiarism_assignments/{assignmentId} {
      allow read: if request.auth != null;
      allow create, update: if request.auth != null;
      allow delete: if request.auth != null 
                    && request.auth.uid == resource.data.createdBy;
    }
    
    match /plagiarism_submissions/{submissionId} {
      allow read: if request.auth != null;
      allow create, update: if request.auth != null;
      allow delete: if request.auth != null 
                    && request.auth.uid == resource.data.studentId;
    }
    
    match /plagiarism_analyses/{analysisId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
  }
}`}
          </pre>
          <p className="mt-3 text-xs text-muted-foreground font-semibold">
            📌 Step 1: Go to Firebase Console → Firestore Database → Rules → Paste above → Publish
          </p>
          <p className="mt-2 text-xs text-muted-foreground font-semibold">
            📌 Step 2: Create Required Indexes (click the links in console errors or create manually):
          </p>
          <div className="mt-1 text-xs text-muted-foreground ml-4">
            <p>• Collection: <code className="bg-gray-200 dark:bg-gray-700 px-1">quizAttempts</code></p>
            <p className="ml-2">Fields: <code className="bg-gray-200 dark:bg-gray-700 px-1">userId</code> (Ascending), <code className="bg-gray-200 dark:bg-gray-700 px-1">timestamp</code> (Descending)</p>
            <p className="mt-1">• Collection: <code className="bg-gray-200 dark:bg-gray-700 px-1">quizAttempts</code></p>
            <p className="ml-2">Fields: <code className="bg-gray-200 dark:bg-gray-700 px-1">userId</code> (Ascending), <code className="bg-gray-200 dark:bg-gray-700 px-1">subject</code> (Ascending), <code className="bg-gray-200 dark:bg-gray-700 px-1">timestamp</code> (Descending)</p>
          </div>
        </div>
        <Button onClick={() => loadLeaderboard()} className="mt-4">
          Retry
        </Button>
      </Card>
    );
  }

  if (leaderboard.length === 0) {
    return (
      <Card className="p-12 text-center">
        <Trophy className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">No Rankings Yet</h3>
        <p className="text-muted-foreground mb-4">
          Be the first to take a quiz and appear on the leaderboard!
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Global Leaderboard</h2>
          <p className="text-muted-foreground">Compete with students worldwide</p>
        </div>
        
        {/* Sort Options */}
        <div className="flex gap-2">
          <Button
            variant={sortBy === 'rating' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSortBy('rating')}
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Rating
          </Button>
          <Button
            variant={sortBy === 'quizzes' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSortBy('quizzes')}
          >
            <Target className="w-4 h-4 mr-2" />
            Quizzes
          </Button>
          <Button
            variant={sortBy === 'accuracy' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSortBy('accuracy')}
          >
            <Zap className="w-4 h-4 mr-2" />
            Accuracy
          </Button>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="space-y-2">
        {leaderboard.map((entry, index) => {
          const isCurrentUser = user && entry.userId === user.id;
          
          return (
            <Card
              key={entry.userId}
              className={`p-4 transition-all hover:shadow-md ${
                isCurrentUser ? 'border-2 border-primary bg-primary/5' : ''
              }`}
            >
              <div className="flex items-center gap-4">
                {/* Rank */}
                <div className="flex-shrink-0 w-16 flex items-center justify-center">
                  {getRankIcon(entry.rank || index + 1)}
                </div>

                {/* User Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold truncate">
                      {entry.userName}
                      {isCurrentUser && (
                        <Badge variant="default" className="ml-2 text-xs">You</Badge>
                      )}
                    </h3>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="flex flex-wrap gap-1">
                    {entry.rating >= 1500 && (
                      <span className="text-xs text-blue-600 dark:text-blue-400">⭐ Good</span>
                    )}
                    {entry.rating >= 1000 && entry.rating < 1500 && (
                      <span className="text-xs text-green-600 dark:text-green-400">📊 Average</span>
                    )}
                    {entry.rating < 1000 && (
                      <span className="text-xs text-orange-600 dark:text-orange-400">🎯 Beginner</span>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-6 text-sm">
                  {/* Rating */}
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${getRatingColor(entry.rating)}`}>
                      {entry.rating}
                    </div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>

                  {/* Quizzes */}
                  <div className="text-center hidden sm:block">
                    <div className="text-lg font-semibold">{entry.totalQuizzes}</div>
                    <div className="text-xs text-muted-foreground">Quizzes</div>
                  </div>

                  {/* Accuracy */}
                  <div className="text-center hidden md:block">
                    <div className="text-lg font-semibold">{entry.accuracy}%</div>
                    <div className="text-xs text-muted-foreground">Accuracy</div>
                  </div>

                </div>

                {/* Rank Badge */}
                <div className="flex-shrink-0">
                  <Badge className={getRankBadgeColor(entry.rank || index + 1)}>
                    Rank #{entry.rank || index + 1}
                  </Badge>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Footer Info */}
      {user && (
        <Card className="p-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-3">
            <Trophy className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <div className="text-sm text-blue-800 dark:text-blue-200">
              <strong>Your Position:</strong> {leaderboard.find(e => e.userId === user.id)?.rank || 'Not ranked yet'}
              {' • '}
              Take more quizzes to climb the ranks!
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
