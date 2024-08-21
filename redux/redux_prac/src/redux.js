import{configureStore} from "@reduxjs/toolkit"
import { counterSlice } from "./slice/counterScli"
export const store =configureStore({
    reducer:{
     counter:counterSlice.reducer,
    }
})