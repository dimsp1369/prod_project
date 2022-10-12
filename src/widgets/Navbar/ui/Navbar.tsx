import React, { useCallback, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { ModalAuth } from 'features/auth/byUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthDataState, userActions } from 'entity/User';
import { LogoutBtn } from 'widgets/Navbar/ui/components/LogoutBtn';
import { LoginBtn } from 'widgets/Navbar/ui/components/LoginBtn';
import cls from './Navbar.module.scss';

interface NavbarProps {
   className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getAuthDataState);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal((prevState) => !prevState);
    }, [setIsAuthModal]);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            {authData ? <LogoutBtn onLogout={onLogout} /> : <LoginBtn onCloseModal={onCloseModal} /> }
            <ModalAuth isOpen={isAuthModal} onClose={onCloseModal} />
        </div>
    );
};
