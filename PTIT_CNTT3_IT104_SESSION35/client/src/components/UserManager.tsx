import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import type { user } from "../utils/type";
import { addUser } from "../store/silce/userSlice";

export default function UserManager() {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.user.users);
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (!name.trim()) return;
    dispatch(
      addUser({
        id: users.length + 1,
        name,
      })
    );
    setName("");
    console.log("user", users);
  };
  const handleDelte = () => {};

  return (
    <div>
      <h3>Danh sách sinh viên</h3>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nhập tên sinh viên"
      />
      <button onClick={handleAdd}>Thêm sinh viên</button>
      <ul>
        {users.map((u: user) => (
          <ul key={u.id}>
            <li>id{u.id}</li>
            <li>name:{u.name}</li>
            <li>
              <button onClick={() => handleDelte(u.id)}>xoa</button>
            </li>
            <br />
          </ul>
        ))}
      </ul>
    </div>
  );
}
