import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    fullName: "",
    phone: "",
    _id: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState : initialState,
    reducers: {
      loginRedux: (state, action) => {
        console.log(action.payload.data);
        //state.user = action.payload.data
    
      //state.user = action.payload.data;
       state._id = action.payload.data._id;
       state.fullName = action.payload.data.fullName;
       state.email = action.payload.data.email;
       state.phone = action.payload.data.phone;
        console.log(state)
     },
    //   logoutRedux: (state, action) => {
    //     state._id = "";
    //     state.firstName = "";
    //     state.lastName = "";
    //     state.email = "";
    //     state.image = "";
    //   },
    },
  });
  export const { loginRedux } = userSlice.actions
  export default userSlice.reducer