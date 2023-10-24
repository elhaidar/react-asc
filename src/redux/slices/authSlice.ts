/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    auth: {
        isLoggedIn: false,
    },
} as any

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setIsLoggedIn: (state, action) => {
            state.auth.isLoggedIn = action.payload
        }
    },
});

export const { setIsLoggedIn } = authSlice.actions

export default authSlice.reducer;