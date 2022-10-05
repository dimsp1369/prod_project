import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from 'shared/ui/Modal';
import { ThemeDecorator } from 'shared/config/storybook/Decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'asdasdadjyasgdkadhky hwqkwhdkjqwhdqkjwhdksahdkashdkashduwqhekq q',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'asdasdadjyasgdkadhky hwqkwhdkjqwhdqkjwhdks  asd asdas dasd as sd aahdkashd askashduwqhekq q',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
