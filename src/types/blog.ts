export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  content: string;
  author: string;
  publishedAt?: Date | null;
  updatedAt: Date;
  createdAt: Date;
  category: string;
  tags: string[];
  featuredImage?: string | null;
  isPublished: boolean;
  readTime?: number | null; // phút đọc
}

export interface BlogCategory {
  id: string;
  name: string;
  description?: string | null;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogAuthor {
  id: string;
  name: string;
  bio?: string | null;
  avatar?: string | null;
  email?: string | null;
  facebook?: string | null;
  instagram?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

// Form interfaces for API
export interface CreateBlogPostData {
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  author: string;
  category: string;
  tags?: string[];
  featuredImage?: string;
  isPublished?: boolean;
  readTime?: number;
}

export interface UpdateBlogPostData {
  title?: string;
  slug?: string;
  excerpt?: string;
  content?: string;
  author?: string;
  category?: string;
  tags?: string[];
  featuredImage?: string;
  isPublished?: boolean;
  readTime?: number;
}
