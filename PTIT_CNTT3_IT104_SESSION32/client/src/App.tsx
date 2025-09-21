import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store/reducers/rootReducer";
import ChangeState from "./pages/ChangeState";
import Couter from "./pages/Couter";
import ListUser from "./pages/ListUser";
import ProfileUser from "./pages/ProfileUser";
import RandomNumber from "./pages/RamdomNumber";
import ThemeSwitcher from "./pages/ThemeSwitcher";
import Register from "./pages/Register";
import Login from "./pages/Login";

export default function App() {
  const loginInfo = useSelector((state: RootState) => state.login);
  console.log("Thông tin đăng nhập:", loginInfo);

  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/profile" element={<ProfileUser />} />
      <Route path="/list-user" element={<ListUser />} />
      <Route path="/counter" element={<Couter />} />
      <Route path="/random" element={<RandomNumber />} />
      <Route path="/change-state" element={<ChangeState />} />
      <Route path="/theme" element={<ThemeSwitcher />} />
    </Routes>
  );
}
