import DataView from "./components/DataView";
import LanguageToggle from "./components/LanguageToggle";
import RandomNumberList from "./components/RamdomNumberList";
import Sidebar from "./components/Sidebar";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <div>
      <RandomNumberList />
      <hr />
      <ThemeToggle />
      <hr />
      <DataView />
      <hr />
      <Sidebar></Sidebar>
      <hr />
      <LanguageToggle></LanguageToggle>
    </div>
  );
}
