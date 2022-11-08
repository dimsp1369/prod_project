import { classNames } from 'shared/lib/classNames/className';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { Profile } from 'entity/Profile';
import React, { memo } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { Currency } from 'entity/Currency/model/types/currency';
import { CurrencySelect } from 'entity/Currency';
import { Country } from 'entity/Country/model/types/country';
import { CountrySelect } from 'entity/Country';
import cls from './EditableProfileCard.module.scss';

interface EditableProfileCardProps {
    className?: string,
    data?: Profile,
    onChangeFirstName?: (value: string) => void
    onChangeLastName?: (value: string) => void
    onChangeAge?: (value: string) => void
    onChangeCountry?: (value: Country) => void
    onChangeCity?: (value: string) => void
    onChangeCurrency?: (value: Currency) => void
    onChangeAvatar?: (value: string) => void
    onChangeUsername?: (value: string) => void
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const {
        className,
        data,
        onChangeFirstName,
        onChangeLastName,
        onChangeCity,
        onChangeCountry,
        onChangeCurrency,
        onChangeUsername,
        onChangeAvatar,
        onChangeAge,
    } = props;
    const { t } = useTranslation('profile');

    const acceptNumbersOnly = (e: React.KeyboardEvent<HTMLInputElement>) => !/[0-9]/.test(e.key) && e.preventDefault();

    return (
        <div className={classNames(cls.editableProfileCard, {}, [className])}>
            <Input label={t('First name')} value={data?.first} className={cls.input} onChange={onChangeFirstName} />
            <Input label={t('Last name')} value={data?.lastname} className={cls.input} onChange={onChangeLastName} />
            <Input
                label={t('Age')}
                value={data?.age}
                className={cls.input}
                onChange={onChangeAge}
                onKeyPress={acceptNumbersOnly}
            />
            <Input label={t('Username')} value={data?.username} className={cls.input} onChange={onChangeUsername} />
            <Input label={t('City')} value={data?.city} className={cls.input} onChange={onChangeCity} />
            <CountrySelect value={data?.country} className={cls.input} onChange={onChangeCountry} />
            <CurrencySelect className={cls.input} value={data?.currency} onChange={onChangeCurrency} />
            <Input label={t('Avatar')} value={data?.avatar} className={cls.input} onChange={onChangeAvatar} />
        </div>
    );
});
