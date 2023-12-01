import { PostsService } from '../services/posts.service.js';

export class PostsController {
    postsService = new PostsService();

    // 게시글 조회
    getPosts = async (req, res, next) => {
        try {
            const posts = await this.postsService.findAllPosts();

            return res.status(200).json({ data: posts });
        } catch (err) {
            next(err);
        }
    };

    getDetailPost = async (req, res, next) => {
        try {
            const post = await this.postsService.findPosts();

            return res.status(200).json({ data: post });
        } catch (err) {
            next(err);
        }
    };

    // 게시글 생성
    createPosts = async (req, res, next) => {
        try {
            const { nickname, password, title, content } = req.body;

            const createPosts = await this.postsService.cratedPost(
                nickname,
                password,
                title,
                content,
            );

            return res.status(201).json({ data: createPosts });
        } catch (err) {
            next(err);
        }
    };
}
