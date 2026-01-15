import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import { posts } from "./fixtures/posts";
import type { PostType } from "./types/postType.ts";
import LoadMore from "./components/LoadMore";

function App() {
  return (
    <div className="page">
      <Header />

      <main className="main">
        <div className="container">
          <div className="posts">
            {posts.map((post: PostType, index: number) => (
              <Post key={index} {...post} />
            ))}
          </div>
          <LoadMore />
        </div>
      </main>
    </div>
  );
}

export default App;
