import { CSSResult, CSSResultOrNative, css } from 'lit';

export class ZIndexTheme {
  static cssBase: CSSResult = css`
    :root {
      --theme-z-index-1: 100;
      --theme-z-index-2: 200;
      --theme-z-index-3: 300;
      --theme-z-index-4: 400;
      --theme-z-index-5: 500;
      --theme-z-index-6: 600;
      --theme-z-index-7: 700;
      --theme-z-index-8: 800;
      --theme-z-index-9: 900;
      --theme-z-index-max: 9999;
    }
  `;

  static ZIndexTheme: CSSResultOrNative[] = [ZIndexTheme.cssBase];
}
