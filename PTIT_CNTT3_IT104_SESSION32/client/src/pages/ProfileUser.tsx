import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state: any) => state.user);

  return (
    <div style={{ padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h2>Thông tin User</h2>
      <p>
        <strong>ID:</strong> {user.id}
      </p>
      <p>
        <strong>Tên:</strong> {user.userName}
      </p>
      <p>
        <strong>Giới tính:</strong> {user.gender}
      </p>
      <p>
        <strong>Ngày sinh:</strong> {user.dateBirth}
      </p>
      <p>
        <strong>Địa chỉ:</strong> {user.address}
      </p>
    </div>
  );
}
