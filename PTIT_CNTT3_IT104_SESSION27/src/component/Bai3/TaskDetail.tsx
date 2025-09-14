import { useParams, useNavigate } from "react-router-dom";
import { tasks } from "./tasks";

export default function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const task = tasks.find((t) => t.id === Number(id));

  if (!task) return <p>Không tìm thấy công việc</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">{task.title}</h1>
      <p className="mb-4">{task.description}</p>
      <button
        onClick={() => navigate(-1)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Quay lại
      </button>
    </div>
  );
}
