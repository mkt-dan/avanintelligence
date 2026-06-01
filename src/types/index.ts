export interface Paper {
  id: string;
  title: string;
  authors: string[];
  year: number;
  discipline: string;
  summary: string;
  tags: string[];
  difficultyLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  readingTime: number; // in minutes
  url?: string;
}

export interface Experience {
  id: string;
  title: string;
  city: string;
  country: string;
  date: string;
  category: string;
  alcoholOption: 'With Alcohol' | 'Alcohol-Free' | 'Optional';
  description: string;
  tags: string[];
  latitude?: number;
  longitude?: number;
}

export interface FeedPost {
  id: string;
  author: string;
  avatar?: string;
  type: 'Paper Shared' | 'Finding' | 'Question' | 'Field Note' | 'Reflection' | 'Data Visualization' | 'Scientific Experience' | 'Biology Observation' | 'AI Experiment' | 'Philosophy Prompt';
  title: string;
  content: string;
  tags: string[];
  likes: number;
  comments: number;
  timestamp: string;
  image?: string;
}

export interface MapPoint {
  id: string;
  title: string;
  latitude: number;
  longitude: number;
  category: string;
  description: string;
  image?: string;
}

export interface Manifesto {
  id: string;
  title: string;
  description: string;
  icon?: string;
}
