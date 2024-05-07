import { css } from 'lit';

export const WcButtonTheme = css`
  :host {
    display: inline-block;
    position: relative;
    cursor: pointer;
  }
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 0.3rem;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s ease;
    outline: none;
    cursor: pointer;
    position: relative;
    font-family: var(--theme-font-family);
  }

  .ripple {
    --theme-ripple-border-radius: 0.3rem;
  }

  .icon {
    margin-right: 5px;
  }

  .button.size-sm {
    padding: 0.25em 0.55em;
    font-size: 10px;
    --theme-icon-size: 16px;
    --md-circular-progress-size: 16px;
  }
  .button.size-md {
    padding: 0.55rem 0.75rem;
    font-size: 13px;
    --theme-icon-size: 20px;
    --md-circular-progress-size: 20px;
  }
  .button.size-lg {
    padding: 0.5rem 1rem 0.6rem;
    font-size: 1.25rem;
    --theme-icon-size: 32px;
    --md-circular-progress-size: 32px;
  }

  .button.text {
    background-color: transparent;
    color: var(--theme-button-internal-background);
    --theme-ripple-color: var(--theme-button-internal-background);
  }

  .button.filled {
    background-color: var(--theme-button-internal-background);
    color: var(--theme-button-internal-color);
    --theme-ripple-color: var(--theme-button-internal-color);
  }

  .button.outlined {
    background-color: transparent;
    border: 1px solid var(--theme-button-internal-background);
    color: var(--theme-button-internal-background);
    --theme-ripple-color: var(--theme-button-internal-background);
  }

  .button.color-primary {
    --theme-button-internal-background: var(--theme-color-primary);
    --theme-button-internal-color: var(--theme-color-contrast);
  }
  .button.color-secondary {
    --theme-button-internal-background: var(--theme-color-secondary);
    --theme-button-internal-color: var(--theme-color-secondary-contrast);
  }
  .button.color-tertiary {
    --theme-button-internal-background: var(--theme-color-tertiary);
    --theme-button-internal-color: var(--theme-color-tertiary-contrast);
  }
  .button.color-success {
    --theme-button-internal-background: var(--theme-color-success);
    --theme-button-internal-color: var(--theme-color-success-contrast);
  }
  .button.color-warning {
    --theme-button-internal-background: var(--theme-color-warning);
    --theme-button-internal-color: var(--theme-color-warning-contrast);
  }
  .button.color-danger {
    --theme-button-internal-background: var(--theme-color-danger);
    --theme-button-internal-color: var(--theme-color-danger-contrast);
  }
  .button.color-dark {
    --theme-button-internal-background: var(--theme-color-dark);
    --theme-button-internal-color: var(--theme-color-dark-contrast);
  }
  .button.color-medium {
    --theme-button-internal-background: var(--theme-color-medium);
    --theme-button-internal-color: var(--theme-color-medium-contrast);
  }
  .button.color-light {
    --theme-button-internal-background: var(--theme-color-light);
    --theme-button-internal-color: var(--theme-color-light-contrast);
  }
  .button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  :host([fullWidth]),
  :host([fullWidth]) .button {
    width: 100%;
  }

  :host([loading]),
  .button.loading {
    pointer-events: none;
  }
  md-circular-progress {
    --md-circular-progress-active-indicator-width: 15;
    --md-circular-progress-active-indicator-color: var(--theme-color-contrast);
  }
`;
