import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { User } from '../reducers';

export interface Image {
    url: string,
    title: string,
    date: string,
    explanation: string,
    copyright?: string,
    hdurl: string,
    likes: User[],
    media_type: string,
    service_version: string
};

interface APIState {
    isLoading: boolean;
    error: string | null;
    data: Image[];
};

const initialState: APIState = {
    isLoading: false,
    error: null,
    data: []
};

const apiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {
        setLoading: (
            state, 
            { payload }: PayloadAction<boolean>
        ) => {
            state.isLoading = payload;
        },
        setAPIImages: (
            state, 
            { payload }: PayloadAction<Image[]>
        ) => {
            state.data = payload;
        },
        setFetchError: (
            state, { payload }: PayloadAction<string>
        ) => {
            state.error = payload;
        },
    },
});

export const { 
    setLoading, 
    setAPIImages, 
    setFetchError 
} = apiSlice.actions;
export const apiSelector = (state: RootState) => state.api;
export const apiReducer = apiSlice.reducer;