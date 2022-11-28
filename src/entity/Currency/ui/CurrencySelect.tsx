import { classNames } from 'shared/lib/classNames/className';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Currency } from '../model/types/currency';

interface CurrencySelectProps {
    className?: string
    value?: Currency,
    onChange?: (value: Currency) => void
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { className, value, onChange } = props;
    const { t } = useTranslation();

    const onChangeCurrency = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Currency')}
            onChange={onChangeCurrency}
            value={value}
            options={options}
        />
    );
});
