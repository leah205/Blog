import prisma from "./prisma_client.js";

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
};

export default postDB;
