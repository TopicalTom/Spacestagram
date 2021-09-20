import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface Image {
    url: string,
    title: string,
    date: string,
    explanation: string,
};

interface LikeState {
    isLoadingLikes: boolean,
    data: Image[],
    likes: string[],
    count: number;
};

const initialState: LikeState = {
    isLoadingLikes: false,
    data: [],
    likes: [],
    count: 0
};

const likeSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {
        setLoadingLikes: (
            state, 
            { payload }: PayloadAction<boolean>
        ) => {
            state.isLoadingLikes = payload;
        },
        setClearLikes: (
            state, 
        ) => {
            state.likes = [];
            state.data = [];
            state.count = 0;
        },
        setShorthandLikes: (
            state, 
            { payload }: PayloadAction<string[]>
        ) => {
            state.likes = payload;
        },
        setLikes: (
            state, 
            { payload }: PayloadAction<Image[]>
        ) => {
            state.data = payload;
        },
        setLike: (
            state, 
            { payload }: PayloadAction<Image>
        ) => {
            state.data = [...state.data, payload];
            state.likes = [...state.likes, payload.date];
        },
        setUnlike: (
            state, 
            { payload }: PayloadAction<Image>
        ) => {
            state.data = [...state.data.filter(image => image.date !== payload.date)];
            state.likes = [...state.likes.filter(id => id !== payload.date)];
        },
        setCount: (
            state
        ) => {
            state.count = state.likes.length;
        },
    },
});

export const { 
    setLoadingLikes, 
    setClearLikes,
    setShorthandLikes, 
    setLikes, 
    setLike, 
    setUnlike, 
    setCount 
} = likeSlice.actions;
export const likeSelector = (state: RootState) => state.likes;
export const likeReducer = likeSlice.reducer;