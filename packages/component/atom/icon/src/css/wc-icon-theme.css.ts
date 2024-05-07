import { css } from 'lit';

export const WcIconTheme = css`
  :host {
    display: inline-flex;
    height: var(--theme-icon-size, 24px);
    width: var(--theme-icon-size, 24px);
    font-size: var(--theme-icon-size, 24px);
    --md-icon-size: var(--theme-icon-size, 24px);
  }

  .outlined {
    font-family: 'Material Symbols Outlined';
  }
  .sharp {
    font-family: 'Material Symbols Sharp';
  }
  .rounded {
    font-family: 'Material Symbols Rounded';
  }
  .filled {
    font-variation-settings: 'FILL' 1;
  }
`;
