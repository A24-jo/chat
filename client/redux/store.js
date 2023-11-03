"use client"
import chat from "./features/chatSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        chat
    }
})  