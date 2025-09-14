import { useParams } from "react-router-dom";

export default function Team() {
  const { teamId } = useParams();
  return (
    <div>
      <h2>Chi tiet Team: {teamId}</h2>
    </div>
  );
}
