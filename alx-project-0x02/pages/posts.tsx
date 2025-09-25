import React from "react";
import { GetStaticProps } from "next";
import { PostProps } from "../interfaces";
import PostCard from "../components/common/PostCard";

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {posts.map((post) => (
        <PostCard 
        key={post.id} 
          id={post.id}
          title={post.title}
          content={post.content}
          userId={post.userId}
        />
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: PostProps[] = await res.json();

  return {
    props: {
      posts: data.slice(0, 10), // first 10 posts
    },
  };
};

export default PostsPage;
