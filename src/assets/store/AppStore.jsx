import { configureStore } from "@reduxjs/toolkit"
// import navigationReducer from "./navigation/navigationSlice"
import alertReducer from "./AlertSlice"
import examsliceReducer from "./ExamSlice"
import confirmBoxReducer from "./ConfirmBoxSlice"
// import imageSliceReducer from "./ImageSlice"


export const store = configureStore({
    reducer: {
        // navigation: navigationReducer,
        alert: alertReducer,
        confirmBox: confirmBoxReducer,
        // appslice: appsliceReducer,
        examslice: examsliceReducer,
        // imageslice: imageSliceReducer
    }
})


// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch


