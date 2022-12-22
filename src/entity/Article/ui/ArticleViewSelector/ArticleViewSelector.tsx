import { classNames } from 'shared/lib/classNames/className';
import { memo } from 'react';
import ListIcon from 'shared/assets/icons/list.svg';
import TilesIcon from 'shared/assets/icons/tile.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ArticleView } from '../../model/types/article';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
   className?: string;
   view: ArticleView;
   onViewClick: (view: ArticleView) => void;
}

const viewType = [
    {
        view: ArticleView.TILE,
        icon: TilesIcon,
    },
    {
        view: ArticleView.LIST,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const {
        className,
        onViewClick,
        view,
    } = props;

    const onViewClickHandler = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            <Button
                theme={ButtonTheme.CLEAR}
                onClick={onViewClickHandler(view === ArticleView.LIST ? ArticleView.TILE : ArticleView.LIST)}
            >
                {view === ArticleView.LIST ? <Icon Svg={TilesIcon} /> : <Icon Svg={ListIcon} />}
            </Button>

            {/* {viewType.map((viewType) => ( */}
            {/*     <Button */}
            {/*         theme={ButtonTheme.CLEAR} */}
            {/*         onClick={onViewClickHandler(viewType.view)} */}
            {/*         key={viewType.view} */}
            {/*     > */}
            {/*         <Icon */}
            {/*             Svg={viewType.icon} */}
            {/*             className={classNames('', { [cls.notSelected]: viewType.view !== view })} */}
            {/*         /> */}
            {/*     </Button> */}
            {/* ))} */}
        </div>
    );
});
