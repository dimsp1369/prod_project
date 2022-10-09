import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
   className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation('navbar');
    const [isAuthModal, setIsAuthModal] = useState(false);

    const modalHandler = useCallback(() => {
        setIsAuthModal((prevState) => !prevState);
    }, [setIsAuthModal]);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button theme={ButtonTheme.CLEAR} onClick={modalHandler} className={cls.links}>
                {t('login')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={modalHandler}>
                {t('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, illum.')}
            </Modal>
        </div>
    );
};
