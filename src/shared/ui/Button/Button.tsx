import { classNames } from 'shared/lib/classNames/className';
import { FC, HTMLAttributes } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background_inverted'
}

export enum ButtonSize {
   M ='m_size',
   L = 'l_size',
   XL = 'xl_size',
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ButtonTheme
    size?: ButtonSize,
    square?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        size = ButtonSize.M,
        square,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls[size]]: true,
        [cls.square]: square,
    };

    return (
        <button
            type="button"
            className={classNames(cls.button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
