
import Header from "./Header";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Main from "./Main";
import Article from "./Article";

export default function UserLayout() {
  return (
    <div style={{ border: "1px solid #ccc", width: "90%", margin: "20px auto" }}>
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div style={{ display: "flex" }}>
        {/* Menu */}
        <div style={{ width: "15%" }}>
          <Menu />
        </div>

        {/* Main */}
        <div style={{ width: "70%" }}>
          <Main />
        </div>

        {/* Article */}
        <div style={{ width: "15%" }}>
          <Article />
        </div>
      </div>
    </div>
  );
}
