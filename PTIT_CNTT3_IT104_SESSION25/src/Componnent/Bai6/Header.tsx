import { NavLink } from "react-router-dom";

export default function Header() {
  const linkStyle = ({ isActive }: { isActive: boolean }) => ({
    margin: "0 10px",
    padding: "10px 20px",
    textDecoration: "none",
    color: isActive ? "white" : "black",
    backgroundColor: isActive ? "red" : "transparent",
    borderRadius: "4px"
  });

  return (
    <nav style={{ marginBottom: "20px" }}>
      <NavLink to="/" style={linkStyle}>
        Home
      </NavLink>
      <NavLink to="/product" style={linkStyle}>
        Product
      </NavLink>
      <NavLink to="/detail" style={linkStyle}>
        Detail
      </NavLink>
    </nav>
  );
}
