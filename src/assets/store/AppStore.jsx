import { configureStore } from "@reduxjs/toolkit"
// import navigationReducer from "./navigation/navigationSlice"
import alertReducer from "./AlertSlice"
import appsliceReducer from "./AppSlice"
// import imageSliceReducer from "./ImageSlice"


export const store = configureStore({
    reducer: {
        // navigation: navigationReducer,
        alert: alertReducer,
        appslice: appsliceReducer,
        // imageslice: imageSliceReducer
    }
})


// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch


