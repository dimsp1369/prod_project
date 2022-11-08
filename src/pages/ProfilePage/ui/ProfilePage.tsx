import React from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/ui/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entity/Profile';
import { classNames } from 'shared/lib/classNames/className';
import { UserProfile } from 'widgets/UserProfile';
import cls from './ProfilePage.module.scss';

interface ProfilePageProps {
   className?: string;
}

const initialReducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
        <div className={classNames(cls.profilePage, {}, [className])}>
            <UserProfile />
        </div>
    </DynamicModuleLoader>
);

export default ProfilePage;
