import { useEffect } from "react";

export default function Welcome() {
  useEffect(() => {
    console.log("5                         Component Welcome được render lần đầu!");
  }, []);

  return (
    <div className="p-4 text-xl font-bold">
      Xin chào, chào mừng bạn đến với ứng dụng! 
    </div>
  );
}
