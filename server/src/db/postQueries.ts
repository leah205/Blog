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
    console.log("hello");
    console.log(postid);
    const post = await prisma.post.findUnique({
      where: {
        id: postid,
      },
    });

    return post;
  },
};

export default postDB;
