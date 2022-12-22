import { classNames } from 'shared/lib/classNames/className';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Icon } from 'shared/ui/Icon/Icon';
import View from 'shared/assets/icons/view.svg';
import { Card } from 'shared/ui/Card/Card';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RouterPath } from 'shared/config/routeConfig/routeConfig';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/article';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
   className?: string;
   article: Article;
   view: ArticleView
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view } = props;
    const { t } = useTranslation('article');
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(RouterPath.articles_details + article.id);
    }, [article.id, navigate]);

    const articleTypes = <Text text={article.type.join(', ')} className={cls.types} />;
    const articleViews = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={View} />
        </>
    );

    if (view === ArticleView.LIST) {
        const textBlock = article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar height={30} width={30} border="50%" src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {articleTypes}
                    <img src={article.img} alt={article.title} className={cls.img} />
                    {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />}
                    <div className={cls.footer}>
                        <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
                            {t('Read')}
                        </Button>
                        {articleViews}
                    </div>
                </Card>
            </div>
        );
    }
    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card} onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <img src={article.img} className={cls.img} alt={article.title} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {articleTypes}
                    {articleViews}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </div>
    );
});
