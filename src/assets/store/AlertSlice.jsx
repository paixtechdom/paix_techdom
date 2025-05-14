import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showAlert: false,
    alertType: "",
    alertMessage: "",
}

const alertSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {
        toggleShowAlert: (state, action) => {
            state.showAlert = action.payload
        },
        setAlertType: (state, action) => {
            state.alertType = action.payload
        },        
        setAlertMessage: (state, action) => {
            state.alertMessage = action.payload
        }
    }
})


export const { toggleShowAlert, setAlertType, setAlertMessage } = alertSlice.actions


export default alertSlice.reducer