export const THEME_SIZES = Object.freeze({
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
});

export type ThemeSize = (typeof THEME_SIZES)[keyof typeof THEME_SIZES];

export const themeSizeClassMap = (size: ThemeSize) => ({
  'size-sm': size === 'sm',
  'size-md': size === 'md',
  'size-lg': size === 'lg',
});
