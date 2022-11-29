import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
    text: '',
    error: undefined,
    isLoading: false,
};

export const addCommentSlice = createSlice({
    name: 'addComment',
    initialState,
    reducers: {
        setComment: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    extraReducers: (builder) => {
        // builder.addCase(postNewComment.pending, (state) => {
        //     state.error = undefined;
        //     state.isLoading = true;
        // });
        // builder.addCase(postNewComment.fulfilled, (state, action) => {
        //     state.isLoading = false;
        // });
        // builder.addCase(postNewComment.rejected, (state, action) => {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // });
    },
});

export const { actions: addCommentActions } = addCommentSlice;
export const { reducer: addCommentReducer } = addCommentSlice;
