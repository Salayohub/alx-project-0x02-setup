import { useState, useEffect } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

type Post = {
  title: string;
  content: string;
};

const STORAGE_KEY = "blog_posts";

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load posts from localStorage on mount
  useEffect(() => {
    const savedPosts = localStorage.getItem(STORAGE_KEY);
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      // Default posts if none in storage
      setPosts([
        { title: "Card Title 1", content: "This is the content of the first card." },
        { title: "Card Title 2", content: "This is the content of the second card." },
        { title: "Card Title 3", content: "This is the content of the third card." },
        { title: "Card Title 1", content: "This is the content of the first card." },
        { title: "Card Title 2", content: "This is the content of the second card." },
        { title: "Card Title 3", content: "This is the content of the third card." },
      ]);
    }
  }, []);

  // Save posts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  const handleAddPost = (post: Post) => {
    setPosts((prev) => [post, ...prev]); // Prepend new post
  };

  return (
    <section>
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-green-600">Blog Post</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          New Post
        </button>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </main>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </section>
  );
};

export default Home;
