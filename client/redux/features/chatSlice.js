import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inputChat: [],
}

export const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        dataInputChat: (state, action) => {
            console.log(action.payload,"dfsdf")
                state.inputChat = [...state.inputChat, action.payload]
        },
    }
})

export const { dataInputChat } = chatSlice.actions
export default chatSlice.reducer