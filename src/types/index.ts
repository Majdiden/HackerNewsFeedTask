export interface Article {
  id: string;
  title: string;
  by: string;
  type: string;
  score: number;
  descendants: number;
  time: string;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  likedArticles: Article[];
}