import { useSelector, useDispatch } from "react-redux";
import type { User } from "../store/reducers/reducerUser2";

export default function ListUser() {
  const dispatch = useDispatch();
  const users = useSelector((state: unknown) => state.userState.users);

  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };

  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Tên</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Địa chỉ</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u: User) => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.userName}</td>
            <td>{u.gender}</td>
            <td>{u.dateBirth}</td>
            <td>{u.address}</td>
            <td>
              <button onClick={() => alert("Sửa " + u.id)}>Sửa</button>
              <button onClick={() => handleDelete(u.id)}>Xóa</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
