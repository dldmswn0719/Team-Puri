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
    name : "theme",
    initialState : localStorage.getItem('theme') || 'light' ,
    reducers : {
        toggleTheme : (state) => state === "light" ? "dark" : "light"
    }
})

let language = createSlice({
    name: "language",
    initialState: localStorage.getItem('language') || 'kr',
    reducers: {
      setLanguage: (state, action) => action.payload,
    }
});

let price = createSlice({
    name: "price",
    initialState: Number(localStorage.getItem('price')) || 0,
    reducers: {
      setPrice: (state, action) => action.payload,
    }
  });

export const {logIn, logOut, loggedIn} = user.actions;
export const {toggleTheme} = dark.actions;
export const { setLanguage } = language.actions;
export const { setPrice } = price.actions;

export default configureStore({
    reducer : {
        user : user.reducer,
        dark : dark.reducer,
        language: language.reducer,
        price : price.reducer
    }
});