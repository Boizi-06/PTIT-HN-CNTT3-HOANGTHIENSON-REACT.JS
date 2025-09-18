
import Header from "./Header";
import Menu from "./Menu";
import Main from "./Main";
import Footer from "./Footer";
export default function AdminIndex() {
  return (
    <div style={{ border: "1px solid #ccc", width: "80%", margin: "20px auto" }}>
      {/* Header */}
      <Header />

      <div style={{ display: "flex" }}>
        {/* Menu */}
        <div style={{ width: "20%" }}>
          <Menu />
        </div>

        {/* Main */}
        <div style={{ width: "80%" }}>
          <Main />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
