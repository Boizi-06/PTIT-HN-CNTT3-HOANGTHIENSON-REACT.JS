
import UserTableHeader from "./UserTableHeader";
import UserTableRow from "./UserTableRow";

export default function UserTable() {
  const users = [
    { id: 1, name: "Malcolm Lockyer", birth: "21/03/1961", gender: "Nam", address: "New york" },
    { id: 2, name: "Maria", birth: "11/02/1990", gender: "Nữ", address: "London" },
  ];

  return (
    <table style={{ borderCollapse: "collapse", width: "100%", border: "1px solid #333" }}>
      <UserTableHeader />
      <tbody>
        {users.map((user) => (
          <UserTableRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
}
