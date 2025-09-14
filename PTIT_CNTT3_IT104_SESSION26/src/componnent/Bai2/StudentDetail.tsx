import { useParams } from "react-router-dom";

const data = [
  {
    name: "boizi",
    class: "cntt3",
  },
  {
    name: "nam",
    class: "cntt4",
  },
];

export default function StudentDetail() {
  const { name11 } = useParams();
  const result = data.find((p) => p.name == name11);

  return (
    <div>
      <h1>StudentDetail</h1>
      <p>ten sinh vien {result?.name}</p>
      <p>lop{result?.class} </p>
    </div>
  );
}
