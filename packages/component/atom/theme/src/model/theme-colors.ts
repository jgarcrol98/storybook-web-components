export const THEME_COLORS = Object.freeze({
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger',
  LIGHT: 'light',
  MEDIUM: 'medium',
  DARK: 'dark',
});

export type ThemeColor = (typeof THEME_COLORS)[keyof typeof THEME_COLORS];

export const themeColorClassMap = (color: ThemeColor) => ({
  'color-primary': color === 'primary',
  'color-secondary': color === 'secondary',
  'color-success': color === 'success',
  'color-danger': color === 'danger',
  'color-warning': color === 'warning',
  'color-light': color === 'light',
  'color-dark': color === 'dark',
  'color-medium': color === 'medium',
  'color-tertiary': color === 'tertiary',
});
