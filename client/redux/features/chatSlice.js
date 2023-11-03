import { Axios } from "@/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllContacts = createAsyncThunk('appChats/getAllContacts', async () => {
    const {data} = await Axios.get('user/get_all_users/f1dd2c94-434d-46d1-8ad3-162f52553f3f')
    return {
        contacts: data
    }
})

const initialState = {
  chats: [],
  messages: [],
  contacts: [],
  userProfile: {},
  selectedUser: {},
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {  },
  extraReducers: builder => {
    builder.addCase(getAllContacts.fulfilled, (state, action) => {
        state.contacts = action.payload.contacts
    })
    
  }
});

// export const { } = chatSlice.actions;
export default chatSlice.reducer;
