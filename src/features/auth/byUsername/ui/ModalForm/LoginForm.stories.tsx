import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LoginForm } from 'features/auth/byUsername/ui/ModalForm/LoginForm';

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
