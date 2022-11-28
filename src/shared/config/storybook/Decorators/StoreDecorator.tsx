import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/auth/byUsername/model/slice/loginSlice';
import { profileReducer } from 'entity/Profile';
import { ReducersList } from 'shared/ui/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entity/Article/model/slices/articleDetailSlice';

const defaultAsyncReducers: ReducersList = {
    login: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
