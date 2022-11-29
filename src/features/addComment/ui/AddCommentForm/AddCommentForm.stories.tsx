import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import AddCommentFrom from './AddCommentForm';

export default {
    title: 'features/AddCommentFrom',
    component: AddCommentFrom,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AddCommentFrom>;

const Template: ComponentStory<typeof AddCommentFrom> = (args) => <AddCommentFrom {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
