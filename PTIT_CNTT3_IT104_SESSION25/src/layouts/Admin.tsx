import { Outlet, NavLink } from "react-router-dom";


export default function Admin() {
  return (
    <div>Admin
        <h1>trang admin</h1>
        <NavLink to={'/admin/user'}>quan li nguoi dung</NavLink><br />
        <NavLink to={"/admin/product"}>quan li san pham</NavLink><br />
        
        <NavLink to={'/admin/oder'}>quan li hoa don</NavLink>
        <Outlet></Outlet>
    </div>
  )
}
