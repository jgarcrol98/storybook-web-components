import { WcTheme } from '@jgarcrol98/wc-theme';
import type { Preview } from '@storybook/web-components';
new WcTheme().loadStyles();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
