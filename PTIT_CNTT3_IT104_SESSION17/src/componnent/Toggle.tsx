import  { useState } from "react";

interface ToggleState {
  isVisible: boolean;
}

export default function Toggle() {
  const [state, setState] = useState<ToggleState>({ isVisible: false });

  const handleToggle = () => {
    setState({ isVisible: !state.isVisible });
  };

  return (
    <div>
      <button onClick={handleToggle}>{state.isVisible ? "Ẩn" : "Hiện"}</button>

      {state.isVisible && <h2>Boizi</h2>}
    </div>
  );
}