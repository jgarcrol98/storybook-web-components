import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../index';
import { IconFontType } from '../index';
import { icons } from './icons';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
type IconProps = {
  name: string;
  fontType: IconFontType;
  filled: boolean;
};

const meta = {
  title: 'Atom/Icon',

  argTypes: {
    name: {
      control: {
        type: 'select',
      },
      options: icons,
    },
    fontType: {
      control: {
        type: 'select',
      },
      options: ['outlined', 'rounded', 'sharp'],
    },
  },
  render: args => html`
    <wc-icon .name=${args.name} .fontType=${args.fontType} ?filled=${args.filled}></wc-icon>
  `,
} satisfies Meta<IconProps>;

export default meta;
type Story = StoryObj<IconProps>;

export const Default: Story = {
  args: {
    name: 'home',
    fontType: 'outlined',
    filled: false,
  },
};
