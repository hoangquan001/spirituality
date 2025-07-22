export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  category: 'numerology' | 'zodiac' | 'feng-shui' | 'dreams' | 'spirituality' | 'tips';
  tags?: string[];
  featuredImage?: string;
  isPublished: boolean;
  readTime?: number; // phút đọc
}

export interface BlogCategory {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export interface BlogAuthor {
  id: string;
  name: string;
  bio?: string;
  avatar?: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    email?: string;
  };
}
