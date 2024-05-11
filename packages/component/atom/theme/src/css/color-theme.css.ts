import { CSSResult, CSSResultOrNative, css } from 'lit';

export class ColorTheme {
  static cssBase: CSSResult = css`
    :root {
      --theme-color-primary: #ad6c03;
      --theme-color-contrast: #ffffff;

      --theme-color-secondary: #3dc2ff;
      --theme-color-secondary-contrast: #ffffff;

      --theme-color-tertiary: #5260ff;
      --theme-color-tertiary-contrast: #ffffff;

      --theme-color-success: #009e36;
      --theme-color-success-contrast: #ffffff;

      --theme-color-warning: #e9bb3d;
      --theme-color-warning-contrast: #000000;

      --theme-color-danger: #eb445a;
      --theme-color-danger-contrast: #ffffff;

      --theme-color-dark: #222428;
      --theme-color-dark-contrast: #ffffff;

      --theme-color-medium: #92949c;
      --theme-color-medium-contrast: #ffffff;

      --theme-color-light: #f4f5f8;
      --theme-color-light-contrast: #000000;
    }
  `;

  static ColorTheme: CSSResultOrNative[] = [ColorTheme.cssBase];
}
