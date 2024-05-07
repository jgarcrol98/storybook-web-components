import { CSSResult, CSSResultOrNative, css } from 'lit';

export class MaterialOverridesTheme {
  static cssBase: CSSResult = css`
    :root {
      --md-sys-typescale-headline-small-font: var(--theme-font-family);
      --md-sys-typescale-body-medium-font: var(--theme-font-family);
      --md-sys-color-primary: var(--theme-color-primary);
    }
  `;

  static MaterialOverridesTheme: CSSResultOrNative[] = [MaterialOverridesTheme.cssBase];
}
