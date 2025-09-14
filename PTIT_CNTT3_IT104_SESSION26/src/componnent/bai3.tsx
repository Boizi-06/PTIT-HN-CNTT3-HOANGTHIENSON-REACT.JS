import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Student() {
  const [keyword, setKeyword] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (keyword.trim() !== "") {
      navigate(`/student?studentName=${keyword}`);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Page</h1>

      <input
        type="text"
        placeholder="Nhập từ khóa tìm kiếm"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{ padding: "6px", marginRight: "10px" }}
      />
      <button onClick={handleSearch}>Tìm kiếm</button>

      <div style={{ marginTop: "20px" }}>
        <p>Kết quả trên URL: {searchParams.get("studentName")}</p>
      </div>
    </div>
  );
}
