import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ExamInfoInterface } from "../Interfaces";


const initialState: ExamInfoInterface = {
    examKey: "",
    status: "",
    examTitle: "",
    duration: "",
    level: "",
    department: "",
    faculty: "",
    questionsLength: 0,
    totalScore: 0
}

const ExamSlice = createSlice({
    name: "examslice",
    initialState,
    reducers: {
        setExamKey: (state, action: PayloadAction<string>) => {
            state.examKey = action.payload
        },
        setExamStatus: (state, action: PayloadAction<string>) => {
            state.status = action.payload
        },
        setDuration: (state, action: PayloadAction<string>) => {
            state.duration = action.payload
        },
        setExamTitle: (state, action: PayloadAction<string>) => {
            state.examTitle = action.payload
        },
        setExamLevel: (state, action: PayloadAction<string>) => {
            state.level = action.payload
        },
        setExamDepartment: (state, action: PayloadAction<string>) => {
            state.department = action.payload
        },
        setExamFaculty: (state, action: PayloadAction<string>) => {
            state.faculty = action.payload
        },
        setQuestionsLength: (state, action: PayloadAction<number>) => {
            state.questionsLength = action.payload
        },
        setTotalScore: (state, action: PayloadAction<number>) => {
            state.totalScore = action.payload
        },
    }
})


export const { setExamKey, setExamStatus, setDuration, setExamTitle, setExamLevel, setExamDepartment, setExamFaculty, setQuestionsLength, setTotalScore } = ExamSlice.actions



export default ExamSlice.reducer