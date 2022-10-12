import { classNames } from 'shared/lib/classNames/className';
import React, { HTMLAttributes, memo, useState } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<HTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string,
    type?: string,
    value?: string,
    label?:string,
    onChange?: (value: string) => void

}

export const Input = memo((props: InputProps) => {
    const {
        className,
        type = 'text',
        onChange,
        value,
        label,
        ...otherProps
    } = props;

    const [isFilled, setIsFilled] = useState(false);

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setIsFilled(true);
        } else {
            setIsFilled(false);
        }
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.input, {}, [className])}>
            <input
                type={type}
                value={value}
                onChange={onChangeInput}
                {...otherProps}
            />
            {label && <label htmlFor={type} className={isFilled ? cls.active : ''}>{label}</label>}
        </div>
    );
});
