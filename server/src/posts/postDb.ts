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
    const posts = await prisma.post.findMany({
      where: {
        published: true,
      },
      include: {
        author: {
          select: {
            username: true,
          },
        },
      },
    });

    return posts;
  },
  getAdminPosts: async () => {
    const posts = await prisma.post.findMany({
      include: {
        author: {
          select: {
            username: true,
          },
        },
      },
    });
    return posts;
  },
  getAdminPost: async (postid: number) => {
    const post = await prisma.post.findUnique({
      where: {
        id: postid,
      },
      include: {
        author: {
          select: {
            username: true,
          },
        },
      },
    });

    return post;
  },
  getPost: async (postid: number) => {
    const post = await prisma.post.findUnique({
      where: {
        id: postid,
        published: true,
      },
      include: {
        author: {
          select: {
            username: true,
          },
        },
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
        uploadedAt: new Date(),
      },
    });
    return post;
  },
};

export default postDB;
