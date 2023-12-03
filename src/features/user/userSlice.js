import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  user: {
    username: "coding addict",
  },
  theme: "dracula",
};

const userSlice = createSlice({
  name: "user",
  initialState, 
  reducers : {
    loginUser: (state, action) => {
      console.log("login")
    }
  }
})