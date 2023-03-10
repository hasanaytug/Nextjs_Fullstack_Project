"use client";

import React, { useState } from "react";
import Comments from "./Comments";
import axios from "axios";
import { useRouter } from "next/navigation";

interface User {
  email: string;
  id: string;
  comments: object;
}

function AddComment({ email, id, comments }: User) {
  const Router = useRouter();
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAdd = async () => {
    setIsLoading(true);
    const res = await axios.post("http://localhost:3000/api/create-comment", {
      text,
      email,
      postId: id,
    });
    setIsLoading(false);
    Router.refresh();
  };
  return (
    <div>
      <div className="flex flex-col items-center">
        <input
          value={text.length < 200 ? text : text.slice(0, 199)}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your comment"
          className=" mt-10 w-full  h-8 bg-gray-100 focus:outline-none p-4 resize-none overflow-hidden rounded"
        />
        <div className="flex w-full justify-between items-center">
          <p
            className={`${
              text.length > 200 ? `text-red-600` : `text-black`
            } text-sm`}
          >{`${text.length}/200`}</p>
          <button
            onClick={handleAdd}
            className="bg-blue-300 p-1 rounded m-2 text-sm"
          >
            {isLoading ? "Loading..." : "Comment"}
          </button>
        </div>
      </div>
      <Comments comments={comments} id={id}></Comments>
    </div>
  );
}

export default AddComment;
