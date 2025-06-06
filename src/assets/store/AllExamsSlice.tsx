import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { ExamInfoInterface } from "../Interfaces";
import { dbLocation } from "../Constants";



interface AllExamsInterface{
    exams: ExamInfoInterface[],
    loading: boolean,
    error: string | null
}

const initialState: AllExamsInterface = {
    exams: [],
    loading: false,
    error: null
}

export const FetchExams = 
createAsyncThunk<ExamInfoInterface[], void>(
    "exams/fetchExams",
    async(_, { rejectWithValue }) => {
        try{
            const response = await axios.get<ExamInfoInterface[]>(`${dbLocation}/exams.php/`)
            return response.data
        }catch(err: any){
            return rejectWithValue(err.message)
        }
    }
)

export 

const AllExamsSlice = createSlice({
    name: "allexamsslice",
    initialState,
    reducers: {
              
    },
    extraReducers(builder) {
        builder
            .addCase(FetchExams.pending, state=>{
                state.loading = true
                state.error = null
            })
            .addCase(FetchExams.fulfilled, (state, action) => {
                state.loading = false
                state.exams = action.payload
            })
            .addCase(FetchExams.rejected, (state, action)=>{
                state.loading = false
                state.error = action.payload as string
            })
        },
})


// export const {  } = AllExamsSlice.actions



export default AllExamsSlice.reducer