import '@material/web/icon/icon.js';
import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { WcIconTheme } from './css/wc-icon-theme.css';
import { WcIconViewModel } from './wc-icon.viewmodel';

export class WcIconView extends WcIconViewModel {
  protected static finalizeStyles(styles?: CSSResultGroup | undefined): CSSResultOrNative[] {
    return [...super.finalizeStyles(styles), WcIconTheme];
  }

  public render(): TemplateResult {
    return html`
      <md-icon
        class="${classMap({
          outlined: this.fontType === 'outlined',
          rounded: this.fontType === 'rounded',
          sharp: this.fontType === 'sharp',
          filled: this.filled,
        })}"
      >
        ${this.name}
      </md-icon>
    `;
  }
}

window.customElements.define('wc-icon', WcIconView);
declare global {
  interface HTMLElementTagNameMap {
    'wc-icon': WcIconView;
  }
}
