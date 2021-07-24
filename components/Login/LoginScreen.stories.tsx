import {LoginScreen , LoginScreenProps} from './LoginScreen'
import { Meta, Story } from '@storybook/react';
import React from 'react';

export default {
    title: 'Screens/Login',
    component: LoginScreen,
    argTypes: {
      backgroundColor: { control: 'color' },
      textColor: { control: 'color' }
    }
  } as Meta;


export const Default: Story<LoginScreenProps> = (args) => <LoginScreen {...args} />;
Default.args = {
  backgroundColor: '#000',
  textColor: '#fff',
  heading: 'Sign in to your account',
  logoUrl: 'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
};
