import { configureStore } from "@reduxjs/toolkit";
import contactReducer from '../src/Redux-Contac/ContacSlice'

const store = configureStore ({
    reducer:{
        contact:contactReducer,
        
    }

})

export default store;