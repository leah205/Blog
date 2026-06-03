import prisma from "@/db/prisma_client.js";

const postDB = {
  createPost: async (
    title: string,
    content: string,
    userId: number,
    publish: boolean,
  ) => {},
  getPosts: async () => {
    const posts = await prisma.post.findMany();
    return posts;
  },
  getPost: async (postid: number) => {
    const post = await prisma.post.findUnique({
      where: {
        postId: postid,
      },
    });
    return post;
  },
};

export default postDB;
