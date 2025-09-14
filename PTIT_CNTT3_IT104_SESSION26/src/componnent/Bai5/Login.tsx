import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    navigate("/login", { replace: true });
  };
  return (
    <div>
      <h1>Account Page</h1>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
