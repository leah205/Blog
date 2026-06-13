import prisma from "@/db/prisma_client";

const commentQueries = {
  get: async (postid: number) => {
    const comments = prisma.comment.findMany({
      where: {
        postId: postid,
      },
      include: {
        author: {
          select: {
            username: true,
          },
        },
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
  delete: async (commentid: number) => {
    const comments = prisma.comment.delete({
      where: {
        id: commentid,
      },
    });
    return comments;
  },
};

export default commentQueries;
