// src/store/userSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  email: string;
  name?: string;
  currentCourse?: string; // Optional: Track current course the user is working on
}

interface UserState {
  currentUser: User | null;
  isAuthenticated: boolean;
  authLoading: boolean;
  error?: string;
}

const initialState: UserState = {
  currentUser: null,
  isAuthenticated: false,
  authLoading: false,
  error: undefined,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User | null>) {
      state.currentUser = action.payload;
      state.isAuthenticated = action.payload !== null;
    },
    setAuthLoading(state, action: PayloadAction<boolean>) {
      state.authLoading = action.payload;
    },
    setAuthError(state, action: PayloadAction<string | undefined>) {
      state.error = action.payload;
    },
  },
});

export const { setUser, setAuthLoading, setAuthError } = userSlice.actions;
export default userSlice.reducer;
