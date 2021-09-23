import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

export interface Image {
    url: string,
    title: string,
    date: string,
    explanation: string,
};

interface ImagesState {
    isLoading: boolean;
    error: string | null;
    data: Image[];
};

const initialState: ImagesState = {
    isLoading: false,
    error: null,
    data: []
};

const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        setLoading: (
            state, 
            { payload }: PayloadAction<boolean>
        ) => {
            state.isLoading = payload;
        },
        setFetchSuccess: (
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
    setFetchSuccess, 
    setFetchError 
} = imagesSlice.actions;
export const imageSelector = (state: RootState) => state.images;
export const imagesReducer = imagesSlice.reducer;