import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';
import { Image } from '../reducers';

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
        setLikes: (
            state, 
            { payload }: PayloadAction<string[]>
        ) => {
            state.likes = payload;
        },
        setLikedImages: (
            state, 
            { payload }: PayloadAction<Image[]>
        ) => {
            state.data = payload;
        },
        setLike: (
            state, 
            { payload }: PayloadAction<string>
        ) => {
            state.likes = [...state.likes, payload];
        },
        setUnlike: (
            state, 
            { payload }: PayloadAction<string>
        ) => {
            state.likes = [...state.likes.filter(id => id !== payload)];
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
    setLikes, 
    setLikedImages, 
    setLike, 
    setUnlike, 
    setCount 
} = likeSlice.actions;
export const likeSelector = (state: RootState) => state.likes;
export const likeReducer = likeSlice.reducer;