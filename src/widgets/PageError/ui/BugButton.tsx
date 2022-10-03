import { Button, ButtonSize } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

interface BugButtonProps {
  className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
    const { t } = useTranslation();
    const [isThrow, setIsThrow] = useState(false);

    useEffect(() => {
        if (isThrow) {
            throw new Error();
        }
    }, [isThrow]);

    const onThrow = () => {
        setIsThrow(true);
    };
    return (
        <Button onClick={onThrow} size={ButtonSize.M}>{t('Bug Test')}</Button>
    );
};
