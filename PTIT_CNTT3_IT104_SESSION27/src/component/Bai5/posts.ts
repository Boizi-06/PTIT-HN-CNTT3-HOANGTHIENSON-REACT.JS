export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "Bắt đầu với React",
    excerpt: "Giới thiệu về React và cách khởi tạo dự án...",
    content:
      "React là một thư viện JavaScript phổ biến để xây dựng giao diện. Bài viết này giúp bạn khởi đầu với React và hiểu cách hoạt động cơ bản của nó. Bạn sẽ học cách tạo component, quản lý state và props. Ngoài ra, chúng ta cũng tìm hiểu cách kết hợp React với các thư viện khác."
  },
  {
    id: 2,
    title: "Sử dụng TailwindCSS",
    excerpt: "Tailwind giúp bạn viết CSS nhanh và tiện lợi...",
    content:
      "TailwindCSS là framework CSS hướng utility-first. Nó cho phép bạn tạo giao diện đẹp nhanh chóng mà không phải viết nhiều CSS thủ công. Trong bài viết này, bạn sẽ học cách cài đặt và sử dụng các class cơ bản để tùy chỉnh giao diện."
  },
  // Thêm ít nhất 3 bài viết nữa
];
