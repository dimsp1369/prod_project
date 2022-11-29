import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Comment } from 'entity/Comment';
import { getAuthDataState } from 'entity/User';
import { getArticleDetailsData } from 'entity/Article';
import { getCommentsByArticleId } from '../../services/getCommentsByArticleId';

export const postCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'articleDetails/postCommentForArticle',
    async (text, thunkApi) => {
        const {
            extra, rejectWithValue, getState, dispatch,
        } = thunkApi;
        const userData = getAuthDataState(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article?.id,
                userId: userData.id,
                text,
            });
            if (!response.data) {
                throw new Error();
            }

            dispatch(getCommentsByArticleId(article.id));
            return response.data;
        } catch (e) {
            return rejectWithValue('Error');
        }
    },
);
