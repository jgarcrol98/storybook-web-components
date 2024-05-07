import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
type RippleProps = {
  disabled?: boolean;
};

const meta = {
  title: 'Atom/Ripple',
  argTypes: {},
  render: args => html`
    <div
      class="control-container"
      style="width: 100px; height: 100px; position: relative; border:1px solid red"
    >
      <wc-ripple ?disabled=${args.disabled}></wc-ripple>
    </div>
    <script>
      const div = document.querySelector('.control-container');
      const ripple = document.querySelector('wc-ripple');
      ripple.control = div;
    </script>
  `,
} satisfies Meta<RippleProps>;

export default meta;
type Story = StoryObj<RippleProps>;

export const Default: Story = {
  args: {
    disabled: false,
  },
};
