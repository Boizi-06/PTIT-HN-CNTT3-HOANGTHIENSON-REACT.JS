import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./silce/couterSlice";
import numberReducer from "./silce/numberSlice";
import themeReducer from "./silce/themeSlice";
import viewReducer from "./silce/viewSlice";
import menuReducer  from "./silce/menuSlice";
import languageReducer  from "./silce/languageSlice";


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    numbers: numberReducer,
    theme: themeReducer,
    view: viewReducer,
    menu: menuReducer,
    language: languageReducer,
  },
});

// Types cho TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
