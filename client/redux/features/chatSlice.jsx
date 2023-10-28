import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    barra:true,
}

export const  chatSlice = createSlice({
    name:"chat",
    initialState,
    reducers:{
        barraPerfil:(state)=>{
             state.barra = false
        },
        barraChats:(state)=>{
            state.barra = true
       }
    }
})

export const {barraChats,barraPerfil} = chatSlice.actions
export default chatSlice.reducer