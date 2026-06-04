import prisma from "@/db/prisma_client";

const postDB = {
  createPost: async (
    title: string,
    content: string,
    userId: number,
    publish: boolean,
  ) => {
    const post = await prisma.post.create({
      data: {
        content: content,
        author: {
          connect: {
            id: userId,
          },
        },
        title: title,
        publish: publish,
      },
    });
    return post;
  },
  getPosts: async () => {
    const posts = await prisma.post.findMany();
    return posts;
  },
  getPost: async (postid: number) => {
    const post = await prisma.post.findUnique({
      where: {
        id: postid,
      },
    });
    return post;
  },
};

export default postDB;
