import { classNames } from 'shared/lib/classNames/className';
import cls from './Text.module.scss';

export enum TextTheme {
   PRIMARY = 'primary',
   SECONDARY = 'secondary',
   ERROR = 'error'
}

interface TextProps {
   className?: string,
   text?: string,
   title?: string,
   theme?: TextTheme
}

export const Text = (props: TextProps) => {
    const {
        className, text, title, theme,
    } = props;
    return (
        <div className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
