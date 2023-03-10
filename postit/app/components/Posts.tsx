import axios from "axios";
import prisma from "../../prisma/client";
import Image from "next/image";
import PostInfo from "./PostInfo";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

interface Post {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  userId: string;
  User: Object;
}

async function Posts() {
  const session = await getServerSession(authOptions);
  const posts = await prisma.post.findMany({
    include: {
      User: true,
    },
  });

  return (
    <div className="flex flex-col items-center">
      {posts.map((post: Post) => (
        <div className="w-1/2 mt-5" key={post.id}>
          <div className="flex items-center bg-gray-200 pt-2">
            <Image
              className="ml-4 rounded-full "
              width={32}
              height={32}
              alt="user picture"
              src={post.User.image}
            ></Image>
            <p className="text-sm ml-2">{post.User.name}</p>
          </div>
          <div className="h-32 mx-h-32 bg-gray-200 p-4">
            <p className="text-sm">{post.title}</p>
          </div>
          <PostInfo
            id={post.id}
            user={post.User}
            session={session!!}
          ></PostInfo>
        </div>
      ))}
    </div>
  );
}

export default Posts;
