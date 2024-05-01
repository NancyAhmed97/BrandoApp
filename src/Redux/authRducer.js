import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userArray:{},
    token:''
  },
  reducers: {
    userMethod: (state, action) => {
  state.userArray =action.payload;
 },
 tokenMethod: (state, action) => {
    state.token =action.payload;
   },
   logoutMethod: (state, action) => {
    state.token ='';
    state.userArray={}
   },
 },
});

export const { userMethod,tokenMethod,logoutMethod } = userSlice.actions;
export default userSlice.reducer;
