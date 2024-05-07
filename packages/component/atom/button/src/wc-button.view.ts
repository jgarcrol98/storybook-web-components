import { themeColorClassMap, themeSizeClassMap } from '@jgarcrol98/wc-theme';
import { CSSResultGroup, CSSResultOrNative, TemplateResult, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { until } from 'lit/directives/until.js';
import { when } from 'lit/directives/when.js';
import { literal, html as staticHtml } from 'lit/static-html.js';
import { WcButtonTheme } from './css/wc-button-theme.css';
import { WcButtonViewModel } from './wc-button.viewmodel';

export class WcButtonView extends WcButtonViewModel {
  protected static finalizeStyles(styles?: CSSResultGroup | undefined): CSSResultOrNative[] {
    return [...super.finalizeStyles(styles), WcButtonTheme];
  }

  public render(): TemplateResult {
    const literalTag = this.href ? literal`a` : literal`button`;
    return staticHtml`
      <${literalTag}
        href=${ifDefined(this.href)}
        class="button ${classMap(this._buttonStyles())}"
        ?disabled=${this.disabled}
      >
        ${this._renderIcon()}
        ${this._renderLoadingOrLabel()}
        ${until(this._renderRipple())}
      </${literalTag}>
    `;
  }

  private async _renderRipple() {
    await import('@jgarcrol98/wc-ripple');
    return html`
      <wc-ripple
        class="ripple"
        ?disabled=${this.disabled}
        .control=${this.buttonElement}
      ></wc-ripple>
    `;
  }

  private _buttonStyles() {
    return {
      loading: this.loading,
      filled: this.button === 'filled',
      outlined: this.button === 'outlined',
      text: this.button === 'text',
      ...themeColorClassMap(this.color),
      ...themeSizeClassMap(this.size),
    };
  }

  private _renderLoadingOrLabel() {
    return when(
      this.loading,
      () => {
        import('@material/web/progress/circular-progress');
        return html`<md-circular-progress indeterminate></md-circular-progress>`;
      },
      () => this.label,
    );
  }

  private _renderIcon() {
    return when(this.icon, () => {
      import('@jgarcrol98/wc-icon');
      return html` <wc-icon class="icon" .name=${this.icon} ?filled=${this.iconFilled}></wc-icon> `;
    });
  }
}

window.customElements.define('wc-button', WcButtonView);
declare global {
  interface HTMLElementTagNameMap {
    'wc-button': WcButtonView;
  }
}
