import {classNames} from "shared/lib/classNames/className";
import cls from './Button.module.scss'
import {FC, HTMLAttributes} from "react";

export enum ButtonTheme {
    CLEAR = 'clear'
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {

    const {className, theme, children, ...otherProps} = props

    return (
        <button className={classNames(cls.button, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    );
};
