import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entity/Article';
import { ARTICLES_VIEW_LOCALSTORAGE } from 'shared/const/constants';
import { getArticlesList } from '../services/getArticles/getArticles';
import { ArticlesPageSchema } from '../types/ArticlesPageSchema';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articles || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
    name: 'articlesPage',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.TILE,
        page: 1,
        hasMore: true,
        _inited: false,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE, action.payload);
        },
        initState: (state) => {
            const view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE) as ArticleView;
            state.view = view;
            state.limit = view === ArticleView.TILE ? 9 : 4;
            state._inited = true;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getArticlesList.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        });
        builder.addCase(getArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
            state.isLoading = false;
            articlesAdapter.addMany(state, action.payload);
            state.hasMore = action.payload.length > 0;
        });
        builder.addCase(getArticlesList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
