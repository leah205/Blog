import prisma from "@/db/prisma_client";

const commentQueries = {
  get: async (postid: number) => {
    const comments = prisma.comment.findMany({
      where: {
        postId: postid,
      },
    });
    return comments;
  },
  post: async (postId: number, content: string, userId: number) => {
    const comment = await prisma.comment.create({
      data: {
        content: content,
        author: {
          connect: {
            id: userId,
          },
        },
        post: {
          connect: {
            id: postId,
          },
        },
      },
    });
    return comment;
  },
};

export default commentQueries;
