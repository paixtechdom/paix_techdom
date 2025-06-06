import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { ExamInfoInterface } from "../Interfaces";
import { dbLocation } from "../Constants";

// Types
interface ExamState extends ExamInfoInterface {
    loading: boolean;
    error: string | null;
  }
  
  const initialState: ExamState = {
    examKey: "",
    status: "",
    examTitle: "",
    duration: "",
    level: "",
    department: "",
    faculty: "",
    questionsLength: 0,
    totalScore: 0,
    loading: false,
    error: null
  };
  
  export const AddExam = createAsyncThunk<ExamInfoInterface, void>(
    "exams/AddExam",
    async (_, { rejectWithValue }) => {
      try {
        const response = await axios.post<ExamInfoInterface>(`${dbLocation}/exams.php/`);
        return response.data;
      } catch (err: any) {
        return rejectWithValue(err.message);
      }
    }
  );
  
  const ExamSlice = createSlice({
    name: "examslice",
    initialState,
    reducers: {
      setExamKey: (state, action: PayloadAction<string>) => {
        state.examKey = action.payload;
      },
      setExamStatus: (state, action: PayloadAction<string>) => {
        state.status = action.payload;
      },
      setDuration: (state, action: PayloadAction<string>) => {
        state.duration = action.payload;
      },
      setExamTitle: (state, action: PayloadAction<string>) => {
        state.examTitle = action.payload;
      },
      setExamLevel: (state, action: PayloadAction<string>) => {
        state.level = action.payload;
      },
      setExamDepartment: (state, action: PayloadAction<string>) => {
        state.department = action.payload;
      },
      setExamFaculty: (state, action: PayloadAction<string>) => {
        state.faculty = action.payload;
      },
      setQuestionsLength: (state, action: PayloadAction<number>) => {
        state.questionsLength = action.payload;
      },
      setTotalScore: (state, action: PayloadAction<number>) => {
        state.totalScore = action.payload;
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(AddExam.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(AddExam.fulfilled, (state, action) => {
          state.loading = false;
          Object.assign(state, action.payload);
        })
        .addCase(AddExam.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload as string;
        });
    }
  });
  
  export const {
    setExamKey,
    setExamStatus,
    setDuration,
    setExamTitle,
    setExamLevel,
    setExamDepartment,
    setExamFaculty,
    setQuestionsLength,
    setTotalScore
  } = ExamSlice.actions;
  
  export default ExamSlice.reducer;
  