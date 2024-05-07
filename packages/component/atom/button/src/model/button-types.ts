export const BUTTON_STYLES = Object.freeze({
  FILLED: 'filled',
  OUTLINED: 'outlined',
  TEXT: 'text',
});

export type ButtonStyle = (typeof BUTTON_STYLES)[keyof typeof BUTTON_STYLES];
