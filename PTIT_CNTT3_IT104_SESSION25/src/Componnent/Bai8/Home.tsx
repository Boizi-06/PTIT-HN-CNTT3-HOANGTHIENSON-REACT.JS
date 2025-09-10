import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListUser from "./ListUser";
import UserDetail from "./UserDetail";

export default function Bai5() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListUser />} />
        <Route path="/users/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
