// src/store/store.ts (cập nhật phần reducer)
import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './slices/counterSlice';
// import menuReducer from './slices/menuSlice';
// import numberReducer from './slices/numberSlice';
// import themeReducer from './slices/themeSlice';
// import userReducer from './slices/userSlice';
// import viewReducer from './slices/viewSlice';
import taskReducer from './slices/taskSlice'; // Thêm dòng này

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    // menu: menuReducer,
    // number: numberReducer,
    // theme: themeReducer,
    // user: userReducer,
    // view: viewReducer,
    tasks: taskReducer, // Thêm dòng này
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;