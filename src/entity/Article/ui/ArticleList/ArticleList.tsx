import { classNames } from 'shared/lib/classNames/className';
import { memo } from 'react';
import { ArticleListItemSkeleton } from 'entity/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
   className?: string;
   articles: Article[];
   isLoading?: boolean;
   view?: ArticleView
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.TILE,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                {
                    new Array(view === ArticleView.TILE ? 9 : 3).fill(0).map((item, index) => (
                        <ArticleListItemSkeleton view={view} key={index} />
                    ))
                }
            </div>
        );
    }

    const renderArticle = (article: Article) => (
        <ArticleListItem article={article} view={view} key={article.id} />
    );

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
        </div>
    );
});
