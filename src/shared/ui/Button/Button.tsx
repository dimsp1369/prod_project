import { classNames } from 'shared/lib/classNames/className';
import { FC, HTMLAttributes } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {
   const {
      className, theme, children, ...otherProps
   } = props;

   return (
      <button type="button" className={classNames(cls.button, {}, [className, cls[theme]])} {...otherProps}>
         {children}
      </button>
   );
};
