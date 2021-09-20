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

export const { setLoadingLikes, setShorthandLikes, setLikes, setLike, setUnlike, setCount } = likeSlice.actions;
export const likeSelector = (state: RootState) => state.likes;
export const likeReducer = likeSlice.reducer;

/*
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

interface Image {
    id: string,
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

export const { setLoadingLikes, setLikes, setLike, setUnlike, setCount } = likeSlice.actions;
export const likeSelector = (state: RootState) => state.likes;
export const likeReducer = likeSlice.reducer;

*/