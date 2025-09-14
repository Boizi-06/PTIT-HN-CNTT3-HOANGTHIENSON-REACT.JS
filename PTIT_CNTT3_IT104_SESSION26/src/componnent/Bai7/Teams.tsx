import { Link, Outlet } from "react-router-dom";
interface TeamItem {
  id: number;
  name: string;
}
export default function Teams() {
  const teamList: TeamItem[] = [
    { id: 1, name: "Hello Team" },
    { id: 2, name: "World Team" },
  ];
  return (
    <div>
      <h2>Team Page</h2>
      <ul>
        {teamList.map((team) => (
          <li key={team.id}>
            <Link to={String(team.id)}>{team.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet></Outlet>
    </div>
  );
}
