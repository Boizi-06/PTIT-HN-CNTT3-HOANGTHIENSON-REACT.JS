import React from "react";
import { Navigate } from "react-router-dom";

export default function Login() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('111');
    
    e.preventDefault(); 
    <Navigate to={"/admin"}></Navigate>
  };

  return (
    <div>
      <form>
        <label htmlFor="username">Tên đăng nhập</label>
        <input type="text" id="username" />
        <button onClick={handleClick}>Đăng nhập</button>
      </form>
    </div>
  );
}
