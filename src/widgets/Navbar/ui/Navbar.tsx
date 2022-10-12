import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ModalAuth } from 'features/auth/byUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
   className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('navbar');
    const [isAuthModal, setIsAuthModal] = useState(true);

    const onCloseModal = useCallback(() => {
        setIsAuthModal((prevState) => !prevState);
    }, [setIsAuthModal]);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR} onClick={onCloseModal} className={cls.links}>
                {t('login')}
            </Button>
            <ModalAuth isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};
