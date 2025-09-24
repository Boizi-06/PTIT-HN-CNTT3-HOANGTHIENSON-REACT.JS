// slice/userSlice.ts
import { createSlice } from "@reduxjs/toolkit";

export interface user {
  id: number;
  name: string;
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [
      { id: 1, name: "minh thu" },
      { id: 2, name: "hoang son" },
    ],
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    deleteUser:(state,action)=>{
      // state.users.filter(i=>i.id!=i)
      console.log('action',action);
    }
  },
});

export const { addUser,deleteUser } = userSlice.actions;
export default userSlice.reducer;
