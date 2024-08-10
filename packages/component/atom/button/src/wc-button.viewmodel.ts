import { THEME_COLORS, THEME_SIZES, ThemeColor, ThemeSize } from '@jgarcrol98/wc-theme';
import { LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { BUTTON_STYLES, ButtonStyle } from './model/button-types';

/**
 * ViewModel at button component.
 *
 * @category Component
 * @class WcButtonViewModel
 * @extends LitElement
 * @property {string} label - text of button.
 * @property {string} icon - icon of button.
 * @property {string} href - Address of button.
 * @property {ThemeColor} color - Theming of button.
 * @property {ThemeSize} size - Size of button.
 * @property {ButtonStyle} button - Button style.
 * @property {boolean} disabled - Indicates is disabled it.
 * @property {boolean} loading - Indicates is loading it.
 * @property {boolean} fullWidth - Indicates is fullWidth it.
 * @property {boolean} iconFilled - Indicates is disabled it.
 *
 * @fires click - Se dispara cuando se hace click en el botón.
 */
export class WcButtonViewModel extends LitElement {
  @property({ type: String }) public label: string = '';
  @property({ type: String }) public icon: string = '';
  @property({ type: String }) public href?: string;
  @property({ type: String, reflect: true }) public color: ThemeColor = THEME_COLORS.PRIMARY;
  @property({ type: String, reflect: true }) public size: ThemeSize = THEME_SIZES.MD;
  @property({ type: String, reflect: true }) public button: ButtonStyle = BUTTON_STYLES.FILLED;
  @property({ type: Boolean, reflect: true }) public disabled: boolean = false;
  @property({ type: Boolean, reflect: true }) public loading: boolean = false;
  @property({ type: Boolean, reflect: true }) public fullWidth: boolean = false;
  @property({ type: Boolean, reflect: true }) public iconFilled: boolean = false;
  @query('.button') protected buttonElement!: HTMLElement;
}
