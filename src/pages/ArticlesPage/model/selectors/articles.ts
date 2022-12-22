import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entity/Article';

export const getArticlesListIsLoading = (state: StateSchema) => state.articles?.isLoading;
export const getArticlesListError = (state: StateSchema) => state.articles?.error;
export const getArticlesListView = (state: StateSchema) => state.articles?.view || ArticleView.TILE;
export const getArticlesListPageNum = (state: StateSchema) => state.articles?.page || 1;
export const getArticlesListLimit = (state: StateSchema) => state.articles?.limit || 9;
export const getArticlesListHasMore = (state: StateSchema) => state.articles?.hasMore;
