import '@material/web/ripple/ripple.js';
import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from 'lit';
import { WcRippleTheme } from './css/wc-ripple-theme.css';
import { WcRippleViewModel } from './wc-ripple.viewmodel';

export class WcRippleView extends WcRippleViewModel {
  protected static finalizeStyles(styles?: CSSResultGroup | undefined): CSSResultOrNative[] {
    return [...super.finalizeStyles(styles), WcRippleTheme];
  }

  public render(): TemplateResult {
    return html`
      <md-ripple
        ?disabled=${this.disabled}
        ?unbounded=${this.unbounded}
        .control=${this.control}
      ></md-ripple>
    `;
  }
}

window.customElements.define('wc-ripple', WcRippleView);
declare global {
  interface HTMLElementTagNameMap {
    'wc-ripple': WcRippleView;
  }
}
