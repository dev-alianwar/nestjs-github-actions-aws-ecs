import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import { PostService } from './post.service';
import { PostController } from './post.controller';

@Module({
  providers: [PrismaService, PostService],
  controllers: [PostController],
})
export class PostModule {}
