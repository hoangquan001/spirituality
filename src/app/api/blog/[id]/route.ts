import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { UpdateBlogPostData } from '@/types/blog';

interface Params {
  id: string;
}

// GET /api/blog/[id] - Get single blog post
export async function GET(request: NextRequest, { params }: { params: Params }) {
  try {
    const post = await prisma.blogPost.findUnique({
      where: { id: params.id }
    });

    if (!post) {
      return NextResponse.json(
        { error: 'Không tìm thấy bài viết' },
        { status: 404 }
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { error: 'Lỗi khi tải bài viết' },
      { status: 500 }
    );
  }
}

// PUT /api/blog/[id] - Update blog post
export async function PUT(request: NextRequest, { params }: { params: Params }) {
  try {
    const data: UpdateBlogPostData = await request.json();

    // Check if post exists
    const existingPost = await prisma.blogPost.findUnique({
      where: { id: params.id }
    });

    if (!existingPost) {
      return NextResponse.json(
        { error: 'Không tìm thấy bài viết' },
        { status: 404 }
      );
    }

    // Check if slug is unique (if being updated)
    if (data.slug && data.slug !== existingPost.slug) {
      const slugExists = await prisma.blogPost.findUnique({
        where: { slug: data.slug }
      });

      if (slugExists) {
        return NextResponse.json(
          { error: 'Slug đã tồn tại' },
          { status: 400 }
        );
      }
    }

    const updateData: any = { ...data };
    
    // Update publishedAt if publishing status changes
    if (data.isPublished !== undefined) {
      if (data.isPublished && !existingPost.publishedAt) {
        updateData.publishedAt = new Date();
      } else if (!data.isPublished) {
        updateData.publishedAt = null;
      }
    }

    const updatedPost = await prisma.blogPost.update({
      where: { id: params.id },
      data: updateData
    });

    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json(
      { error: 'Lỗi khi cập nhật bài viết' },
      { status: 500 }
    );
  }
}

// DELETE /api/blog/[id] - Delete blog post
export async function DELETE(request: NextRequest, { params }: { params: Params }) {
  try {
    // Check if post exists
    const existingPost = await prisma.blogPost.findUnique({
      where: { id: params.id }
    });

    if (!existingPost) {
      return NextResponse.json(
        { error: 'Không tìm thấy bài viết' },
        { status: 404 }
      );
    }

    await prisma.blogPost.delete({
      where: { id: params.id }
    });

    return NextResponse.json({ message: 'Đã xóa bài viết thành công' });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json(
      { error: 'Lỗi khi xóa bài viết' },
      { status: 500 }
    );
  }
}
