import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showSideNav: false,
    currentNav: 0,
    currentDropDown: 0,
    showTopNav: true,
}

const navigationSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        setShowSideNav: (state, action) => {
            state.showSideNav = action.payload
        },
        setShowTopNav: (state, action) => {
            state.showTopNav = action.payload
        },
        setCurrentNav: (state, action) => {
            state.currentNav = action.payload
        },
        setCurrentDropDown: (state, action) => {
            state.currentDropDown = action.payload
        },
       
    }
})


export const { setShowTopNav, setShowSideNav, setCurrentNav, setCurrentDropDown } = navigationSlice.actions


export default navigationSlice.reducer