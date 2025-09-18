import { useState, useEffect } from "react";

export default function PageTitle() {
  const [username, setUsername] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    if (username) {
      document.title = `Xin chào, ${username}! `;
    } else {
      document.title = "Trang của tôi";
    }
  }, [username]); // chạy lại khi username thay đổi

  return (
    <div className="p-4">
      <input
        type="text"
        value={username}
        onChange={handleChange}
        placeholder="Nhập tên của bạn..."
        className="border rounded p-2"
      />
      <p className="mt-2 text-lg">
        {username ? `Xin chào, ${username}!` : "Hãy nhập tên để bắt đầu."}
      </p>
    </div>
  );
}
