import axios from "axios";
import { useEffect, useState, type ChangeEvent } from "react";
import Loading from "./components/Loading";

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchName, setSearchName] = useState("");
  const [loading, setLoading] = useState<boolean>(true);

  async function getAllUsers() {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:8080/user");
      const fetched = [...res.data];
      setTimeout(() => {
        setUsers(fetched);
        setLoading(false);
      }, 3000);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllUsers();
  }, []);

  // 🔍 Tìm kiếm theo tên
  const handleSearch = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:8080/user?name_like=${searchName}`
      );
      const fetched = [...res.data];
      setTimeout(() => {
        setUsers(fetched);
        setLoading(false);
      }, 3000);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  // 🔽 Sắp xếp theo tuổi (giống hệt cách tìm kiếm)
  const handleSortByAge = async () => {
    try {
      setLoading(true);
      // json-server hỗ trợ _sort và _order
      const res = await axios.get(
        "http://localhost:8080/user?_sort=age&_order=asc"
      );
      const fetched = [...res.data];
      setTimeout(() => {
        setUsers(fetched);
        setLoading(false);
      }, 3000);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Danh sách user</h2>

      {loading && <Loading />}

      <input
        value={searchName}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchName(e.target.value)
        }
        placeholder="Nhập tên cần tìm"
      />
      <button onClick={handleSearch}>Tìm kiếm</button>
      <button onClick={handleSortByAge}>Sắp xếp theo tuổi</button>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} – Tuổi: {u.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
