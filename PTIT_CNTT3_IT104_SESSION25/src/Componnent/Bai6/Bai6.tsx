import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Detail from "./pages/Detail";

export default function Bai3() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
