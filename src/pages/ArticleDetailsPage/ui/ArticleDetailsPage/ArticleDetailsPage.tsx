import { classNames } from 'shared/lib/classNames/className';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entity/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entity/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/ui/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/getCommentsByArticleId';
import { AddCommentForm } from 'features/addComment';
import {
    postCommentForArticle,
} from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { getCommentFormText } from 'features/addComment/model/selectors/addCommentFormSelectors';
import { getArticleDetailsCommentsError, getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments';
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

    useInitialEffect(() => {
        dispatch(getCommentsByArticleId(id));
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(postCommentForArticle(text));
    }, [dispatch]);

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Article not found')}
            </div>
        );
    }
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text title={t('Comments')} className={cls.commentsTitle} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList isLoading={commentsIsLoading} comments={comments} />
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
