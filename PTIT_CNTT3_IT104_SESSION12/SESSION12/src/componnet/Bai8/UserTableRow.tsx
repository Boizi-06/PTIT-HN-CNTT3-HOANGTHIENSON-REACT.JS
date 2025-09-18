
import ActionButtons from "./ActionButtons";

type User = {
  id: number;
  name: string;
  birth: string;
  gender: string;
  address: string;
};

type Props = {
  user: User;
};

export default function UserTableRow({ user }: Props) {
  return (
    <tr style={{ backgroundColor: "#000", color: "white", textAlign: "center" }}>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.birth}</td>
      <td>{user.gender}</td>
      <td>{user.address}</td>
      <td>
        <ActionButtons
          onEdit={() => alert(`Sửa ${user.name}`)}
          onDelete={() => alert(`Xóa ${user.name}`)}
        />
      </td>
    </tr>
  );
}
