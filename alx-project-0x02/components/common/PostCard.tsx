import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {

  return (
    <div>
      
    <div className="border p-4 rounded shadow-black mb-4 bg-#fafafa">
      <h2 className="text-xl font-bold text-green-600">{title}</h2>
      <p className="mt-2">{content}</p>
      <small className="text-red-500">posted by user {userId}</small>
    </div>
    </div>
  );
};


export default PostCard;
