"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface User {
  email: string;
  id: string;
}

function AddComment({ email, id }: User) {
  const Router = useRouter();
  const [text, setText] = useState("");

  const handleAdd = async () => {
    const res = await axios.post("http://localhost:3000/api/create-comment", {
      text,
      email,
      id,
    });
    Router.refresh();
  };
  return (
    <div className="flex flex-col items-center">
      <input
        value={text.length < 200 ? text : text.slice(0, 199)}
        onChange={(e) => setText(e.target.value)}
        className=" mt-10 w-full  h-8 bg-gray-200 focus:outline-none p-4 resize-none overflow-hidden rounded"
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
          Comment
        </button>
      </div>
    </div>
  );
}

export default AddComment;
