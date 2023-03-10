import React from "react";
import Image from "next/image";

interface Comments {
  comments: object;
  id: string;
}

function Comments({ comments, id }: Comments) {
  return (
    <div>
      {comments &&
        comments.name.map((comment) => {
          return (
            <div>
              {comment.postId === id && (
                <div className="bg-gray-100 p-2 rounded-xl flex mt-1">
                  <Image
                    className="ml-4 rounded-full h-8 mx-h-8"
                    width={32}
                    height={32}
                    alt="user picture"
                    src={comment.User.image}
                  ></Image>
                  <p className="ml-4 w-64 break-words">{comment.title}</p>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}

export default Comments;
