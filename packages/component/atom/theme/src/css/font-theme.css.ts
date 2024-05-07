import { CSSResult, CSSResultOrNative, css } from 'lit';

export class FontTheme {
  static cssBase: CSSResult = css`
    :root {
      --theme-font-family: Poppins, sans-serif;

      --theme-font-size: 16px;
      --theme-text-color: #414141;
    }
  `;

  static FontTheme: CSSResultOrNative[] = [FontTheme.cssBase];
}
