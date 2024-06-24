// post.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async createPost(
    @Body() createPostDto: CreatePostDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({ maxSize: 5000000 })],
      }),
    )
    attachment: Express.Multer.File,
  ) {
    return this.postService.createPost(createPostDto, attachment);
  }

  @Get()
  async getPosts() {
    return this.postService.getPosts();
  }

  @Get(':id')
  async getPostById(@Param('id') id: string) {
    const postId = parseInt(id, 10);
    return this.postService.getPostById(postId);
  }

  @Put(':id')
  async updatePost(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    const postId = parseInt(id, 10);
    return this.postService.updatePost(postId, updatePostDto);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    const postId = parseInt(id, 10);
    return this.postService.deletePost(postId);
  }
}
