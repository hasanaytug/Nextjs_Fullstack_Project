"use client";
import { useState } from "react";
import CommentSection from "./CommentSection";
import axios from "axios";
import { useRouter } from "next/navigation";

interface Post {
  id: string;
  user: object;
  session: object;
}

function PostInfo({ id, user, session }: Post) {
  const Router = useRouter();
  const [showComments, setShowComments] = useState(false);

  const handleComments = () => {
    setShowComments(!showComments);
  };

  const handleDelete = async () => {
    const res = await axios.delete("http://localhost:3000/api/delete-post", {
      data: {
        id,
      },
    });
    Router.refresh();
  };
  return (
    <div className="mt-1">
      <div className="flex justify-between">
        <div>{session && <button className="bg-blue-400">Like</button>}</div>
        <div>
          {session && (
            <button
              className="bg-blue-200 px-2 rounded"
              onClick={handleComments}
            >
              Comment
            </button>
          )}
          {session?.user?.email === user.email && (
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-2 rounded ml-2"
            >
              Delete
            </button>
          )}
        </div>
      </div>

      {showComments && (
        <CommentSection id={id} email={session?.user.email}></CommentSection>
      )}
    </div>
  );
}

export default PostInfo;
