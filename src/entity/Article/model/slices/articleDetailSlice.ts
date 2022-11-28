import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from 'entity/Article';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { getArticleById } from '../services/fetchArticleById/getArticleById';

const initialState: ArticleDetailsSchema = {
    isLoading: false,
    data: undefined,
    error: undefined,
};

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getArticleById.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(getArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(getArticleById.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
