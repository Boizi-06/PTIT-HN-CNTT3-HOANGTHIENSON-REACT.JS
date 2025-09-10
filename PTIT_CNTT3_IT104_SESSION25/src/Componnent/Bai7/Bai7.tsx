import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NotFound from "./Notfound";
import CustomLink from "./CustomLink";

export default function Bai4() {
  return (
    <BrowserRouter>
      <CustomLink />
      <Routes>
        <Route path="/home-page" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
