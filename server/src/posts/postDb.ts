import prisma from "@/db/prisma_client";

type updateObject = {
  title?: string;
  content?: string;
  published?: boolean;
};

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
  updatePost: async (newFields: updateObject, postid: number) => {
    const post = await prisma.post.update({
      where: {
        id: postid,
      },
      data: {
        ...newFields,
      },
    });
    return post;
  },
};

export default postDB;
