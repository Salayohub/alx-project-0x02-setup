import React, { useEffect, useState} from "react";
import { PostProps } from "../interfaces";
import PostCard from "@/components/common/PostCard";

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data: PostProps[] = await response.json();
      setPosts(data.slice(0, 12)); // Limit to first 10 posts for brevity
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {posts.map((post) => (
        <PostCard 
          key={post.id} 
          id= {post.id}
          title={post.title} 
          content={post.content} 
          userId={post.userId} 
        />
      ))}
    </div>
  );
};

export default PostsPage;
