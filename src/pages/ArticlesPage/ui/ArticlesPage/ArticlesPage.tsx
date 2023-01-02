import { classNames } from 'shared/lib/classNames/className';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entity/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/ui/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

import { PageContainer } from 'widgets/PageContainer/PageContainer';
import { getNextArticlesStack } from '../../model/services/getArticles/getNextArticlesStack';
import { getArticlesList } from '../../model/services/getArticles/getArticles';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import cls from './ArticlesPage.module.scss';
import {
    getArticlesListInited,
    getArticlesListIsLoading,
    getArticlesListPageNum,
    getArticlesListView,
} from '../../model/selectors/articles';

interface ArticlesPageProps {
   className?: string;
}

const reducers: ReducersList = {
    articles: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const view = useSelector(getArticlesListView);
    const isLoading = useSelector(getArticlesListIsLoading);
    const page = useSelector(getArticlesListPageNum);
    // const hasMore = useSelector(getArticlesListHasMore);
    const inited = useSelector(getArticlesListInited);

    const onLoadNextPart = useCallback(() => {
        dispatch(getNextArticlesStack());
    }, [dispatch]);

    useInitialEffect(() => {
        if (!inited) {
            dispatch(articlesPageActions.initState());
            dispatch(getArticlesList({ page }));
        }
    });

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <PageContainer
                className={classNames(cls.ArticlesPage, {}, [className])}
                onScrollEnd={onLoadNextPart}
            >
                <div>
                    <ArticleViewSelector view={view} onViewClick={onChangeView} />
                </div>
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </PageContainer>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
