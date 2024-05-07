import { THEME_COLORS, THEME_SIZES, ThemeColor, ThemeSize } from '@jgarcrol98/wc-theme';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../index';
import { BUTTON_STYLES, ButtonStyle } from '../index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
type ButtonProps = {
  label: string;
  icon?: string;
  color?: ThemeColor;
  size?: ThemeSize;
  button?: ButtonStyle;
  disabled?: boolean;
  loading?: boolean;
  href?: string;
};

const meta = {
  title: 'Atom/Button',

  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: Object.values(THEME_COLORS),
    },
    size: {
      control: {
        type: 'select',
      },
      options: Object.values(THEME_SIZES),
    },
    button: {
      control: {
        type: 'select',
      },
      options: Object.values(BUTTON_STYLES),
    },
  },
  render: args => html`
    <wc-button
      .label=${args.label}
      .icon=${args.icon}
      .color=${args.color}
      .button=${args.button}
      .size=${args.size}
      .href=${args.href}
      ?disabled=${args.disabled}
      ?loading=${args.loading}
      @click=${console.log}
    ></wc-button>
  `,
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    label: 'Button',
    color: 'primary',
    size: 'md',
    icon: 'stars',
    button: 'filled',
    disabled: false,
    loading: false,
    href: undefined,
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    color: 'secondary',
  },
};

export const Large: Story = {
  args: {
    ...Primary.args,
    size: THEME_SIZES.LG,
  },
};

export const Small: Story = {
  args: {
    ...Primary.args,
    size: THEME_SIZES.SM,
  },
};
