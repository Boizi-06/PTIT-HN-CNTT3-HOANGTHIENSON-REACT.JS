
// Định nghĩa kiểu cho user
type User = {
  firstName: string;
  lastName: string;
};

// Hàm formatName nhận vào user và trả về chuỗi họ tên đầy đủ
function formatName(user: User): string {
  return `${user.firstName} ${user.lastName}`;
}

export default function FormatName() {
  // Khai báo đối tượng user
  const user: User = {
    firstName: "Nguyễn Văn",
    lastName: "Nam",
  };

  return (
    <div>
      <h3>Họ và tên: {formatName(user)}</h3>
    </div>
  );
}
