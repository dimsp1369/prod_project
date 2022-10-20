import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoginForm from 'features/auth/byUsername/ui/ModalForm/LoginForm';
import { StoreDecorator } from 'shared/config/storybook/Decorators/StoreDecorator';

export default {
    title: 'feature/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    login: { username: '42134', password: '241' },
})];
