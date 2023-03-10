import axios from "axios";
import prisma from "../../prisma/client";
import Image from "next/image";

interface Post {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  User: Object;
}

async function Posts() {
  const posts = await prisma.post.findMany({
    include: {
      User: true,
    },
  });
  console.log(posts);

  return (
    <div className="flex flex-col items-center">
      {posts.map((post: Post) => (
        <div className="w-1/2 mt-5" key={post.id}>
          <div className="flex items-center">
            <Image
              className="ml-4 rounded-full"
              width={32}
              height={32}
              alt="user picture"
              src={post.User.image}
            ></Image>
            <p className="text-sm ml-2">{post.User.name}</p>
          </div>
          <div className="h-32 mx-h-32 bg-gray-200 p-4 mt-2">
            <p className="text-sm">{post.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
