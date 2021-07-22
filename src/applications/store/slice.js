import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: 1,
      emailUser: "thangldvnext@gmail.com",
      nameUser: "le thang",
    },
  ],
};

export const setUser = createSlice({
  name: "setuser",
  initialState,
  reducers: {
    getUser(state, action) {
      state.users.push({
        id: state.users.length + 1,
        emailUser: action.payload.email,
        nameUser: action.payload.name,
      });
    },
    RemoveUser(state, action) {
      state.users = state.users.filter((item) => item.id !== action.payload);
    },
  },
});

export const { getUser, RemoveUser } = setUser.actions;
export const selectUser = (state) => state.reducer.users;
export default setUser.reducer;
