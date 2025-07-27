import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { CreateBlogPostData } from '@/types/blog';

// GET /api/blog - Get all blog posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const published = searchParams.get('published');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search');

    const skip = (page - 1) * limit;

    const where: any = {};
    
    if (category) {
      where.category = category;
    }
    
    if (published !== null) {
      where.isPublished = published === 'true';
    }
    
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { excerpt: { contains: search, mode: 'insensitive' } },
        { content: { contains: search, mode: 'insensitive' } }
      ];
    }

    const [posts, total] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.blogPost.count({ where })
    ]);

    return NextResponse.json({
      posts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Lỗi khi tải danh sách bài viết' },
      { status: 500 }
    );
  }
}

// POST /api/blog - Create new blog post
export async function POST(request: NextRequest) {
  try {
    const data: CreateBlogPostData = await request.json();

    // Validate required fields
    if (!data.title || !data.slug || !data.content || !data.author || !data.category) {
      return NextResponse.json(
        { error: 'Thiếu thông tin bắt buộc' },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const existingPost = await prisma.blogPost.findUnique({
      where: { slug: data.slug }
    });

    if (existingPost) {
      return NextResponse.json(
        { error: 'Slug đã tồn tại' },
        { status: 400 }
      );
    }

    const newPost = await prisma.blogPost.create({
      data: {
        title: data.title,
        slug: data.slug,
        excerpt: data.excerpt,
        content: data.content,
        author: data.author,
        category: data.category,
        tags: data.tags || [],
        featuredImage: data.featuredImage,
        isPublished: data.isPublished || false,
        readTime: data.readTime,
        publishedAt: data.isPublished ? new Date() : null,
      }
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: 'Lỗi khi tạo bài viết' },
      { status: 500 }
    );
  }
}
