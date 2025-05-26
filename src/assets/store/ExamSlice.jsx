import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    examKey: "",
    status: "",
    examTitle: "",
    duration: "",
    level: "",
    department: "",
    faculty: "",
    questionsLength: 0
}

const ExamSlice = createSlice({
    name: "examslice",
    initialState,
    reducers: {
        setExamKey: (state, action) => {
            state.examKey = action.payload
        },
        setExamStatus: (state, action) => {
            state.status = action.payload
        },
        setDuration: (state, action) => {
            state.duration = action.payload
        },
        setExamTitle: (state, action) => {
            state.examTitle = action.payload
        },
        setExamLevel: (state, action) => {
            state.level = action.payload
        },
        setExamDepartment: (state, action) => {
            state.department = action.payload
        },
        setExamFaculty: (state, action) => {
            state.faculty = action.payload
        },
        setQuestionsLength: (state, action) => {
            state.questionsLength = action.payload
        },
    }
})


export const { setExamKey, setExamStatus, setDuration, setExamTitle, setExamLevel, setExamDepartment, setExamFaculty, setQuestionsLength } = ExamSlice.actions



export default ExamSlice.reducer