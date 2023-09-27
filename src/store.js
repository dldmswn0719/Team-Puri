import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : "user",
    initialState : {
        loggedIn : false,
        data : null,
        uid : null
    },
    reducers : {
        logIn : (state, action) => {
            state.loggedIn = true;
            state.uid = action.payload;
        },
        loggedIn : (state, action) => {
            state.loggedIn = true;
            state.data = action.payload;
        },
        logOut : (state) => {
            state.loggedIn = false;
            state.data = null;
            state.uid = null;
        }
    }
});

let dark = createSlice({
    name : "dark",
    initialState : "light" ,
    reducers : {
        toggleTheme : (state) => state === "light" ? "dark" : "light"
    }
})

export const {logIn, logOut, loggedIn} = user.actions;
export const {toggleTheme} = dark.actions;

export default configureStore({
    reducer : {
        user : user.reducer,
        dark : dark.reducer
    }
});