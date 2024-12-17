export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: User;
  likes: number;
  comments: number;
  shares: number;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  likedArticles: Article[];
}