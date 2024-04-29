import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
    fullName: "",
    phone: "",
    area:"",
    _id: "",
}

export const dbSlice = createSlice({
    name: "db",
    initialState : initialState,
    reducers: {
      dbloginRedux: (state, action) => {
        console.log(action.payload.data);
        //state.user = action.payload.data
    
      //state.user = action.payload.data;
       state._id = action.payload.data._id;
       state.fullName = action.payload.data.fullName;
       state.email = action.payload.data.email;
       state.phone = action.payload.data.phone;
       state.area = action.payload.data.area;
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
  export const { dbloginRedux } = dbSlice.actions
  export default dbSlice.reducer