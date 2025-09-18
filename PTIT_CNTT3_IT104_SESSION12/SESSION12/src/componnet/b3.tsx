

export default function UserInfo() {
  // Tạo object user chứa các thông tin cần thiết
  const user = {
    name: "Boizi",
    gender: "Nam",
    birth: "01/11/2006",
    email: "Boizi@gmail.com",
    address: "Hà Đông, Hà Nội",
  };

  return (
    <div >
      <h2>Thông tin cá nhân</h2>
      <ul>
        <li>
          Họ và tên: <b>{user.name}</b>
        </li>
        <li>
          Giới tính: <b>{user.gender}</b>
        </li>
        <li>
          Ngày sinh: <b>{user.birth}</b>
        </li>
        <li>
          Email: <b>{user.email}</b>
        </li>
        <li>
          Địa chỉ: <b>{user.address}</b>
        </li>
      </ul>
    </div>
  );
}
