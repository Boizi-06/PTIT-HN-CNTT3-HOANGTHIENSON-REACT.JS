import { Navigate } from "react-router-dom";

export default function ProtectedRoute(props: any) {
  const isLogin: boolean = true;
  if (!isLogin) {
    return <Navigate to={"/Login"}></Navigate>;
  }
  return props.element;
}
