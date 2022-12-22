import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entity/Article';
import { getArticlesListLimit } from 'pages/ArticlesPage/model/selectors/articles';

interface GetArticlesListProps {
   page?: number
}

export const getArticlesList = createAsyncThunk<Article[], GetArticlesListProps, ThunkConfig<string>>(
    'articlesPage/getArticlesList',
    async (args, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const { page = 1 } = args;
        const limit = getArticlesListLimit(getState());

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                },
            });
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            return rejectWithValue('Error');
        }
    },
);
