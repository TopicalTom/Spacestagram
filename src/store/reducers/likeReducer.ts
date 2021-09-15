import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface LikeState {
    isUpdating: boolean,
    likes: string[],
    count: number;
};

const initialState: LikeState = {
    isUpdating: false,
    likes: [],
    count: 0
};

const likeSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {
        setUpdating: (
            state, 
            { payload }: PayloadAction<boolean>
        ) => {
            state.isUpdating = payload;
        },
        setLikes: (
            state, 
            { payload }: PayloadAction<string[]>
        ) => {
            state.likes = payload;
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

export const { setUpdating, setLikes, setLike, setUnlike, setCount } = likeSlice.actions;
export const likeSelector = (state: RootState) => state.likes;
export const likeReducer = likeSlice.reducer;