import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentDetail from "./StudentDetail";

export default function Bai2() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"student/:name"} element={<StudentDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
