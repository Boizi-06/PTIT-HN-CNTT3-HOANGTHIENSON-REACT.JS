import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { products } from "./Bai2/Data";

export default function ProductList() {
  // Lấy search query từ URL
  const [searchParams] = useSearchParams();
  const currentQuery = searchParams.get("search") || "";

  // State của ô input
  const [keyword, setKeyword] = useState(currentQuery);

  const navigate = useNavigate();

  // Nếu user tải lại trang → đồng bộ keyword từ URL
  useEffect(() => {
    setKeyword(currentQuery);
  }, [currentQuery]);

  // Khi bấm Search, cập nhật query string
  const handleSearch = () => {
    const trimmed = keyword.trim();
    if (trimmed) {
      navigate(`/products?search=${encodeURIComponent(trimmed)}`);
    } else {
      navigate("/products");
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h1>

      {/* Ô nhập + nút Search */}
      <div className="flex gap-2 mb-6">
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Nhập từ khóa..."
          className="border p-2 flex-1 rounded"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      {/* Danh sách tĩnh (chưa lọc) */}
      <ul className="space-y-3">
        {products.map((p) => (
          <li key={p.id} className="border p-3 rounded">
            <h2 className="font-semibold">{p.name}</h2>
            <p>Giá: {p.price.toLocaleString()} VND</p>
            <p className="text-sm text-gray-600">{p.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
