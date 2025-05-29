import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showConfirmBox: false,
    confirmMessage: "",
    confirmMessageDescription: "",
    confirmedAction: false
}

const confirmBox = createSlice({
    name: "confirmBox",
    initialState,
    reducers: {
        toggleShowConfirmBox: (state, action) => {
            state.showConfirmBox = action.payload
        },
        setConfirmMessage: (state, action) => {
            state.confirmMessage = action.payload
        },
        setConfirmMessageDescription: (state, action) => {
            state.confirmMessageDescription = action.payload
        },
        setConfirmedAction: (state, action) => {
            state.confirmedAction = action.payload
        }
    }
})


export const { toggleShowConfirmBox, setConfirmMessage, setConfirmMessageDescription, setConfirmedAction } = confirmBox.actions


export default confirmBox.reducer