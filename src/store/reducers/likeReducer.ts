import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface LikeState {
    isUpdating: boolean;
    isLiked: boolean;
    count: number;
};

const initialState: LikeState = {
    isUpdating: false,
    isLiked: false,
    count: 0
};

const likeSlice = createSlice({
    name: 'likes',
    initialState,
    reducers: {
        // Toggles Image Like based on user input
        setLike: (
            state, 
            { payload }: PayloadAction<boolean>
        ) => {
            state.isLiked = payload;
        },
        // Displayes the total of users who liked image
        setCount: (
            state, 
            { payload }: PayloadAction<number>
        ) => {
            state.count = payload;
        },
        // Enables UI changes to occur
        setUpdating: (
            state, 
            { payload }: PayloadAction<boolean>
        ) => {
            state.isUpdating = payload;
        },
    },
});

export const { setLike, setCount, setUpdating } = likeSlice.actions;
export const likeSelector = (state: RootState) => state.likes;
export const likeReducer = likeSlice.reducer;