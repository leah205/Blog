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
};

export default commentQueries;
