import { useState, useEffect } from "react";

export default function Timer() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // tạo interval mỗi 1 giây
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    // cleanup: dừng interval khi component unmount
    return () => {
      clearInterval(interval);
      console.log("⏹ Timer đã được dừng.");
    };
  }, []);

  return (
    <div className="p-4 text-lg">
       Thời gian: {count} giây
    </div>
  );
}
