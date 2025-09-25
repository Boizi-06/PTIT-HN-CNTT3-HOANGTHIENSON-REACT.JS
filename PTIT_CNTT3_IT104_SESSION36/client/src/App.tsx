// src/App.tsx (cập nhật)
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import TaskManager from "./components/TaskManager";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <TaskManager />
      </div>
    </Provider>
  );
};

export default App;
