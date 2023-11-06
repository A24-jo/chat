import { Axios } from "@/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllChats = createAsyncThunk(
  "appChats/getAllChats",
  async (_, { dispatch, getState }) => {
    const userId = getState().user?.userData?.userId;

    const { data } = await Axios.get(`user/get_all_users/${userId}`);
    return {
      chats: data,
    };
  }
);

export const getAllContacts = createAsyncThunk(
  "appChats/getAllContacts",
  async (_, { dispatch, getState }) => {
    const id = getState().user?.userData?.id;
    const { data } = await Axios.get(`contacts/get-all-contacts/${id}`);
    return {
      contacts: data,
    };
  }
);

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
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllChats.fulfilled, (state, action) => {
        state.chats = action.payload.chats;
      })
      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.contacts = action.payload.contacts;
      });
  },
});

export const { setSelectedUser } = chatSlice.actions;
export default chatSlice.reducer;
