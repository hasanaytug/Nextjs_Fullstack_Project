"use client";

import React, { useState } from "react";

function AddPost() {
  const [text, setText] = useState("");
  return (
    <div className="flex flex-col items-center">
      <textarea
        value={text.length < 200 ? text : text.slice(0, 199)}
        onChange={(e) => setText(e.target.value)}
        className="w-1/2 mt-10  h-32 mx-h-32 bg-gray-200 focus:outline-none p-4 resize-none overflow-hidden rounded"
      ></textarea>
      <div className="flex w-1/2 justify-between items-center">
        <p
          className={`${
            text.length > 200 ? `text-red-600` : `text-black`
          } text-sm`}
        >{`${text.length}/200`}</p>
        <button
          onClick={() => console.log(text)}
          className="bg-blue-300 p-2 rounded m-2 text-sm"
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default AddPost;