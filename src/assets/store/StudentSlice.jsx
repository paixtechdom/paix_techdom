import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    firstName: "",
    middleName: "",
    lastName: "",
    id: "",
    matricNumber: "",
    level: "",
    department: "",
    faculty: ""
}

const StudentSlice = createSlice({
    name: "studentslice",
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload
        },
        setMiddleName: (state, action) => {
            state.middleName = action.payload
        },
        setLastName: (state, action) => {
            state.lastName = action.payload
        },
        setId: (state, action) => {
            state.id = action.payload
        },
        setMatricNumber: (state, action) => {
            state.matricNumber = action.payload
        },
        setLevel: (state, action) => {
            state.level = action.payload
        },
        setDepartment: (state, action) => {
            state.department = action.payload
        },
        setFaculty: (state, action) => {
            state.faculty = action.payload
        },
    }
})


export const { setFirstName,
    setMiddleName,
    setLastName,
    setId,
    setMatricNumber,
    setLevel,
    setDepartment,
    setFaculty } = StudentSlice.actions



export default StudentSlice.reducer