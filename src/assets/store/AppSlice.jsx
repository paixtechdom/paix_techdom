import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    examKey: "",
    examStatus: "",
    examTitle: "",
    duration: ""
}

const AppSlice = createSlice({
    name: "appslice",
    initialState,
    reducers: {
        setExamKey: (state, action) => {
            state.examKey = action.payload
        },
        setExamStatus: (state, action) => {
            state.examStatus = action.payload
        },
        setDuration: (state, action) => {
            state.duration = action.payload
        },
        setExamTitle: (state, action) => {
            state.examTitle = action.payload
        },
    }
})


export const { setExamKey, setExamStatus, setDuration, setExamTitle } = AppSlice.actions



export default AppSlice.reducer