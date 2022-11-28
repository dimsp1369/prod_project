import { classNames, Mods } from 'shared/lib/classNames/className';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
   PRIMARY = 'primary',
   SECONDARY = 'secondary',
   ERROR = 'error'
}

export enum TextAlign {
   LEFT ='left',
   CENTER = 'center',
   RIGHT = 'right'
}

export enum TextSize {
   M = 'size_m',
   L = 'size_l',
}

interface TextProps {
   className?: string,
   text?: string,
   title?: string,
   theme?: TextTheme,
   align?: TextAlign,
   size?: TextSize
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        text,
        title,
        align = TextAlign.LEFT,
        theme = TextTheme.PRIMARY,
        size = TextSize.M,
    } = props;

    const mods: Mods = {
        [cls[theme]]: true,
        [cls[align]]: true,
        [cls[size]]: true,
    };

    return (
        <div className={classNames(cls.Text, mods, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
});
