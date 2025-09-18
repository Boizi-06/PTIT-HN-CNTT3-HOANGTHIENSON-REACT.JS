import { useState, useRef, useEffect } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Khai báo ref với kiểu HTMLInputElement
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus(); 
    }
  }, [isOpen]);

  return (
    <div>
      <h1>Ứng dụng React với Modal và Focus Input</h1>
      <button onClick={() => setIsOpen(true)}>Mở Modal</button>

      {isOpen && (
        <div className="modal">
          <h2>Đăng nhập</h2>
          <input
            ref={inputRef}
            type="text"
            placeholder="Nhập tên người dùng"
          />
          <button onClick={() => setIsOpen(false)}>Đóng</button>
        </div>
      )}
    </div>
  );
}
