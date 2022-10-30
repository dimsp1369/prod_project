import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/ui/DynamicModuleLoader/DynamicModuleLoader';
import { getUserProfile, ProfileCard, profileReducer } from 'entity/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

interface ProfilePageProps {
   className?: string;
}

const initialReducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getUserProfile());
    }, [dispatch]);
    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
