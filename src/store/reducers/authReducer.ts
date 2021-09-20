import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface User {
    uid: string,
    displayName: string,
    photoURL: string
};

interface UserState {
    isAuthenticating: boolean;
    authError: string | null;
    user: User | null;
};

const initialState: UserState = {
    isAuthenticating: false,
    authError: null,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthenticating: (
            state, 
            { payload }: PayloadAction<boolean>
        ) => {
            state.isAuthenticating = payload;
        },
        setAuth: (
            state, 
            { payload }: PayloadAction<any>
        ) => {
            state.user = payload;
        },
        setAuthError: (
            state, { payload }: PayloadAction<string>
        ) => {
            state.authError = payload;
        },
    },
});

export const { setAuthenticating, setAuth, setAuthError } = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
export const authReducer = authSlice.reducer;