import { css } from 'lit';

export const WcRippleTheme = css`
  :host {
    display: block;
  }
  md-ripple {
    border-radius: var(--theme-ripple-border-radius, 0%);
    --md-ripple-hover-color: var(--theme-ripple-color);
    --md-ripple-pressed-color: var(--theme-ripple-color);
  }
`;
