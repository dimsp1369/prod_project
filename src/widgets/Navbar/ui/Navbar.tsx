import React, {
    memo, Suspense, useCallback, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/className';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthDataState, userActions } from 'entity/User';
import { LogoutBtn } from 'widgets/Navbar/ui/components/LogoutBtn';
import { LoginBtn } from 'widgets/Navbar/ui/components/LoginBtn';
import { PageLoader } from 'widgets/PageLoader';
import { ModalAuth } from 'features/auth/byUsername';
import cls from './Navbar.module.scss';

interface NavbarProps {
   className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getAuthDataState);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, [setIsAuthModal]);

    const onOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, [setIsAuthModal]);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            {authData ? <LogoutBtn onLogout={onLogout} /> : <LoginBtn onOpenModal={onOpenModal} /> }
            <Suspense fallback={<PageLoader />}>
                {isAuthModal && <ModalAuth isOpen={isAuthModal} onClose={onCloseModal} />}
            </Suspense>
        </header>
    );
});
