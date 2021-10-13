import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Subject from './Subject';

export default {
  title: 'MUI/Subject',
  component: Subject,
} as ComponentMeta<typeof Subject>;

const Template: ComponentStory<typeof Subject> = (args) => <Subject {...args} />;

export const Primary = Template.bind({});
