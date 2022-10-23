import { classNames } from 'shared/lib/classNames/className';
import { HTMLAttributes, memo, ReactNode } from 'react';
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
    square?: boolean,
    disabled?: boolean,
    children: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        theme,
        children,
        size = ButtonSize.M,
        square,
        disabled,
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
            disabled={disabled}
            className={classNames(cls.button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
