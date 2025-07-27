`params.slug`
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
interface Params {
  slug: string;
}

// GET /api/blog/slug/[slug] - Get blog post by slug
export async function GET(request: NextRequest, { params }: { params: Params }) {
  try {
    const post = await prisma.blogPost.findUnique({
      where: { slug: params.slug }
    });

    if (!post) {
      return NextResponse.json(
        { error: 'Không tìm thấy bài viết' },
        { status: 404 }
      );
    }

    // Get related posts (same category, exclude current post)
    const relatedPosts = await prisma.blogPost.findMany({
      where: {
        category: post.category,
        id: { not: post.id },
        publishedAt: { not: null }
      },
      take: 3,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        featuredImage: true,
        category: true,
        readTime: true,
        publishedAt: true
      }
    });

    return NextResponse.json({
      post,
      relatedPosts
    });
  } catch (error) {
    console.error('Error fetching blog post by slug:', error);
    return NextResponse.json(
      { error: 'Lỗi khi tải bài viết' },
      { status: 500 }
    );
  }
}
