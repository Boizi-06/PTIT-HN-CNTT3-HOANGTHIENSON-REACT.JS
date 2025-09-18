

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
};

type Props = {
  post: Post;
};

export default function DetailPost({ post }: Props) {
  return (
    <div style={{ borderBottom: "1px solid black", marginBottom: "10px" }}>
      <p>Id: {post.id}</p>
      <p>Title: {post.title}</p>
      <p>Content: {post.content}</p>
      <p>Author: {post.author}</p>
    </div>
  );
}
