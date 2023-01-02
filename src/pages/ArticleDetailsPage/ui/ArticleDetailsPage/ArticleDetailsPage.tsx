import { classNames } from 'shared/lib/classNames/className';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entity/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { CommentList } from 'entity/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/ui/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { AddCommentForm } from 'features/addComment';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';

import { PageContainer } from 'widgets/PageContainer/PageContainer';
import { getCommentsByArticleId } from '../../model/services/getCommentsByArticleId';
import {
    postCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments';
import { articleDetailsCommentReducer, getArticleDetailsComment } from '../../model/slices/articleDetailsCommentSlice';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
   className?: string;
}

const reducers: ReducersList = {
    articleDetailsComment: articleDetailsCommentReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const { id } = useParams<{id: string}>();
    const comments = useSelector(getArticleDetailsComment.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useInitialEffect(() => {
        dispatch(getCommentsByArticleId(id));
    });

    const onBackToList = useCallback(() => {
        navigate(RouterPath.articles);
    }, [navigate]);

    const onSendComment = useCallback((text: string) => {
        dispatch(postCommentForArticle(text));
    }, [dispatch]);

    if (!id) {
        return (
            <PageContainer className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Article not found')}
            </PageContainer>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers}>
            <PageContainer className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t('To articles')}
                </Button>
                <ArticleDetails id={id} />
                <Text title={t('Comments')} className={cls.commentsTitle} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList isLoading={commentsIsLoading} comments={comments} />
            </PageContainer>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
