import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
    getArticlesListHasMore,
    getArticlesListIsLoading,
    getArticlesListPageNum,
} from '../../selectors/articles';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { getArticlesList } from './getArticles';

export const getNextArticlesStack = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/getNextArticlesStack',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const page = getArticlesListPageNum(getState());
        const isLoading = getArticlesListIsLoading(getState());
        const hasMore = getArticlesListHasMore(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(page + 1));
            dispatch(getArticlesList({ page: page + 1 }));
        }
    },
);
