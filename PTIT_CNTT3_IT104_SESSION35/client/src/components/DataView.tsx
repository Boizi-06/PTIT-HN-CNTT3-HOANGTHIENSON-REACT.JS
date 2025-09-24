import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { toggleMode } from "../store/silce/viewSlice";

const items = [1, 2, 3, 4];

export default function DataView() {
  const mode = useSelector((state: RootState) => state.view.mode);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div style={{ padding: 20 }}>
      <button onClick={() => dispatch(toggleMode())}>
        {mode === "list" ? "List mode" : "Grid mode"}
      </button>

      <div
        style={{
          display: mode === "grid" ? "grid" : "block",
          gridTemplateColumns: mode === "grid" ? "repeat(4, 80px)" : "none",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {items.map((num) => (
          <div
            key={num}
            style={{
              background: "tomato",
              color: "#000",
              textAlign: "center",
              padding: "20px",
              margin: mode === "list" ? "10px 0" : "0",
            }}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
}
