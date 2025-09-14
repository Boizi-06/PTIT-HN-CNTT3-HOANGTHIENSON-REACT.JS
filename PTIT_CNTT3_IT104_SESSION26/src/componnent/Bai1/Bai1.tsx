import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail";

function Home() {
  return <h1>Trang chủ</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
