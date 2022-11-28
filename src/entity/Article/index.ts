export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';

export type { Article } from './model/types/article';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';

export {
    getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading,
} from './model/selectors/articleDetails';