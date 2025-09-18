import { useState } from "react"

type Student = {
  id: number,
  fullName: string,
  dob: string,
  address: string
}

export default function Bai2() {
  // Khởi tạo state có kiểu Student
  const [user] = useState<Student>({
    id: 1,
    fullName: "Hoàng Thiên Sơn",
    dob: "01/11/2006",
    address: "Hà Nội"
  });

  return (
    <div>
      <p>ID: {user.id}</p>
      <p>Họ và Tên: {user.fullName}</p>
      <p>Ngày sinh: {user.dob}</p>
      <p>Địa chỉ: {user.address}</p>
    </div>
  )
}
