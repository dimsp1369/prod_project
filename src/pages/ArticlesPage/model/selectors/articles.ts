import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entity/Article';

export const getArticlesListIsLoading = (state: StateSchema) => state.articles?.isLoading;
export const getArticlesListError = (state: StateSchema) => state.articles?.error;
export const getArticlesListView = (state: StateSchema) => state.articles?.view || ArticleView.TILE;
