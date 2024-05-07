import { THEME_COLORS, THEME_SIZES } from '@jgarcrol98/wc-theme';

export const STORY_CONTROL_SIZE = {
  control: {
    type: 'select',
  },
  options: Object.values(THEME_SIZES),
};

export const STORY_CONTROL_COLOR = {
  control: {
    type: 'select',
  },
  options: Object.values(THEME_COLORS),
};

export type StoryIntegrationPlatformProps = {
  token: string;
  urlApi: string;
  urlPlatform: string;
};
