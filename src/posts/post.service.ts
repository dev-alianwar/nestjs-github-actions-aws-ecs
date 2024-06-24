import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { Prisma } from '@prisma/client';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { v4 as uuidV4 } from 'uuid';
import { S3Service } from '../services/s3.service';

@Injectable()
export class PostService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly s3Service: S3Service,
  ) {}

  async createPost(
    createPostDto: CreatePostDto,
    attachment?: Express.Multer.File,
  ) {
    const key = attachment ? uuidV4() : undefined;
    const res = await this.prisma.$transaction(
      async (prisma: Prisma.TransactionClient) => {
        return prisma.post.create({
          data: {
            title: createPostDto.title,
            content: createPostDto.content,
            attachment: key,
          },
        });
      },
    );

    if (attachment && key) {
      await this.s3Service.uploadImage(key, attachment);
    }
    return res;
  }

  async getPosts() {
    return this.prisma.post.findMany();
  }

  async getPostById(postId: number) {
    return this.prisma.post.findUnique({
      where: { id: postId },
    });
  }

  async updatePost(postId: number, updatePostDto: UpdatePostDto) {
    return this.prisma.$transaction(
      async (prisma: Prisma.TransactionClient) => {
        return prisma.post.update({
          where: { id: postId },
          data: {
            title: updatePostDto.title,
            content: updatePostDto.content,
          },
        });
      },
    );
  }

  async deletePost(postId: number) {
    return this.prisma.$transaction(
      async (prisma: Prisma.TransactionClient) => {
        return prisma.post.delete({
          where: { id: postId },
        });
      },
    );
  }
}
