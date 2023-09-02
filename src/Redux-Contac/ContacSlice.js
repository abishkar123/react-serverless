import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    contact: {},
    isLoading: false,

}


const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers:{
        requestPending: (state)=>{
            state.isLoading = true
        },

        requestSuccess : (state, {payload})=>{
            
            state.isLoading = false
            state.contact = payload

        },
        

    
    },
})

const { reducer, actions }= contactSlice
export const { requestPending, requestSuccess} = actions
export default reducer;