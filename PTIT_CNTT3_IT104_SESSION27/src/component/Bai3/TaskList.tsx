import { Link } from "react-router-dom";
import { tasks } from "./tasks";

export default function TaskList() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Danh sách công việc</h1>
      {tasks.map((t) => (
        <div key={t.id} className="border p-3 mb-3 rounded">
          <h2 className="font-semibold">{t.title}</h2>
          <p className="text-sm text-gray-600">{t.description}</p>
          <Link to={`/task/${t.id}`} className="text-blue-500 underline">
            Xem chi tiết
          </Link>
        </div>
      ))}
    </div>
  );
}
