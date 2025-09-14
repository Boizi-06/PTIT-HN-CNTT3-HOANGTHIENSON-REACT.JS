import { useParams } from "react-router-dom";
import { posts } from "../data/posts";

export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <p className="text-red-600">Bài viết không tồn tại.</p>;

  return (
    <article>
      <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
      <p className="text-gray-800 leading-relaxed">{post.content}</p>
    </article>
  );
}
